import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Form />} path="/" />
        <Route element={<WeatherInfo />} path="/weather" />
      </Routes>
    </div>
  );
}

export default App;
