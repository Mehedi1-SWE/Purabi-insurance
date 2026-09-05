import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="box-border flex h-[83px] w-[1440px] items-center justify-between border-b border-[rgba(171,61,36,0.5)] bg-[rgba(255,255,255,1)] px-[80px] py-[14px]">

      {/* Left Logo Layout: 184.3504 × 46.2236 */}

      {/* Inner Logo: 180 × 33.1722 */}


      {/* Left Logo Layout */}
      <div className="flex h-[46.2236px] w-[184.3504px] shrink-0 items-center justify-center bg-[rgba(171,61,37,1)]">
        <img
          src="/logo.png"
          alt="Purabi General Insurance Co. Ltd."
          className="h-[33.1722px] w-[180px] shrink-0 object-contain"
        />
      </div>


      {/* Right Layout: 994 × 55 | Gap: 20px */}
      <div className="flex h-[55px] w-[994px] shrink-0 items-center justify-end gap-[20px]">

        {/* Home */}
        <Link
          to="/"
          className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black"
        >
          Home
        </Link>

        {/* About Us */}
        <Link
          to="/about"
          className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black"
        >
          About Us
        </Link>

        {/* Services */}
        <Link
          to="/services"
          className="flex h-[55px] shrink-0 items-center justify-center gap-[10px] whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black"
        >
          <span>Services</span>

          <span className="text-[22px] leading-none">
            ⌄
          </span>
        </Link>

        {/* Claims */}
        <Link
          to="/claims"
          className="flex h-[55px] shrink-0 items-center justify-center gap-[10px] whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black"
        >
          <span>Claims</span>

          <span className="text-[22px] leading-none">
            ⌄
          </span>
        </Link>

        {/* Blogs */}
        <Link
          to="/blogs"
          className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black"
        >
          Blogs
        </Link>

        {/* Contact Us */}
        <Link
          to="/contact"
          className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black"
        >
          Contact Us
        </Link>

        {/* Get A Quote */}
        <Link
          to="/quote"
          className="box-border flex h-[55px] w-[219px] shrink-0 items-center justify-center gap-[20px] rounded-[4px] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] font-['Poppins'] text-[18px] font-medium leading-[100%] tracking-[0%] text-white"
        >
          <span>Get A Quote</span>

          <span className="text-[22px] leading-none">
            ↗
          </span>
        </Link>

      </div>
    </nav >
  );
}