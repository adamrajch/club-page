import Banner from "../components/Banner/Banner";
import styles from "../styles/HomePage.module.css";
import Header from "../components/PageHeader/Header";
import Promotion from "../components/Promotion/Promotion";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <Promotion />
      {/* <video width="25%" height="25%" autoPlay loop muted>
        <source src="park.mp4" type="video/mp4" /> Your browser does not support
        the video tag.
      </video> */}
    </div>
  );
}
