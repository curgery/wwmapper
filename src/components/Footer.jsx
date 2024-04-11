import styles from './footer.module.css';

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <br></br>
        <p className={styles.copyright}></p>
        &copy; Copyright {new Date().getFullYear()} by RLG LLC & Associates.
      </footer>
    </div>
  );
}

export default Footer;
