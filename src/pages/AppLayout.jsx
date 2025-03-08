import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
