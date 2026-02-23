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
