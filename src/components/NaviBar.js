import { Link } from "react-router-dom";
import styles from "./NaviBar.module.css";

function NaviBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">🎬 Movie App</Link>
      </div>
    </nav>
  );
}
export default NaviBar;