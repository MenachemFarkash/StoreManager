import CategoryItem from "../../Components/ProductsManager/Categoryitem/CategoryItem";
import "./ProductManager.css";

function ProductMananger() {
    return (
        <>
            <h1 className="page-header">Manage Products</h1>
            <main className="products-manager-main">
                <section className="products-list-container">
                    <div className="products-list">
                        <div className="add-product-button">
                            <p>➕</p>
                        </div>
                    </div>
                </section>
                <section className="products-categories-container">
                    <div className="products-categories-list">
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                    </div>
                    <div className="products-categories-settings">
                        <h1>Settings ⚙️</h1>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProductMananger;
