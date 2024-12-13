import NavItems from "./NavItems";
import logo from "../assets/logo.png";

const MENU = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Transfer",
    link: "/transfer",
  },
  {
    title: "Topup",
    link: "/topup",
  },
];

function Navbar() {
  return (
    <nav className="flex mx-auto w-full justify-between items-center px-8 py-6 bg-white dark:bg-[#2d2d30]">
      <img src={logo} alt="walled logo" />
      <NavItems menu={MENU} />
    </nav>
  );
}

export default Navbar;
