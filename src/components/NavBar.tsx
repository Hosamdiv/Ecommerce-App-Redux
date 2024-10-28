import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

const NavBar = () => {
  const { cartItem } = useSelector(({ cart }: RootState) => cart);
  console.log(cartItem.length);

  return (
    <nav className="bg-indigo-600 max-w-4xl mx-auto mt-7 mb-20 px-3 py-5 rounded-md">
      <ul className="flex items-center justify-between">
        <li className="text-white duration-200 font-semibold text-lg">
          <a>Home</a>
        </li>
        <div className="flex items-center text-white space-x-4">
          <li className="duration-200 text-lg">
            <a>todos</a>
          </li>
          <li className="duration-200 text-lg">
            <a>Profile</a>
          </li>
        </div>
        <p className="flex items-center space-x-3">
          <li className="text-white duration-200 font-semibold text-lg">
            <a>Register</a>
          </li>
          <li className="text-white duration-200 font-semibold text-lg">
            <a>Login</a>
          </li>
        </p>
        <div className="text-5xl">({cartItem.length})</div>
      </ul>
    </nav>
  );
};

export default NavBar;
