import { PRODUCTS } from "./data";
import FilterableProductTable from "./FilterableProductTable";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
