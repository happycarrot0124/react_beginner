import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        © 2025 MovieApp. All rights reserved. Data From{" "}
        <a href="https://yts.mx/" target="_blank" rel="noopener noreferrer">
          YTS API
        </a>
      </span>
    </footer>
  );
}
export default Footer;
