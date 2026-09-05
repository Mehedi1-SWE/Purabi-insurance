import { useState } from "react";

const categories = [
  {
    title: "Fire Insurance",
    description:
      "With our Fire insurance policies, you can choose from various coverage options that protect your property, equipment,",
    image: "/flame.png.png",
  },
  {
    title: "Health Insurance",
    description:
      "With our Health insurance policies, you can choose from various coverage options that protect your property, equipment,",
    image: "/healthcare.png.png",
  },
  {
    title: "Motor Insurance",
    description:
      "Motor Car insurance provides comprehensive protection for your vehicles, covering accidents, theft.",
    image: "/protection.png.png",
  },
  {
    title: "Marine Insurance",
    description:
      "We offer comprehensive and flexible coverage for your vessels, protecting against physical damage,",
    image: "/logistics-delivery.png.png",
  },
  {
    title: "Travel Insurance",
    description:
      "Our Travel Insurance (Overseas Mediclaim Insurance) ensures comprehensive coverage for medical emergencies.",
    image: "/travel-insurance.png.png",
  },
  {
    title: "Engineering Insurance",
    description:
      "Engineering insurance provides protection for machinery, equipment, and engineering projects against unexpected damage.",
    image: "/protection.png.png",
  },
  {
    title: "Aviation Insurance",
    description:
      "Aviation insurance provides coverage for aircraft and related risks, including accidental damage and liability.",
    image: "/logistics-delivery.png.png",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16.77"
      height="16.77"
      viewBox="0 0 17 17"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.2 14.8L14.8 2.2M14.8 2.2H5.5M14.8 2.2V11.5"
        stroke="#FFFFFF"
        strokeWidth="1.46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Category() {
  const [showMore, setShowMore] = useState(false);
  const visibleCategories = showMore ? categories : categories.slice(0, 5);
  const extraCategories = showMore ? categories.slice(5) : [];

  return (
    <section className="w-full bg-white p-[80px]">
      <div className="mx-auto flex w-[1760px] flex-col gap-[60px]">

        {/* Heading */}
        <div className="flex h-[134px] w-[1760px] flex-col items-center">
          <h2 className="h-[72px] w-[659px] whitespace-nowrap text-center font-[Poppins] text-[48px] font-semibold uppercase leading-[100%] tracking-[0%] text-black">
            CATEGORIES OF INSURANCE
          </h2>

          <div className="mt-[10px] flex h-[42px] w-[1760px] items-center justify-center px-[10px]">
            <p className="h-[42px] w-[1280px] text-center font-[Poppins] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]">
              At SIPLC, we exceed customer expectations by being available both
              physically and virtually on their preferred channels. As a
              leading general insurer in Bangladesh, we are committed to
              continuous development and improvement, ensuring every citizen
              can access insurance benefits without hindrance
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="w-[1760px]">
          <div className="flex gap-[27px]">
            {visibleCategories.slice(0, 5).map((category) => (
              <article
                key={category.title}
                className="relative h-[252.292px] w-[350px] shrink-0 rounded-[21.88px] bg-[#F7ECEA]"
              >
                <div className="absolute left-[33.54px] top-[16.04px] flex h-[184.48px] w-[282.92px] flex-col items-center text-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-[60px] w-[60px] object-contain"
                  />

                  <h3 className="mt-[7.29px] h-[27px] whitespace-nowrap font-[Poppins] text-[18px] font-bold uppercase leading-[100%] tracking-[0%] text-black">
                    {category.title}
                  </h3>

                  <p className="mt-[7.29px] h-[54px] w-[268.33px] font-[Poppins] text-[12px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]">
                    {category.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 h-[34px] w-[82px] -translate-x-1/2 rounded-t-full bg-white" />

                <button
                  type="button"
                  aria-label={`View ${category.title}`}
                  className="absolute left-1/2 top-[222.4px] z-10 flex h-[59.79px] w-[59.79px] -translate-x-1/2 items-center justify-center rounded-full bg-[#AC3E25]"
                >
                  <ArrowIcon />
                </button>
              </article>
            ))}
          </div>

          {showMore && (
            <div className="mt-[27px] flex justify-center gap-[27px]">
              {extraCategories.map((category) => (
                <article
                  key={category.title}
                  className="relative h-[252.292px] w-[350px] shrink-0 rounded-[21.88px] bg-[#F7ECEA]"
                >
                  <div className="absolute left-[33.54px] top-[16.04px] flex h-[184.48px] w-[282.92px] flex-col items-center text-center">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-[60px] w-[60px] object-contain"
                    />

                    <h3 className="mt-[7.29px] h-[27px] whitespace-nowrap font-[Poppins] text-[18px] font-bold uppercase leading-[100%] tracking-[0%] text-black">
                      {category.title}
                    </h3>

                    <p className="mt-[7.29px] h-[54px] w-[268.33px] font-[Poppins] text-[12px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]">
                      {category.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-1/2 h-[34px] w-[82px] -translate-x-1/2 rounded-t-full bg-white" />

                  <button
                    type="button"
                    aria-label={`View ${category.title}`}
                    className="absolute left-1/2 top-[222.4px] z-10 flex h-[59.79px] w-[59.79px] -translate-x-1/2 items-center justify-center rounded-full bg-[#AC3E25]"
                  >
                    <ArrowIcon />
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* See More */}
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="mx-auto flex h-[57px] w-[242.8px] items-center justify-center gap-[15.71px] rounded-[5px] border border-[#AC3E2533] bg-[#AC3E25] px-[30px] py-[15px] font-[Poppins] text-[12px] font-medium leading-[100%] tracking-[0%] text-white transition hover:bg-[#922F1C]"
        >
          {showMore ? "Show Less" : "See More"}

          <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
