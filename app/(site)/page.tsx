import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer/Footer";
import { MainSelect } from "@/app/(site)/components/Select/MainSelect";
import { MainSwitch } from "@/app/(site)/components/Switch/MainSwitch";
import { RangeSlider } from "@/app/(site)/components/RangeSlider/RangeSlider";
import { Pagination } from "@/app/(site)/components/Pagination/Pagination";
import { Card } from "./components/Card/Card";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div className="container">
      <MainSelect/>
      <MainSwitch/>
      <RangeSlider/>
      <Pagination/>
      <Card/>
      </div>
      <Footer/>
    </main>
  );
}
