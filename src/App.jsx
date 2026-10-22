
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Catalog } from "./components/Catalog/Catalog";
import { Header } from "./components/header/header";

export function App() {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <Catalog />
      <Footer />
    </div>
  );
}
