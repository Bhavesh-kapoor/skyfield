// "use client";
// import React, { useState } from "react";
// import HeaderSection from "../common/HeaderSection";
// import ContactDetails from "./ContactDetails";

// export default function ContactUsForm({ details }: { details?: boolean }) {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     description: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Handle input changes
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       console.log(formData)
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (!response.ok)
//         throw new Error(result.message || "Something went wrong");

//       setSuccess("Your message has been sent successfully!");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         description: "",
//       }); // Reset form
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-7xl p-4 m-auto lg:block">
//       <HeaderSection
//         title="Contact Us"
//         subTitle=""
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         textColor="gray"
//       />

//       <div className="w-full lg:p-16 lg:px-48 mx-auto">
//         <div className="border-[1.5px] border-gray-900 p-10">
//           <h2 className="text sm:text-sm md:text-lg lg:text-xl xl:text-xl font-medium tracking-widest mb-4">
//             Send Us Query
//           </h2>

//           {/* Success/Error Message */}
//           {success && <p className="text-green-600">{success}</p>}
//           {error && <p className="text-red-600">{error}</p>}

//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 md:gap-6"
//           >
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
//               placeholder="First Name"
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
//               placeholder="Last Name"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
//               placeholder="Email"
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
//               placeholder="Phone"
//               required
//             />
//             <textarea
//               name="description"
//               rows={5}
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Type your query..."
//               className="border col-span-2 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="border col-span-2 bg-gray-900 border-gray-900 p-3 text-gray-50 px-4 w-full mb-2"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Submit"}
//             </button>
//           </form>
//         </div>

//         {details && <ContactDetails />}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import HeaderSection from "../common/HeaderSection";
import ContactDetails from "./ContactDetails";

// Thank You Modal Component
const ThankYouModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96 text-center">
        <h2 className="text-xl font-semibold">Thank You!</h2>
        <p className="text-gray-700 mt-2">
          Your message has been sent successfully. We will get back to you soon.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-900 text-white px-6 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function ContactUsForm({ details }: { details?: boolean }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false); // Modal state

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation whenever the user changes an input
    setFormErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      switch (name) {
        case "firstName":
          newErrors.firstName = value ? "" : "First name is required";
          break;
        case "lastName":
          newErrors.lastName = value ? "" : "Last name is required";
          break;
        case "email":
          if (!value) {
            newErrors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            newErrors.email = "Please enter a valid email address";
          } else {
            newErrors.email = "";
          }
          break;
        case "phone":
          if (!value) {
            newErrors.phone = "Phone number is required";
          } else if (!/^[0-9]+$/.test(value)) {
            newErrors.phone = "Phone number can only contain numbers";
          } else {
            newErrors.phone = "";
          }
          break;
        case "description":
          newErrors.description = value ? "" : "Description is required";
          break;
        default:
          break;
      }
      return newErrors;
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validate form
    // const validationErrors: any = validateForm();
    // if (Object.keys(validationErrors).length > 0) {
    //   setFormErrors(validationErrors); // Set validation errors if any
    //   setLoading(false);
    //   return;
    // }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Something went wrong");

      setSuccess("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      }); // Reset form

      setShowModal(true); // Show the Thank You modal after successful submission
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-7xl p-4 m-auto lg:block">
      <HeaderSection
        title="Contact Us"
        subTitle=""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        textColor="gray"
      />

      <div className="w-full lg:p-16 lg:px-48 mx-auto">
        <div className="border-[1.5px] border-gray-900 p-10">
          <h2 className="text sm:text-sm md:text-lg lg:text-xl xl:text-xl font-medium tracking-widest mb-4">
            Send Us Query
          </h2>

          {/* Success/Error Message */}
          {/* {success && <p className="text-green-600">{success}</p>} */}
          {/* {error && <p className="text-red-600">{error}</p>} */}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-6"
          >
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
                placeholder="First Name"
              />
              {formErrors.firstName && (
                <p className="text-red-600 text-sm">{formErrors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
                placeholder="Last Name"
              />
              {formErrors.lastName && (
                <p className="text-red-600 text-sm">{formErrors.lastName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
                placeholder="Email"
              />
              {formErrors.email && (
                <p className="text-red-600 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
                placeholder="Phone"
              />
              {formErrors.phone && (
                <p className="text-red-600 text-sm">{formErrors.phone}</p>
              )}
            </div>
            <div className="col-span-2">
              <textarea
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Type your query..."
                className="border  border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              ></textarea>
              {formErrors.description && (
                <p className="text-red-600 text-sm">{formErrors.description}</p>
              )}
            </div>

            <button
              type="submit"
              className="border col-span-2 bg-gray-900 border-gray-900 p-3 text-gray-50 px-4 w-full mb-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {details && <ContactDetails />}

        {/* Show the Thank You modal if submission was successful */}
        {showModal && <ThankYouModal onClose={closeModal} />}
      </div>
    </div>
  );
}
