import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { ThemeContextProvider } from "../context/ThemeContext";

function PrivateLayout() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    document.body.classList.remove("dark");
    setThemeMode("light");
  };

  const darkTheme = () => {
    document.body.classList.toggle("dark");
    setThemeMode("dark");
  };

  const credential = localStorage.getItem("login");

  const navigate = useNavigate();

  useEffect(() => {
    if (!credential) return navigate("/");
  }, []);

  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Navbar />
      <Outlet />
    </ThemeContextProvider>
  );
}

export default PrivateLayout;
