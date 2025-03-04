
'use client'
import { useState } from "react";

const NewsLatter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page
    setIsSubmitting(true);
    setStatusMessage(null);
    setIsError(false);

    // Simulate API call for subscribing
    try {
      // Assuming you are sending the email to an API endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/latter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // If the subscription is successful
        setStatusMessage("You have successfully subscribed!");
        setEmail(""); // Clear the input field
      } else {
        // If there's an error with the response
        setIsError(true);
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Catch any unexpected errors
      setIsError(true);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-lg font-semibold">Subscribe to Our Newsletter!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          className="border p-2 bg-transparent rounded px-4 w-full mb-2"
          placeholder="Enter Your Email Address"
        />
        <button
          type="submit"
          className={`w-full text-center text-gray-700 bg-[#FFA7A7] p-2 rounded hover:bg-[#ff8c8c] transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Subscribe Now"}
        </button>
      </form>

      {/* Show the status message */}
      {statusMessage && (
        <div className={`mt-4 text-center ${isError ? "text-red-500" : "text-green-500"}`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
};
export default NewsLatter;
