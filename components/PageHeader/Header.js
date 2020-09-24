import styles from "../../styles/HomePage.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div>Tendon Clan</div> <div> Arm Wrestling Club</div>
      <p className={styles.para}>
        Chicago, IL est. Summer 2020 peak Coronavirus
      </p>
    </div>
  );
};

export default Header;
