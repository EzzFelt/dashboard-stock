import { useItemsCollection } from "../hooks/useItemsCollection";



export default function ViewProduct(){

       const { item } = useItemsCollection();
    return(
       <>
         <div>
             <div>
                <h3>{item.name}</h3>
                <button>Atualizar</button>
                <button>Excluir</button>
             </div>
             
             <div>
                <span>Categoria: {item.category}</span>
                <span>Quantidade em estoque: {item.quantity}</span>
                <span>Preço: {item.price}</span>
             </div>

             <div>
                {item.description}
             </div>

             <div>
                <p>Cadastrado em: {item.date}</p>
                <p>Atualizado em: {item.date}</p>
             </div>
         </div>
       </>
    )
}