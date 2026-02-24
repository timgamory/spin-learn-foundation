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
- [x] Reframe "Why We Matter" section to donor-focused messaging ("You are helping...")
- [x] Update all six impact cards with donor perspective and improved titles

## In Progress / Next Steps
- [x] Revise card layout and design for "Why Your Support Matters" section - tighter grid, stronger borders, cleaner design
- [x] Create new Programs page with all program content
- [x] Add Programs route to App.tsx
- [x] Add Home link to navigation bar
- [x] Increase font sizes for six impact cards (text-2xl titles, text-base descriptions)
- [x] Add "Explore Our Programs" CTA button below cards with arrow icon
- [x] Remove Programs section from landing page (moved to dedicated /programs page)
- [x] Remove Yasiris Ortiz section from landing page (can be added to dedicated About page later)
- [x] Add hover color to navigation links matching design palette (deep blue #015486)
- [x] Fix Home link to navigate to landing page (same as logo click)
- [x] Add navigation bar to Programs page
- [x] Remove "NYS MWBE Certified" text from footer
- [x] Fix website navigation and page routing with all required pages
- [x] Create About page with founder information
- [x] Create Blog page with blog posts
- [x] Create Support page with partnership and donation info
- [x] Create Contact page with contact form
- [x] Update App.tsx with all routes
- [x] Fix all navigation links to use proper anchor tags
- [x] Test all navigation links - all working correctly
- [x] Update navigation hover colors to bright yellow (#ffe929) across all pages
- [x] Changed navigation hover effect from text color to yellow underline for cleaner look
- [x] Added deep blue background (#00548a) and white text to navigation hover effect across all pages
- [x] Remove dark blue background box from nav links and replace with simple thin underline (#00548a)
- [ ] Add admin navigation link to main website (visible only to admins)
- [ ] Create functional contact form with email integration
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
