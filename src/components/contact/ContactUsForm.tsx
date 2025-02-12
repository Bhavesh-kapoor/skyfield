import React from "react";
import HeaderSection from "../common/HeaderSection";
import ContactDetails from "./ContactDetails";

export default function ContactUsForm({ details }: { details?: boolean }) {
  return (
    <div className="max-w-7xl p-4 m-auto lg:block">
      <HeaderSection
        title="Contact Us"
        subTitle={""}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
        textColor="gray"
      />
      <div className="w-full lg:p-16 lg:px-48 mx-auto">
        <div className="border-[1.5px] border-gray-900 p-10">
          <h2 className="text sm:text-sm md:text-lg lg:text-xl xl:text-xl font-medium tracking-widest mb-4  ">
            Send Us Query
          </h2>
          <form action="/" className="grid grid-cols-2 gap-6 ">
            <input
              type="text"
              className="border border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="First Name"
            />{" "}
            <input
              type="text"
              className="border border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="First Name"
            />{" "}
            <input
              type="text"
              className="border border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="First Name"
            />{" "}
            <input
              type="text"
              className="border border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="First Name"
            />
            <textarea
              rows={5}
              placeholder="Type Query..."
              className="border col-span-2 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
            ></textarea>
            <input
              type="submit"
              className="border col-span-2 bg-gray-900 border-gray-900 p-3 text-gray-50 px-4 w-full mb-2"
              placeholder="First Name"
            />
          </form>
        </div>
        {details ? <ContactDetails /> : ""}
      </div>
    </div>
  );
}
