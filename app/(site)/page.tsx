import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer/Footer";
import { MainSelect } from "@/components/Select/MainSelect";
import { MainSwitch } from "@/components/Switch/MainSwitch";
import { RangeSlider } from "@/components/RangeSlider/RangeSlider";
import { Pagination } from "@/components/Pagination/Pagination";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div className="container">
      <MainSelect/>
      <MainSwitch/>
      <RangeSlider/>
      <Pagination/>
      </div>
      <Footer/>
    </main>
  );
}
