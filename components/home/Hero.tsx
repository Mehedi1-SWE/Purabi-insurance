import { useState } from "react";
import { Link } from "react-router";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-[800px] overflow-hidden">
      {/* Background */}
      <img
        src="/hero.png.jpg"
        alt="Purabi General Insurance"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container relative mx-auto flex min-h-[800px] items-center px-5 lg:px-20">
        <div className="space-y-[45px]">

          {/* Heading */}
          <div className="w-[879px]">
            <p className="mb-5 text-[12px] font-medium text-white">
              Protecting Value Through Innovation
            </p>

            <h1 className="text-[52px] font-medium leading-[45px] text-white">
              Leading Insurance Solutions for Your Peace of Mind
            </h1>
          </div>

          {/* Description */}
          <p className="w-[650px] text-sm leading-6 text-white">
            Purabi General Insurance Company Limited (PGICL), established in
            1988, is a leading insurer in Bangladesh, providing comprehensive
            asset protection for corporate organizations.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5">

            <Link
              to="/about"
              className="bg-[#AC3E25] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#922F1C]"
            >
              Discover More
            </Link>

            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="flex cursor-pointer items-center gap-3 text-sm font-medium text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white">
                ▶
              </span>

              Watch Video
            </button>

          </div>
        </div>
      </div>

      {/* Video */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 cursor-pointer text-2xl text-white"
              aria-label="Close video"
            >
              ×
            </button>

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