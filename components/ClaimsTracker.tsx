import { Link } from "react-router";

export default function ClaimsTracker() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto flex h-[499.79px] w-full min-w-[1280px] max-w-[1920px] items-center px-[80px] py-[50px]">

                {/* Left Image */}
                <div className="relative h-[399.79px] w-[500px] shrink-0">

                    {/* Background Shape */}
                    <img
                        src="/Group 5.png"
                        alt=""
                        className="absolute left-[139.72px] top-[50px] h-[399.3px] w-[278.69px] object-contain opacity-30"
                    />

                    {/* Family */}
                    <img
                        src="/ClaimsTracker.png"
                        alt="Family insurance"
                        className="absolute left-0 top-[60px] h-[339.61px] w-[500px] object-contain"
                    />
                </div>

                {/* Right Card */}
                <div className="flex h-[314px] w-[780px] shrink-0 flex-col rounded-[20px] border border-[#00000033] bg-[#AC3E251A] px-[40px] py-[50px]">

                    {/* Small Heading */}
                    <p className="font-[Poppins] text-[14px] font-semibold uppercase leading-[100%] text-[#444444]">
                        BE HAPPY TO GET INSURANCE
                    </p>

                    {/* Main Heading */}
                    <h2 className="mt-[25px] font-[Poppins] text-[40px] font-bold leading-[100%] text-[#444444]">
                        Start Tracking Your Claims
                    </h2>

                    {/* Description */}
                    <p className="mt-[15px] w-[700px] font-[Poppins] text-[16px] font-normal leading-[150%] text-[#555555]">
                        Enjoy peace of mind with hassle-free insurance. Track your
                        claims effortlessly and stay informed every step of the way.
                    </p>

                    {/* Bottom Action */}
                    <div className="mt-[25px] flex h-[50px] items-center">

                        {/* Claim Coverage */}
                        <Link
                            to="/claims"
                            className="flex h-[50px] w-[213px] shrink-0 items-center justify-between rounded-[5px] bg-[#AC3E25] px-[20px] font-[Poppins] text-[16px] font-medium leading-[100%] text-white transition hover:bg-[#922F1C]"
                        >
                            <span>Claim Coverage</span>

                            <span className="text-[22px] leading-none">
                                ↗
                            </span>
                        </Link>

                        {/* OR */}
                        <div className="ml-[18px] flex items-center gap-[14px]">
                            <span className="h-px w-[34px] bg-[#AC3E25]" />

                            <span className="font-[Poppins] text-[12px] font-semibold leading-[100%] text-black">
                                OR
                            </span>

                            <span className="h-px w-[34px] bg-[#AC3E25]" />
                        </div>

                        {/* Email */}
                        <p className="ml-[18px] whitespace-nowrap font-[Poppins] text-[10px] font-normal leading-[100%] text-[#999999]">
                            Mail Us Anytime:
                            <a
                                href="mailto:purabiinsurance@gmail.com"
                                className="ml-[4px] font-semibold text-[#444444]"
                            >
                                purabiinsurance@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}