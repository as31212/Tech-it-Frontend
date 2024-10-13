import { PiShoppingCartThin } from "react-icons/pi";

export const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <img
        className="h-12 w-auto"
        src="tech-it-cropped-logo.png"
        alt="Tech-IT Logo"
      />
      <ul className="flex space-x-6">
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">LOG IN</a></li>
      </ul>
      <PiShoppingCartThin className="text-blue-400 text-2xl" />
    </nav>
  );
};
