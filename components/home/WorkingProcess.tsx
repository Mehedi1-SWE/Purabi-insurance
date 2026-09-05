export default function WorkingProcess() {
    return (
        <section
            className="relative h-[937.1898px] w-full min-w-[1280px] max-w-[1920px] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: 'url("/Background2.png")',
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#00000033]" />

            {/* Main Glass Panel */}
            <div className="relative z-10 flex h-full w-full items-center justify-center p-[80px]">
                <div
                    className="
                        flex
                        h-[777.1898px]
                        w-[1280px]
                        flex-col
                        gap-[50px]
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-[#FFFFFF80]
                        bg-[linear-gradient(0deg,rgba(172,62,37,0.1)_0%,rgba(255,255,255,0)_100%)]
                        p-[80px]
                        backdrop-blur-[40px]
                    "
                >
                    {/* Heading + Description */}
                    <div className="flex h-[162px] w-[1120px] shrink-0 flex-col items-center gap-[10px]">
                        {/* Label */}
                        <div className="flex h-[16px] w-[271px] shrink-0 items-center justify-center gap-[4px]">
                            <span className="h-px w-[29px] shrink-0 bg-white" />

                            <p className="h-[16px] whitespace-nowrap font-[Poppins] text-[11px] font-medium uppercase leading-[16px] text-white">
                                Insurance Simplified
                            </p>

                            <span className="h-px w-[29px] shrink-0 bg-white" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="flex h-[68px] w-[548px] shrink-0 items-center justify-center whitespace-nowrap text-center font-[Poppins] text-[45px] font-bold uppercase leading-[100%] tracking-[0%] text-white">
                            OUR WORKING PROCESS
                        </h2>

                        {/* Description */}
                        <p className="h-[48px] w-[825px] shrink-0 text-center align-middle font-[Poppins] text-[14px] font-normal not-italic leading-[24px] tracking-[0%] text-white">
                            Our process makes insurance simple and stress-free, from personalized consultations and tailored solutions to swift
                            activation and ongoing support. We ensure reliable protection and hassle-free claims every step of the way.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="flex h-[405.1898px] w-[1130px] shrink-0 items-start justify-center gap-[25px]">

                        {/* Step 01 */}
                        <div className="flex h-[405.1898px] w-[360px] shrink-0 flex-col items-center">
                            <div className="flex h-[289.8px] w-[208.8px] shrink-0 flex-col items-center gap-[7px]">
                                {/* Circle */}
                                <div className="flex h-[208.8px] w-[208.8px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white">
                                    <img
                                        src="/process-1.jpg.png"
                                        alt="Get A Quotation"
                                        className="h-[166.8px] w-[166.8px] shrink-0 rounded-full object-cover"
                                    />
                                </div>

                                {/* Triangle */}
                                <span className="h-[15px] w-[20px] shrink-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />

                                {/* Number */}
                                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[100px] bg-[#AC3E25] shadow-[inset_-1px_1px_4px_0px_#00000026]">
                                    <span className="font-[Poppins] text-[13px] font-medium leading-[100%] text-white">
                                        01
                                    </span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="mt-[16px] flex h-[90.39px] w-[360px] shrink-0 flex-col items-center gap-[16px]">
                                <h3 className="h-[27px] w-[277px] shrink-0 whitespace-nowrap text-center font-[Poppins] text-[22px] font-semibold leading-[26.4px] tracking-[0%] text-white">
                                    Get A Quotation
                                </h3>

                                <p className="h-[48px] w-[276px] shrink-0 text-center font-[Poppins] text-[16px] font-normal leading-[24px] tracking-[0%] text-white">
                                    Answer a couple of questions, we'll<br />
                                    provide accurate live quotes.
                                </p>
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div className="flex h-[405.1898px] w-[360px] shrink-0 flex-col items-center">
                            <div className="flex h-[289.8px] w-[208.8px] shrink-0 flex-col items-center gap-[7px]">
                                {/* Circle */}
                                <div className="flex h-[208.8px] w-[208.8px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white">
                                    <img
                                        src="/process-2.jpg.png"
                                        alt="Complete The Application"
                                        className="h-[166.8px] w-[166.8px] shrink-0 rounded-full object-cover"
                                    />
                                </div>

                                {/* Triangle */}
                                <span className="h-[15px] w-[20px] shrink-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />

                                {/* Number */}
                                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[100px] bg-[#AC3E25] shadow-[inset_-1px_1px_4px_0px_#00000026]">
                                    <span className="font-[Poppins] text-[13px] font-medium leading-[100%] text-white">
                                        02
                                    </span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="mt-[16px] flex h-[90.39px] w-[360px] shrink-0 flex-col items-center gap-[16px]">
                                <h3 className="h-[27px] w-[277px] shrink-0 whitespace-nowrap text-center font-[Poppins] text-[22px] font-semibold leading-[26.4px] tracking-[0%] text-white">
                                    Complete The Application
                                </h3>

                                <p className="h-[48px] w-[276px] shrink-0 text-center align-middle font-[Poppins] text-[16px] font-normal not-italic leading-[24px] tracking-[0%] text-white">
                                    Answer a couple of questions, we'll<br />
                                    provide accurate live quotes.
                                </p>
                            </div>
                        </div>

                        {/* Step 03 */}
                        <div className="flex h-[405.1898px] w-[360px] shrink-0 flex-col items-center">
                            <div className="flex h-[289.8px] w-[208.8px] shrink-0 flex-col items-center gap-[7px]">
                                {/* Circle */}
                                <div className="flex h-[208.8px] w-[208.8px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white">
                                    <img
                                        src="/process-3.jpg.png"
                                        alt="Get your Insurance"
                                        className="h-[166.8px] w-[166.8px] shrink-0 rounded-full object-cover"
                                    />
                                </div>

                                {/* Triangle */}
                                <span className="h-[15px] w-[20px] shrink-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />

                                {/* Number */}
                                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[100px] bg-[#AC3E25] shadow-[inset_-1px_1px_4px_0px_#00000026]">
                                    <span className="font-[Poppins] text-[13px] font-medium leading-[100%] text-white">
                                        03
                                    </span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="mt-[16px] flex h-[90.39px] w-[360px] shrink-0 flex-col items-center gap-[16px]">
                                <h3 className="h-[27px] w-[277px] shrink-0 whitespace-nowrap text-center font-[Poppins] text-[22px] font-semibold leading-[26.4px] tracking-[0%] text-white">
                                    Get your Insurance
                                </h3>

                                <p className="h-[48px] w-[276px] shrink-0 text-center font-[Poppins] text-[16px] font-normal leading-[24px] tracking-[0%] text-white">
                                    Answer a couple of questions, we'll<br />
                                    provide accurate live quotes.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
