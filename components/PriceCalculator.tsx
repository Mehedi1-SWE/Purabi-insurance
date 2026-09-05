import { useState } from "react";

export default function PriceCalculator() {
    const [selectedCategory, setSelectedCategory] = useState("Health");

    return (
        <section className="bg-[#F7ECEA] px-20 py-[100px]">
            <div className="container mx-auto">

                {/* Categories */}
                <div className="mx-auto flex w-[948px] gap-10">

                    {/* Health */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("Health")}
                        className={`h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Health"
                            ? "scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src="/Health.png"
                            alt="Health"
                            className="h-[132px] w-[100px] object-contain"
                        />
                    </button>

                    {/* Car */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("Car")}
                        className={`h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Car"
                            ? "scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src="/Car.png"
                            alt="Car"
                            className="h-[132px] w-[100px] object-contain"
                        />
                    </button>

                    {/* Travel */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("Travel")}
                        className={`h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Travel"
                            ? "scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src="/Travel.png"
                            alt="Travel"
                            className="h-[132px] w-[100px] object-contain"
                        />
                    </button>

                    {/* Life */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("Life")}
                        className={`h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Life"
                            ? "scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src="/Life.png"
                            alt="Life"
                            className="h-[132px] w-[100px] object-contain"
                        />
                    </button>

                    {/* Marine */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("Marine")}
                        className={`h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Marine"
                            ? "scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src="/Marine.png"
                            alt="Marine"
                            className="h-[132px] w-[100px] object-contain"
                        />
                    </button>

                    {/* Engineering */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("Engineering")}
                        className={`h-[132px] w-[108px] shrink-0 transition ${selectedCategory === "Engineering"
                            ? "scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src="/Engineering.png"
                            alt="Engineering"
                            className="h-[132px] w-[108px] object-contain"
                        />
                    </button>

                    {/* More */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("More")}
                        className={`h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "More"
                            ? "scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src="/More.png"
                            alt="More"
                            className="h-[132px] w-[100px] object-contain"
                        />
                    </button>
                </div>

                {/* Form */}
                <div className="mx-auto mt-[40px] flex h-[105.71px] w-[1154.01px] items-start gap-[31.42px]">

                    {/* Name */}
                    <div className="flex h-[105.71px] w-[424.18px] shrink-0 flex-col gap-[15.71px]">
                        <label
                            htmlFor="name"
                            className="h-[33px] w-[424.18px] font-[Poppins] text-[21.95px] font-bold capitalize leading-[100%] text-black"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter Your Full Name"
                            className="h-[57px] w-[424.18px] rounded-[5px] border border-[#0000001A] bg-white px-[24px] font-[Poppins] text-[18px] font-normal italic leading-[100%] tracking-[0%] text-black outline-none placeholder:w-[191px] placeholder:text-[18px] placeholder:font-normal placeholder:italic placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:capitalize placeholder:text-[#44444480] focus:border-[#AC3E25]"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex h-[105.71px] w-[424.18px] shrink-0 flex-col gap-[15.71px]">
                        <label
                            htmlFor="mobile"
                            className="h-[33px] w-[424.18px] font-[Poppins] text-[21.95px] font-bold capitalize leading-[100%] text-black"
                        >
                            Mobile Number
                        </label>

                        <input
                            id="mobile"
                            type="tel"
                            name="mobile"
                            placeholder="Enter Your Valid Phone Number"
                            className="h-[57px] w-[424.18px] rounded-[5px] border border-[#0000001A] bg-white px-[24px] font-[Poppins] text-[18px] font-normal italic leading-[100%] tracking-[0%] text-black outline-none placeholder:w-[287px] placeholder:text-[18px] placeholder:font-normal placeholder:italic placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:capitalize placeholder:text-[#44444480] focus:border-[#AC3E25]"
                        />
                    </div>

                    {/* Get Price */}
                    <div className="flex h-[105.71px] w-[242.8px] shrink-0 items-start pt-[48.71px]">
                        <button
                            type="button"
                            className="flex h-[57px] w-[242.8px] shrink-0 items-center justify-between gap-[15px] rounded-[5px] border border-[#AC3E2533] bg-[#AC3E25] px-[30px] py-[15px] font-[Poppins] text-white transition-colors duration-200 hover:bg-[#922F1C]"
                        >
                            <span className="h-[27px] w-[142.8px] text-left font-[Poppins] text-[18px] font-normal leading-[100%]">
                                Get Price
                            </span>

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
                                <svg
                                    className="h-[20px] w-[20px]"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5.5 19.5L19.5 5.5M19.5 5.5H10.5M19.5 5.5V14.5"
                                        stroke="white"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
