import styles from "./styles/home.module.css";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import Form from "./Form";
import MobileButton from "./MobileButton";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <MobileHeader /> */}
      <Navbar />
      <Form />
      <MobileButton />
    </div>
  );
};

export default Home;
