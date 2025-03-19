import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Download Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">For better experience, download the Food-Catering app now</h3>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-3 block w-full md:w-auto">
            Download Android App
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2 block w-full md:w-auto">
            Download iOS App
          </button>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-2 mt-2">
            <li>About Us</li>
            <li>Food-Catering Corporate</li>
            <li>Careers</li>
            <li>Team</li>
           
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact us</h3>
          <ul className="space-y-2 mt-2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
          <h3 className="text-lg font-semibold text-white mt-4">Legal</h3>
          <ul className="space-y-2 mt-2">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Explore & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Explore with Food-Catering</h3>
          <ul className="space-y-2 mt-2">
            <li>Food-Catering News</li>
            <li>Snackables</li>
          </ul>
          <h3 className="text-lg font-semibold text-white mt-4">Available in:</h3>
          <p className="mt-2">Hyderabad, Bangalore, Gurgaon, Delhi, Mumbai, Pune</p>
          <p className="text-sm text-gray-400 mt-1">20 cities</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <FaLinkedin className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaFacebook className="hover:text-orange-500 cursor-pointer" />
            <FaPinterest className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 Food-Catering Limited
      </div>
    </footer>
  );
};

export default Footer;
