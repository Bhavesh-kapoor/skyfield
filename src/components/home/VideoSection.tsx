import React from "react";

const VideoSection = () => (
  <div className="flex justify-center items-center relative w-full py-10 lg:py-0 lg:min-h-screen bg-transparent">
    <div className="absolute top-44 left-[-5w0rem] inset-0 flex justify-center items-center">
      <div className="w-2/5  h-screen bg-gradient-to-r from-[#737373] via-10% via-[#737373] to-[#ffa7a7] opacity-30 rounded-full blur-3xl -z-40"></div>
    </div>
    <div className="w-4/5 max-w-6xl lg:h-[80vh] flex justify-center items-center">
      {/* Background Video */}
      <video
        className="w-full lg:h-full object-cover rounded-none shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/videoSection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default VideoSection;
