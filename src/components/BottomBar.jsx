import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { FaSquarePhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="absolute bottom-0 flex lg:hidden justify-evenly p-4 bg-blue-200 w-full">
      <Link to="/" className="flex flex-col items-center space-y-2 font-medium">
        <AiFillHome size={32} />
        Home
      </Link>
      <Link
        to="/product"
        className="flex flex-col items-center space-y-2 font-medium"
      >
        <AiFillProduct size={32} />
        Product
      </Link>
      <Link
        to="/contact"
        className="flex flex-col items-center space-y-2 font-medium"
      >
        <FaSquarePhone size={32} />
        Contact
      </Link>
    </div>
  );
};

export default BottomBar;
