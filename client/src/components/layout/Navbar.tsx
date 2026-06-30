import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ResumeIQ AI
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/features"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Features
          </Link>

          <Link
            to="/pricing"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Pricing
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;