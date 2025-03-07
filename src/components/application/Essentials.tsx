import { SectionContent, SectionResponse } from "@/utils/server";
import Image from "next/image";

const Essentials = ({
  sectionData,
}: {
  sectionData: SectionResponse | undefined;
}) => {
  const clients = [
    {
      id: 1,
      name: "Search and Rescue",
      desc: "Access to hard-to-reach locations and identification of victims.",
      logo: "/images/flotingTyre.png",
    },
    {
      id: 2,
      name: "Disaster Response",
      desc: "Resource management and coordination of operations in disaster situations.",
      logo: "/images/wave.png",
    },
    {
      id: 3,
      name: "Fire Fighting Support",
      desc: "Assistance in extinguishing fires using thermal information and area monitoring.",
      logo: "/images/fire.png",
    },
    {
      id: 4,
      name: "Fire Fighting Support",
      desc: "Assistance in extinguishing fires using thermal information and area monitoring.",
      logo: "/images/exit.png",
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto p-4 lg:p-0">
      {/* Radial Gradient Background */}

      {/* Content */}
      <div className="relative z-10 text-center lg:w-3/5 mx-auto lg:mb-2 lg:p-12">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          {sectionData?.subTitle || "Our Commitments"}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData?.title || "Why SkyField"}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-100 mt-4 leading-8">
          {sectionData?.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      </div>

      {/* Clients Grid */}
      <div className="relative z-10 py-8">
        <div className="max-w-screen-xl mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionData?.contents && sectionData?.contents.map((client:SectionContent, index:any) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center h-64 rounded-lg p-6 bg-transparent`}
            >
              <Image
                   src={
                    sectionData?.coverImage
                      ? `${process.env.NEXT_PUBLIC_API_URL}/${sectionData.coverImage
                          .replace(/\\/g, "/")
                          .replace(/^\/+/, "")}` // Handle backslashes and forward slashes
                      : "/images/wave.png" // Fallback image if no cover image
                  }
                width={5000}
                height={5000}
                alt={client?.title || "Client Logo"}
                className="w-28 h-28 object-contain p-2"
              />
              <p className="mt-2 text-lg font-semibold text-center text-gray-50">
                {client.title || "Client Name"}
              </p>
              <p className="mt-2 text-xs font-   text-center text-gray-300">
                {client.description || "Client Description"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
