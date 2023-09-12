import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/Customers")}>Customers</button>
            <button onClick={() => navigate("/Inventory")}>Inventory</button>
            <button onClick={() => navigate("/Workers")}>Workers</button>
            <button onClick={() => navigate("/Products")}>Products</button>
        </>
    );
}

export default Navbar;
