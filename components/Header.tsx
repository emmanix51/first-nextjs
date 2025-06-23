import Link from "next/link";
function Header() {
  return (
    <div className="p-2 flex justify-between bg-slate-900">
      <div>
        <Link className="text-lg  text-white" href=".">
          Emman Blog
        </Link>
      </div>
      <div className="space-x-2">
        <Link className="text-white" href="/about">
          About
        </Link>
        <Link className="text-white" href="/contact-us">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
