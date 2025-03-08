import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>list of cities </p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright {new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
