"use server";

import { writeClient } from "@/sanity/lib/write-client";

export async function submitReview(formData: { name: string; content: string }) {
  if (!formData.name || !formData.content) {
    return { success: false, message: "Please fill in all fields." };
  }

  try {
    const result = await writeClient.create({
      _type: "review",
      name: formData.name,
      content: formData.content,
      rating: 5, // Default rating
      approved: false, // Wait for admin approval
      date: new Date().toISOString(),
    });

    return { success: true, message: "Thank you for your review! It will be reviewed before appearing.", id: result._id };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "Failed to submit review. Please try again later." };
  }
}
