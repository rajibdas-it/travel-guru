import "./App.css";
import bg from "./assets/bg.png";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay",
      }}
      className="bg-no-repeat bg-cover bg-center h-[100vh] text-white"
    >
      <Header />
      <Home />
    </div>
  );
}

export default App;
