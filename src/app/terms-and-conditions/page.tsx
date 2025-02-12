import HeroSection from "@/components/home/HeroSection";
import React from "react";

export default function page() {
  const data = {
    title: "Terms And Conditions",
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
        video={data.video}
      />

      <div className="max-w-7xl lg:max-w-6xl m-auto p-4 lg:py-24">
        <div className="mr-auto text-left mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-7">
            Terms & Conditions
          </h2>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Introduction
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              These Terms & Conditions govern your use of our website. By
              accessing or using our services, you agree to comply with these
              terms.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              User Responsibilities
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              As a user, you agree to:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Provide accurate and up-to-date information when required.
              </li>
              <li>
                Respect intellectual property rights and other applicable laws.
              </li>
              <li>
                Refrain from engaging in fraudulent or malicious activities.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Limitations of Liability
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              We are not liable for any direct, indirect, or consequential
              damages resulting from your use of our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">Termination</h3>
            <p className="text-gray-600 mt-2 leading-8">
              We reserve the right to suspend or terminate access to our
              services at our discretion, without notice, if a user violates
              these terms.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Changes to Terms
            </h3>
            <p className="text-gray-600 mt-2 leading-8">
              We may update these Terms & Conditions from time to time.
              Continued use of our website constitutes acceptance of any
              changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
