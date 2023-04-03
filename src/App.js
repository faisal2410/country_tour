import './App.css';
import Product from './components/Product';


function App() {
  const products = [
    {id:1, name: 'laptopoo', price: 153000 },
    {id:2, name: 'phoneee', price: 93000 },
    {id:3, name: 'watchuu', price: 33000 },
    {id:4, name: 'tabletoo', price: 5000 },
  ]


  
  return (
    <div className="App">
      <h1>Hello world</h1>     
      {
        products.map(p => <Product key={p.id} product={p} test="bangladesh"></Product>)
   }
    </div>
  );
}

export default App;
