import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function CountriesList({ cities, isLoading }) {
  console.log(cities);
  //
  if (isLoading) return <Spinner />;

  //

  if (!cities.length)
    return <Message message="add your first city by clicking on the map" />;

  //
  const countries = cities.reduce((initialArray, cityObject) => {
    if (!initialArray.map((el) => el.city).includes(cityObject.country))
      return [
        ...initialArray,
        { country: cityObject.country, emoji: cityObject.emoji },
      ];
    else return initialArray;
  }, []);

  //
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
