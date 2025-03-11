import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";

import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

//
document.title = " 🌍 Worldwise";

//
export default function App() {
  //-------------------------------------JSX------------------------------------
  return (
    <CitiesProvider>
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
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />

            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />}></Route>
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
