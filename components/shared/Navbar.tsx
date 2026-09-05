import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="h-[83px] w-full bg-white">
      <div className="flex h-full items-center justify-between px-[80px] py-[14px]">

        {/* Logo */}
        <Link to="/">
          <div className="h-[46.22px] w-[184.35px] bg-[#AB3D25]">
            <img
              src="/logo.png"
              alt="Purabi General Insurance Co. Ltd."
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5">
          <Link to="/" className="text-[13px]">
            Home
          </Link>

          <Link to="/about" className="text-[13px]">
            About Us
          </Link>

          <Link to="/services" className="text-[13px]">
            Services
          </Link>

          <Link to="/claims" className="text-[13px]">
            Claims
          </Link>

          <Link to="/blogs" className="text-[13px]">
            Blogs
          </Link>

          <Link to="/contact" className="text-[13px]">
            Contact Us
          </Link>

          <Link
            to="/quote"
            className="bg-[#AC3E25] px-6 py-3 text-[13px] font-medium text-white"
          >
            Get A Quote
          </Link>
        </div>

      </div>
    </nav>
  );
}