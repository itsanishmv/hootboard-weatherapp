import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const Header = lazy(() => import("./components/Header/Header"));
const ErrorPage = lazy(() => import("./components/404/ErrorPage"));
const Form = lazy(() => import("./features/Form/components/Form/Form"));
const WeatherInfo = lazy(() =>
  import("./features/WeatherInfo/components/WeatherInfo/WeatherInfo")
);
function App() {
  return (
    <div className="App">
      <div className="app__children">
        <Suspense fallback="loading...">
          <Header />
          <Routes>
            <Route element={<ErrorPage />} path="*" />
            <Route element={<Form />} path="/" />
            <Route element={<WeatherInfo />} path="/weather/:id" />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
