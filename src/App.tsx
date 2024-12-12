import { useEffect } from "react";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      return;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="min-h-dvh w-screen grid place-content-center">
      <label className="cursor-pointer relative">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleDarkMode}
        />
        <div className="peer after:transition-all duration-500 after:left-0 peer-checked:after:left-12 absolute flex w-24 h-12 dark:bg-zinc-700 bg-zinc-300 rounded-full px-1 items-center after:rounded-full after:content-[''] after:flex after:h-10 after:w-10 after:relative dark:after:bg-zinc-800 after:bg-zinc-400 "></div>
      </label>
    </div>
  );
}

export default App;
