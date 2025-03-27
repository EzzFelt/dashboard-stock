
export default function ViewProduct(name, category, price, quantity, description, date){
    return(
       <>
         <div>
             <div>
                <h3>{name}</h3>
                <button>Atualizar</button>
                <button>Excluir</button>
             </div>
             
             <div>
                <span>Categoria: {category}</span>
                <span>Quantidade em estoque: {quantity}</span>
                <span>Preço: {price}</span>
             </div>

             <div>
                {description}
             </div>

             <div>
                <p>Cadastrado em: {date}</p>
                <p>Atualizado em: {date}</p>
             </div>
         </div>
       </>
    )
}