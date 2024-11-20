import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <footer className="bg-blue-500 text-white py-10 px-6 h-[40vh]">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stay Connected Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Stay Connected</h3>
                    <p className="text-sm">
                        Join our community for updates and exclusive offers.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="flex-1 border border-blue-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            className="bg-blue-700 text-white px-6 py-2 rounded-r-md hover:bg-blue-900 transition disabled:cursor-not-allowed"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-blue-800"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-blue-800"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-blue-800"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="hover:text-blue-800"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">About Us</h3>
                    <p className="text-sm">
                        At Ahmad Searcy Projects, we are committed to providing top-notch solutions and fostering innovation. 
                        Learn more about our mission, vision, and team.
                    </p>
                    <Link
                        to="/About"
                        className="text-blue-300 hover:text-blue-200 underline"
                    >
                        Read More About Us
                    </Link>
                </div>

                {/* Navigation Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Navigate</h3>
                    <nav className="flex flex-col space-y-2">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <Link to="/About" className="hover:underline">
                            About Us
                        </Link>
                        <Link to="/Products" className="hover:underline">
                            Products
                        </Link>
                        <Link to="/Profile" className="hover:underline">
                            Profile
                        </Link>
                        <Link to="/Cart" className="hover:underline">
                            Cart
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-blue-300 mt-8 pt-6 flex flex-col md:flex-row justify-center gap-5 items-center text-sm mx-auto">
                <p>Privacy Policy</p>
                <p>Sitemap</p>
                <p>&copy; {`${date.getFullYear()} Ahmad Searcy Projects`}</p>
            </div>
        </footer>
    );
};

export default Footer;
