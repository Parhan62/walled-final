import { NavLink } from "react-router";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import useTheme from "../context/ThemeContext";

function NavItems({ menu }) {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  console.log(themeMode);

  return (
    <ul className="flex gap-x-8">
      {menu.map((item) => {
        return (
          <NavLink
            key={item.title}
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "text-[#19918F] font-bold"
                : "text-black dark:text-white"
            }
          >
            {item.title}
          </NavLink>
        );
      })}
      <NavLink
        to="/"
        className="text-black dark:text-white"
        onClick={() => localStorage.removeItem("login")}
      >
        Sign Out
      </NavLink>
      <button onClick={() => handleTheme()}>
        {themeMode === "dark" ? (
          <IoSunnyOutline className="text-white" />
        ) : (
          <IoMoonOutline />
        )}
      </button>
    </ul>
  );
}

export default NavItems;
