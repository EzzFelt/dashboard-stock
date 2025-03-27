import { Link, Outlet } from "react-router-dom";

export default function ItemsLayout() {
    return (
        <>
            <h2>Stock Items</h2>

            <div className="items-container">
                <div className="options-container">
                    <Link to="." relative="path"><p>Todos os itens</p></Link> 
                    <Link to="new" relative="path"><p>Novo item</p></Link>
                </div>

                <Outlet /> 
            </div>
        </>
    );
}
