import { useEffect, useState } from "react";
import { useItemCollection } from "../hooks/useItemsCollection";
import { Link } from "react-router-dom";


export default function Items() {
  const { items } = useItemCollection();
  

  return (
    <>
      <div className="items-table">
        <div className="table-highlight-items">
          <h5>ID</h5>
          <p>Nome</p>
          <p>Em Estoque</p>
          <p>Categoria</p>
          <p>Ações</p>
        </div>
        {items.map((item) => (
          <div key={item.id} className="table-content-items">
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.stock}</p>
            <p>{item.category}</p>
            <div className="actions">
              <Link to={`/items/${item.id}`}>
                <button>Editar</button>
              </Link>
                <button>Excluir</button>
            </div>
          </div>
        ))}


        <div className="table-content"></div>
      </div>
    </>
  );
}
