import styles from "./page.module.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Products } from "../components/Products/Products";

export default function Catalog() {
  return (
    <main className={styles.main}>
      <Header/>
      <div className="container">
        <h1>catalog</h1>
        <Products/>
      </div>
      <Footer/>
    </main>
  );
}
