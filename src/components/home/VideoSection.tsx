import React from "react";

const VideoSection = () => (
  <div className="flex justify-center items-center w-full py-10 lg:py-0 lg:min-h-screen bg-transparent">
    <div className="w-4/5 lg:h-[80vh] flex justify-center items-center">
      {/* Background Video */}
      <video className="w-full lg:h-full object-cover rounded-none shadow-lg" autoPlay loop muted playsInline>
        <source src="/videos/videoSection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default VideoSection;
