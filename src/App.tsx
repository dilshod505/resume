import "./App.css";
import Main from "./components/main.tsx";
import Footer from "./components/footer.tsx";
import Technology from "./components/technology.tsx"; // Assuming this is where Technology is located
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
      document.documentElement.classList.toggle(
        "dark",
        JSON.parse(storedDarkMode)
      );
    }
  }, []);

  const toggleMode = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Main isDarkMode={isDarkMode} />
      <Technology isDarkMode={isDarkMode} />{""}
      {/* Pass dark mode prop to Technology */}
      <Footer toggleMode={toggleMode} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
