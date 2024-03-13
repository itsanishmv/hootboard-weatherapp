import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./features/Form/components/Form/Form";
import WeatherInfo from "./features/WeatherInfo/components/WeatherInfo/WeatherInfo";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <div className="app__children">
        <Header />
        <Routes>
          <Route element={<Form />} path="/" />
          <Route element={<WeatherInfo />} path="/weather" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
