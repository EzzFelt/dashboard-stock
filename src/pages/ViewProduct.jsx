import { Link, useLoaderData} from 'react-router-dom';
import { useItemCollection } from '../hooks/useItemsCollection';




export default function ViewProduct(){

   const item = useLoaderData();
   const { removeItem } = useItemCollection();
    return(
       <>
         <div className="options-container-view">
            <p>{item.name}</p>
           <Link to={`/items/${item.id}/edit`}><button>Atualizar</button></Link>
            <Link to="/items">
            <button
             onClick={() => {
               removeItem(item.id);
             }}
            >Excluir</button></Link>
         </div>

         <div className="details-container">
         <span><p>Categoria: {item.category}</p></span>
         <span><p>Quantidade: {item.quantity}</p></span>
         <span><p>Preço: R${item.price}</p></span>
         </div>

         <p className='description'>{item.description}</p>

         <div className="date-details-container">
         <p>Cadastrado em: {item.createdAt}</p>
         <p>Atualizado em: {item.editAt}</p>
         </div>
       </>
    )
}