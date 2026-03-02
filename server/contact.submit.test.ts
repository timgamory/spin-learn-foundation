import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createContactSubmission, getContactSubmissions } from "./db";

describe("Contact Form Submission Database Functions", () => {
  let testSubmissionId: number;

  describe("createContactSubmission", () => {
    it("should create a contact submission", async () => {
      const submission = await createContactSubmission({
        name: "John Doe",
        email: "john@example.com",
        category: "General Inquiry",
        message: "This is a test message for the contact form",
      });

      expect(submission).toBeDefined();
      expect(submission?.name).toBe("John Doe");
      expect(submission?.email).toBe("john@example.com");
      expect(submission?.category).toBe("General Inquiry");
      expect(submission?.message).toBe("This is a test message for the contact form");
      expect(submission?.status).toBe("new");

      if (submission?.id) {
        testSubmissionId = submission.id;
      }
    });

    it("should create a partnership inquiry", async () => {
      const submission = await createContactSubmission({
        name: "Jane Smith",
        email: "jane@company.com",
        category: "Partnership",
        message: "We would like to partner with your foundation on a community initiative",
      });

      expect(submission).toBeDefined();
      expect(submission?.category).toBe("Partnership");
      expect(submission?.email).toBe("jane@company.com");
    });
  });

  describe("getContactSubmissions", () => {
    it("should retrieve all contact submissions", async () => {
      const submissions = await getContactSubmissions();

      expect(Array.isArray(submissions)).toBe(true);
      if (submissions.length > 0) {
        expect(submissions[0]).toHaveProperty("id");
        expect(submissions[0]).toHaveProperty("name");
        expect(submissions[0]).toHaveProperty("email");
        expect(submissions[0]).toHaveProperty("message");
        expect(submissions[0]).toHaveProperty("status");
      }
    });

    it("should return submissions in reverse chronological order", async () => {
      const submissions = await getContactSubmissions();

      if (submissions.length > 1) {
        const first = new Date(submissions[0].createdAt).getTime();
        const second = new Date(submissions[1].createdAt).getTime();
        expect(first).toBeGreaterThanOrEqual(second);
      }
    });
  });
});
