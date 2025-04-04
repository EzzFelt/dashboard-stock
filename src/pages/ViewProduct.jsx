import { Link, useLoaderData} from 'react-router-dom';


export default function ViewProduct(){

   const item = useLoaderData()
    return(
       <>
         <div>
            <p>{item.name}</p>
            <button>Atualizar</button>
            <button>Excluir</button>
         </div>

         <span>Categoria: {item.category}</span>
         <span>Quantidade: {item.quantity}</span>
         <span>Preço: R${item.price}</span>

         <p>{item.description}</p>

         <p>Cadastrado em: {item.createdAt}</p>
         <p>Atualizado em: {item.editedAt}</p>
       </>
    )
}