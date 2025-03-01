import { PiVirus } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-700 bg-blue-900 text-white shadow-lg">
      <div className="container flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex gap-3 items-center">
          <PiVirus className="text-4xl text-red-500 hover:text-red-400 transition duration-300" />
          <span className="font-extrabold text-2xl text-white tracking-wide">
            Covid-19
          </span>
        </Link>

        <nav className="flex gap-6 items-center">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-red-500 transition duration-300"
          >
            Anasayfa
          </Link>
          <Link
            to="#"
            className="text-lg font-semibold hover:text-red-500 transition duration-300"
          >
            Sonuçlarımız
          </Link>
          <Link
            to="#"
            className="text-lg font-semibold hover:text-red-500 transition duration-300 max-md:hidden"
          >
            Hakkımızda
          </Link>
          <Link
            to="#"
            className="text-lg font-semibold hover:text-red-500 transition duration-300 max-md:hidden"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
