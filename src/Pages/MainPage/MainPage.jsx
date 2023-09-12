import "./MainPage.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    return (
        <>
            <main>
                <section className="manage-section-container-top">
                    <div className="manage-topic-tab" onClick={() => navigate("/Workers")}>
                        <h2>Workers</h2>
                    </div>
                    <div className="manage-topic-tab" onClick={() => navigate("/Customers")}>
                        <h2>Customers</h2>
                    </div>
                    <div className="manage-topic-tab" onClick={() => navigate("/Inventory")}>
                        <h2>Inventory</h2>
                    </div>
                    <div className="manage-topic-tab" onClick={() => navigate("/Products")}>
                        <h2>Products</h2>
                    </div>
                </section>
                <section className="manage-section-container-middle">
                    <div className="manage-topic-tab">
                        <h2>Sales Today</h2>
                    </div>
                    <div className="manage-topic-tab">
                        <h2>Products for resupply</h2>
                    </div>
                    <div className="manage-topic-tab">
                        <h2>Incomes & outcomes</h2>
                    </div>
                </section>
                <section className="manage-section-container-bottom">
                    <div className="manage-topic-tab">
                        <h2>Notifications</h2>
                    </div>
                    <div className="manage-topic-tab">
                        <h2>Orders</h2>
                    </div>
                    <div className="manage-topic-tab">
                        <h2>Misc</h2>
                    </div>
                </section>
            </main>
        </>
    );
}

export default MainPage;
