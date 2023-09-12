import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomersManager from "./Pages/CustomersManager/CustomerManager";
import WorkersManager from "./Pages/WorkersManager/WorkersMananger";
import InventoryManager from "./Pages/InventoryManager/InventoryManger";
import ProductMananger from "./Pages/ProductsManager/ProductManager";
import Navbar from "./Pages/Navbar/Navbar";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/Customers" element={<CustomersManager />}></Route>
                    <Route path="/Workers" element={<WorkersManager />}></Route>
                    <Route path="/Inventory" element={<InventoryManager />}></Route>
                    <Route path="/Products" element={<ProductMananger />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
