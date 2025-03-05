import HeroSection from "@/components/home/HeroSection";
import React from "react";

export default function page() {
  const data = {
    title: "Privacy Policy",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className="bg-gray-50">
      <HeroSection
        title={data.title}
        description={data.description}
        link={data.link}
        video={''}
      />

      <div className="max-w-7xl lg:max-w-6xl m-auto p-4 lg:py-24">
        <div className="mr-auto text-left mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-7">
            Privacy Policy
          </h2>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Introduction
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your personal information when you
              visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Information We Collect
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              We collect various types of information, including:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Personal data you provide, such as name and email address.
              </li>
              <li>
                Automatically collected information, such as IP address and
                browsing behavior.
              </li>
              <li>
                Cookies and tracking technologies for a better user experience.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              How We Use Your Information
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              We use collected data for the following purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>To improve our services and user experience.</li>
              <li>To communicate with you about updates and promotions.</li>
              <li>To ensure website security and prevent fraud.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Data Protection
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              We take appropriate security measures to prevent unauthorized
              access, alteration, disclosure, or destruction of your personal
              data.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">Your Rights</h3>
            <p className="text-gray-600 mt-2 leading-8">
              You have the right to access, update, or delete your personal
              data. If you wish to exercise these rights, please contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
