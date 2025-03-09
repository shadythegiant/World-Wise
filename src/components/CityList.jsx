import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

export default function CityList({ cities, isLoading }) {
  console.log(cities);
  //
  if (isLoading) return <Spinner />;

  //

  if (!cities.length)
    return <Message message="add your first city by clicking on the map" />;

  //
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
