# Spin & Learn Foundation - Project TODO

## Completed Features
- [x] Fix carousel visibility issue - updated image paths to use existing files
- [x] Create database schema for carousel_images table
- [x] Build tRPC procedures for carousel image management (list, upload, delete, updateOrder)
- [x] Create admin panel page for image management at /admin
- [x] Integrate S3 file storage for carousel images
- [x] Update Home page to load carousel images from database with fallback to static images
- [x] Write and pass tests for carousel image database functions (6 tests passing)
- [x] Add Admin route to App.tsx

## In Progress / Next Steps
- [ ] Add admin navigation link to main website (visible only to admins)
- [ ] Create contact form with email integration
- [ ] Add testimonials section with rotating quotes
- [ ] Implement newsletter signup form
- [ ] Add image optimization for carousel
- [ ] Create blog post management system
- [ ] Add analytics tracking
- [ ] Set up email notifications for form submissions

## Known Limitations
- Carousel currently uses static fallback images if database is empty
- Admin panel requires authentication and admin role
- Image upload limited to 10MB files
- S3 storage requires BUILT_IN_FORGE_API_KEY and BUILT_IN_FORGE_API_URL environment variables

## Testing Status
- ✓ All carousel database tests passing (5 tests)
- ✓ Auth logout test passing (1 test)
- Total: 6/6 tests passing
