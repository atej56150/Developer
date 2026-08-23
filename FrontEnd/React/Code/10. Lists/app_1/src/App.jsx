import MapArray1 from "./map_array_1";
import MapArray2, { MapArray3 } from "./map_array_2";
import MapArray4, { MapArray5 } from "./map_array_3";
import MapArrayKey1 from "./map_array_key_1";
import MapArrayKey2, { MapArrayKey3 } from "./map_array_key_2";
import MapArrayKey4 from "./map_array_key_3";
import MapArrayKey5 from "./map_array_key_4";
import MapArrayObjects from "./map_array_of_objects_key";
import Collections from "./collections";
import EmployeeList from "./EmployeeList";
import ProductList1 from "./ProductList_1";
import ProductList2 from "./ProductList_2";
import ProductList3 from "./ProductList_3";

function App() {
  return (
    <>
      <MapArray1 />
      <MapArray2 />
      <MapArray3 />
      <MapArray4 />
      <MapArray5 />
      <MapArrayKey1 />
      <MapArrayKey2 />
      <MapArrayKey3 />
      <MapArrayKey4 />
      <MapArrayKey5 />
      <MapArrayObjects />

      <Collections></Collections>
      <EmployeeList></EmployeeList>

      <ProductList1> </ProductList1>
      <ProductList2> </ProductList2>
      <ProductList3> </ProductList3>
    </>
  );
}
export default App;
