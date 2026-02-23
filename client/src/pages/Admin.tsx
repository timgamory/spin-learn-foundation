import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { useState, useRef } from "react";
import { Trash2, Upload, AlertCircle } from "lucide-react";

export default function Admin() {
  const { user, isAuthenticated } = useAuth();
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: carouselImages, isLoading, refetch } = trpc.carousel.list.useQuery();
  const uploadMutation = trpc.carousel.upload.useMutation();
  const deleteMutation = trpc.carousel.delete.useMutation();

  // Check if user is admin
  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground">
            You do not have permission to access the admin panel. Only administrators can manage carousel images.
          </p>
        </Card>
      </div>
    );
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setUploadSuccess(null);

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setUploadError("Please select a valid image file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("File size must be less than 10MB");
      return;
    }

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = (event.target?.result as string).split(",")[1];
        
        try {
          await uploadMutation.mutateAsync({
            title: file.name.replace(/\.[^/.]+$/, ""),
            description: "",
            imageBase64: base64,
            mimeType: file.type,
            fileName: file.name,
          });

          setUploadSuccess("Image uploaded successfully!");
          refetch();
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        } catch (error) {
          setUploadError(error instanceof Error ? error.message : "Upload failed");
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setUploadError("Failed to process file");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      await deleteMutation.mutateAsync({ id });
      setUploadSuccess("Image deleted successfully!");
      refetch();
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-foreground">Spin & Learn Admin</h1>
          <div className="text-sm text-muted-foreground">
            Logged in as {user?.name || user?.email}
          </div>
        </div>
      </nav>

      <div className="container mx-auto pt-24 pb-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Carousel Image Management</h2>

          {/* Upload Section */}
          <Card className="p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Upload New Image</h3>
            
            {uploadError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-red-700">
                {uploadError}
              </div>
            )}

            {uploadSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-green-700">
                {uploadSuccess}
              </div>
            )}

            <div className="flex gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadMutation.isPending}
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                {uploadMutation.isPending ? "Uploading..." : "Select Image"}
              </Button>
            </div>
          </Card>

          {/* Images List */}
          <Card className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Current Carousel Images</h3>

            {isLoading ? (
              <p className="text-muted-foreground">Loading images...</p>
            ) : !carouselImages || carouselImages.length === 0 ? (
              <p className="text-muted-foreground">No carousel images yet. Upload one to get started.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {carouselImages.map((image) => (
                  <div key={image.id} className="border border-border rounded-lg overflow-hidden">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-foreground mb-2">{image.title}</h4>
                      {image.description && (
                        <p className="text-sm text-muted-foreground mb-3">{image.description}</p>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          Order: {image.displayOrder}
                        </span>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(image.id)}
                          disabled={deleteMutation.isPending}
                          className="flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
