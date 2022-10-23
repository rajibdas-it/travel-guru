import "./App.css";
import bg from "./assets/bg.png";
import Header from "./Components/Header";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
      className="bg-no-repeat bg-cover bg-center h-[100vh] text-white bg-opacity-100"
    >
      <Header />
    </div>
  );
}

export default App;
