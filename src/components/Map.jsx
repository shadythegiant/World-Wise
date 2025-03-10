import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {

  // use navigate hook 

  const navigate = useNavigate(); 

  // 
  


  //  storing state in URL and exploring hook in react query 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const lat = searchParams.get('lat'); 
  const lng = searchParams.get('lng'); 
  return <div className={styles.mapContainer} onClick={() => navigate('form')}>
    <h1>Map {lat} {lng}</h1>
  </div>;
}
