
import { useItemCollection } from "../hooks/useItemsCollection";
import { Link } from "react-router-dom";

export default function Items() {
  const { items, removeItem } = useItemCollection();


  return (
    <div className="stock-tables">
      <div className="items-table">
        <div className="table-highlight-items">
          <p>ID</p>
          <p>Nome</p>
          <p>Em Estoque</p>
          <p>Categoria</p>
          <p>Ações</p>
        </div>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="table-content-items">
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p>{item.category}</p>
              <div className="options-container">
                <Link to={`/items/${item.id}`}>
                  <button>Visualizar</button>
                </Link>
                <Link to={`/items/${item.id}/edit`}>
                  <button>Editar</button>
                </Link>
                <button
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <h4>Não há nenhum item catalogado...</h4>
        )}
          </div>
    </div>
  );
}
