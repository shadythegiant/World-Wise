import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import City from "./components/City"; 
import Form from "./components/Form"

//
document.title = " 🌍 Worldwise";
const BASE_URL = "http://localhost:9000/";

//
 const citiesobj = {
  cities: [
    {
      cityName: "Lisbon",
      country: "Portugal",
      emoji: "🇵🇹",
      date: "2027-10-31T15:59:59.138Z",
      notes: "My favorite city so far!",
      position: {
        lat: 38.727881642324164,
        lng: -9.140900099907554
      },
      id: 73930385
    },
    {
      cityName: "Madrid",
      country: "Spain",
      emoji: "🇪🇸",
      date: "2027-07-15T08:22:53.976Z",
      notes: "",
      position: {
        lat: 40.46635901755316,
        lng: -3.7133789062500004
      },
      id: 17806751
    },
    {
      cityName: "Berlin",
      country: "Germany",
      emoji: "🇩🇪",
      date: "2027-02-12T09:24:11.863Z",
      notes: "Amazing 😃",
      position: {
        lat: 52.53586782505711,
        lng: 13.376933665713324
      },
      id: 98443197
    }
  ]
}

//
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect

  useEffect(() => {
    async function fetchCities() {
      try {
        if(citiesobj) {
          setCities(citiesobj.cities)
        } else {
          setIsLoading(true);
          const data = await fetch(`${BASE_URL}cities`);
          const res = await data.json();
          setCities(res);
        }
       
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
          {/* ------------------------------------------------------  Nested Routes --------------------------------------------------------------------------- */}
            {"// nested routes "}
            <Route
              index
              element={<Navigate replace to={cities} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
           
            <Route path="cities/:id" element={<City/>} />
            <Route
              path="countries"
              element={<CountriesList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="form" element={<Form/>} />
          </Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
