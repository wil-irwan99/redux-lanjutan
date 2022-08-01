import './App.css';
import ClickCounter from './components/ClickCounter';
import HelloComponent from './components/HelloComponent';
import HoverCounter from './components/HoverCounter';
import ProductList from './features/product/ProductList';
import WithSearch from './shared/WithSearch';
import data from "./products.json"

function App() {
  const ProductListWithSearch = WithSearch(ProductList, data)
  return (
    <div>
      {/* <ClickCounter/>
      <HoverCounter/>
      <HelloComponent/> */}
      {/* <ProductList data={data.products}/> */}
      <ProductListWithSearch/>
    </div>
  );
}

export default App;
