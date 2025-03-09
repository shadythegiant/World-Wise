import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";

//
document.title = " 🌍 Worldwise";
const BASE_URL = "http://localhost:9000/";

//
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const data = await fetch(`${BASE_URL}cities`);
        const res = await data.json();
        setCities(res);
      } catch {
        alert("couldn't fetch cities");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  //-------------------------------------JSX------------------------------------
  return (
    <div>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route index path="/" element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="app" element={<AppLayout />}>
            {"// nested routes "}
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="countries"
              element={<CountriesList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="form" element={<p>form </p>} />
          </Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
