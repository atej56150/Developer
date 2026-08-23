import IfTrue from "./components/If(true)";
import IfFalse from "./components/If(false)";
import AND_1 from "./components/AND(&&)_1";
import AND_2 from "./components/AND(&&)_2";
import TernaryTrue1 from "./components/Ternary(true)_1";
import TernaryTrue2 from "./components/Ternary(true)_2";
import TernaryFalse1 from "./components/Ternary(false)_1";
import TernaryFalse2 from "./components/Ternary(false)_2";
import Product, { ProductList, UserStatus } from "./components/EarlyReturn"
import Dashboard from "./components/example";

import './App.css'

function App() {
  return (
    <>
      <IfTrue> </IfTrue>
      <IfFalse> </IfFalse>

      <AND_1 />
      <AND_2 />

      <TernaryTrue1 />
      <TernaryTrue2 />

      <TernaryFalse1 />
      <TernaryFalse2 />

      <Product></Product>
      <ProductList></ProductList>
      <UserStatus></UserStatus>

      <Dashboard />
    </>
  )
}

export default App
