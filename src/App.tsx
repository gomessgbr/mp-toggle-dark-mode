function App() {
  return (
    <div className="min-h-dvh w-screen grid place-content-center">
      <label className="cursor-pointer">
        <input type="checkbox" className="sr-only" />
        <div className="flex w-24 h-12 bg-zinc-700 rounded-full px-1 items-center after:rounded-full after:content-[''] after:flex after:h-10 after:w-10 after:relative after:bg-zinc-800 "></div>
      </label>
    </div>
  );
}

export default App;
