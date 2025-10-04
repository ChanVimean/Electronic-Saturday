import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { FaSquarePhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="absolute bottom-0 flex justify-evenly p-4 bg-blue-200 w-full">
      <div className="flex flex-col items-center space-y-2 font-medium">
        <AiFillHome size={32} />
        <Link to="/">Home</Link>
      </div>
      <div className="flex flex-col items-center space-y-2 font-medium">
        <AiFillProduct size={32} />
        <Link to="/product">Produc</Link>
      </div>
      <div className="flex flex-col items-center space-y-2 font-medium">
        <FaSquarePhone size={32} />
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default BottomBar;
