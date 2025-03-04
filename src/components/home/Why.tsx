import {
  ISection,
  SectionContent,
  SectionResponse,
  SubContent,
} from "@/utils/server";
import Image from "next/image";

const Why = ({ sectionData }: { sectionData: SectionResponse }) => {
  if (!sectionData) return null;

  const clients: SectionContent[] = sectionData?.contents || [
    { title: "Innovation", image: "/images/bulb.png" },
    { title: "Quality", image: "/images/high-qualty.png" },
    { title: "Customer Focus", image: "/images/consumer-centric.png" },
    { title: "Global Support", image: "/images/global-online.png" },
  ];

  const bgShades = [
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
    "bg-gray-800",
    "bg-gray-900",
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto p-4 lg:p-0">
      {/* Radial Gradient Background */}

      {/* Content */}
      <div className="relative z-10 text-center lg:w-3/5 mx-auto lg:mb-16 lg:p-16">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          {sectionData.subTitle || "Our Commitments"}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData.title || "Why SkyField"}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-100 mt-4 leading-8">
          {sectionData.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      </div>

      {/* Clients Grid */}
      <div className="relative z-10 py-8">
        <div className="max-w-screen-xl mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients &&
            clients.map((client: SectionContent, index: number) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center h-64 rounded-lg shadow-lg p-6 ${
                  bgShades[8 - index]
                }`}
              >
                <Image
                  src={client?.image || "/images/bulb.png"}
                  width={5000}
                  height={5000}
                  alt={client?.title || "Client Logo"}
                  className="w-28 h-28 object-contain p-2"
                />
                <p className="mt-2 text-lg font-semibold text-center text-gray-50">
                  {client.title || "Client Name"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
