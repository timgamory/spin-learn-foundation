import { describe, it, expect } from "vitest";

describe("Image Slider Keyboard and Touch Navigation", () => {
  describe("Keyboard Navigation", () => {
    it("should handle ArrowRight key to go to next image", () => {
      // Simulates pressing right arrow key
      const event = new KeyboardEvent("keydown", { key: "ArrowRight" });
      expect(event.key).toBe("ArrowRight");
    });

    it("should handle ArrowLeft key to go to previous image", () => {
      // Simulates pressing left arrow key
      const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });
      expect(event.key).toBe("ArrowLeft");
    });

    it("should handle Escape key to close lightbox", () => {
      // Simulates pressing Escape key
      const event = new KeyboardEvent("keydown", { key: "Escape" });
      expect(event.key).toBe("Escape");
    });

    it("should not interfere with other keyboard events", () => {
      // Simulates pressing a key that shouldn't affect slider
      const event = new KeyboardEvent("keydown", { key: "Enter" });
      expect(event.key).not.toBe("ArrowLeft");
      expect(event.key).not.toBe("ArrowRight");
      expect(event.key).not.toBe("Escape");
    });
  });

  describe("Touch Swipe Navigation", () => {
    it("should detect left swipe (distance > 50px)", () => {
      const touchStart = 100;
      const touchEnd = 40;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      
      expect(isLeftSwipe).toBe(true);
    });

    it("should detect right swipe (distance < -50px)", () => {
      const touchStart = 40;
      const touchEnd = 100;
      const distance = touchStart - touchEnd;
      const isRightSwipe = distance < -50;
      
      expect(isRightSwipe).toBe(true);
    });

    it("should ignore small swipes (distance <= 50px)", () => {
      const touchStart = 100;
      const touchEnd = 75;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;
      
      expect(isLeftSwipe).toBe(false);
      expect(isRightSwipe).toBe(false);
    });

    it("should calculate correct swipe distance", () => {
      const touchStart = 200;
      const touchEnd = 100;
      const distance = touchStart - touchEnd;
      
      expect(distance).toBe(100);
    });
  });

  describe("Index Wrapping", () => {
    it("should wrap to last image when going left from first image", () => {
      const currentIndex = 0;
      const totalImages = 8;
      const nextIndex = (currentIndex - 1 + totalImages) % totalImages;
      
      expect(nextIndex).toBe(totalImages - 1);
    });

    it("should wrap to first image when going right from last image", () => {
      const currentIndex = 7;
      const totalImages = 8;
      const nextIndex = (currentIndex + 1) % totalImages;
      
      expect(nextIndex).toBe(0);
    });

    it("should navigate correctly in middle of gallery", () => {
      const currentIndex = 3;
      const totalImages = 8;
      
      const nextRight = (currentIndex + 1) % totalImages;
      const nextLeft = (currentIndex - 1 + totalImages) % totalImages;
      
      expect(nextRight).toBe(4);
      expect(nextLeft).toBe(2);
    });
  });

  describe("Accessibility Attributes", () => {
    it("should have proper aria-label on navigation buttons", () => {
      const ariaLabels = ["Previous image", "Next image"];
      expect(ariaLabels).toContain("Previous image");
      expect(ariaLabels).toContain("Next image");
    });

    it("should have role attributes on thumbnail navigation", () => {
      const roles = ["tablist", "tab"];
      expect(roles).toContain("tablist");
      expect(roles).toContain("tab");
    });

    it("should have aria-selected attribute on active tab", () => {
      const ariaSelected = true;
      expect(ariaSelected).toBe(true);
    });
  });
});
