import { useState } from "react";
import { Link } from "react-router";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative box-border h-[800px] w-[1440px] min-w-[1280px] max-w-[1920px] overflow-hidden border border-[rgba(0,0,0,0.2)] px-[80px]">

      {/* Background */}
      <img
        src="/hero.png.jpg"
        alt="Purabi General Insurance"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,#000000_100%)]" />

      {/* ================= MAIN INNER LAYOUT ================= */}
      {/* Width: 1000px | Height: 429.2386px | Gap: 49.88px */}

      <div className="relative flex h-[429.2386px] w-[1000px] shrink-0 flex-col gap-[49.88px]">

        {/* ================= 1ST LAYOUT ================= */}
        {/* Width: 444.8681px | Height: 20px | Gap: 19.33px */}

        <div className="flex h-[20px] w-[444.8681px] shrink-0 items-center gap-[19.33px]">

          <p className="font-['Poppins'] text-[12px] font-medium leading-[100%] text-white">
            Protecting Value Through Innovation
          </p>

        </div>


        {/* ================= 2ND LAYOUT ================= */}
        {/* Width: 1000px | Height: 180px | Gap: 12.89px */}

        <div className="flex h-[180px] w-[1000px] shrink-0 flex-col gap-[12.89px]">

          <h1 className="font-['Poppins'] text-[52px] font-medium leading-[45px] text-white">
            Leading Insurance Solutions for Your Peace of Mind
          </h1>

        </div>


        {/* ================= 3RD LAYOUT ================= */}
        {/* Width: 879.0524px | Height: 90px */}

        <div className="h-[90px] w-[879.0524px] shrink-0">

          <p className="font-['Poppins'] text-[14px] font-normal leading-[24px] text-white">
            Purabi General Insurance Company Limited (PGICL),
            established in 1988, is a leading insurer in Bangladesh,
            providing comprehensive asset protection for corporate
            organizations.
          </p>

        </div>


        {/* ================= 4TH LAYOUT ================= */}
        {/* Width: 490.1112px | Height: 64.4256px | Gap: 45.1px */}

        <div className="flex h-[64.4256px] w-[490.1112px] shrink-0 items-center gap-[45.1px]">

          {/* Discover More */}
          <Link
            to="/about"
            className="flex items-center justify-center bg-[#AC3E25] px-[24px] py-[12px] font-['Poppins'] text-[14px] font-medium text-white transition hover:bg-[#922F1C]"
          >
            Discover More
          </Link>

          {/* Watch Video */}
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className="flex cursor-pointer items-center gap-[12px] font-['Poppins'] text-[14px] font-medium text-white"
          >
            <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white">
              ▶
            </span>

            Watch Video
          </button>

        </div>
      </div>


      {/* ================= VIDEO MODAL ================= */}

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 cursor-pointer text-2xl text-white"
              aria-label="Close video"
            >
              ×
            </button>

            {/* Video */}
            <video
              src="/insurance-video.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            />

          </div>
        </div>
      )}
    </section>
  );
}