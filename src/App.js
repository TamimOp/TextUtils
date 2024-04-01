import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        <TextForms heading="Enter The Text to Convert" />
      </div>
      <div>
        <About />
      </div>
    </>
  );
}

export default App;
