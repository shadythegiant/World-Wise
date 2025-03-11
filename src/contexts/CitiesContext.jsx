import { createContext, useState, useEffect, useContext } from "react";
const BASE_URL = "http://localhost:9000/";

export const citiesobj = {
  cities: [
    {
      cityName: "Lisbon",
      country: "Portugal",
      emoji: "🇵🇹",
      date: "2027-10-31T15:59:59.138Z",
      notes: "My favorite city so far!",
      position: {
        lat: 38.727881642324164,
        lng: -9.140900099907554,
      },
      id: 73930385,
    },
    {
      cityName: "Madrid",
      country: "Spain",
      emoji: "🇪🇸",
      date: "2027-07-15T08:22:53.976Z",
      notes: "",
      position: {
        lat: 40.46635901755316,
        lng: -3.7133789062500004,
      },
      id: 17806751,
    },
    {
      cityName: "Berlin",
      country: "Germany",
      emoji: "🇩🇪",
      date: "2027-02-12T09:24:11.863Z",
      notes: "Amazing 😃",
      position: {
        lat: 52.53586782505711,
        lng: 13.376933665713324,
      },
      id: 98443197,
    },
  ],
};

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect

  useEffect(() => {
    async function fetchCities() {
      try {
        if (citiesobj) {
          setCities(citiesobj.cities);
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

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citites context used in the wrong component");
  return context;
}

export { CitiesProvider, useCities };
