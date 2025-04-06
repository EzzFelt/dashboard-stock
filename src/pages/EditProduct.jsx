import { useItemCollection } from "../hooks/useItemsCollection"
import { useLoaderData } from "react-router-dom"
import { useState } from "react";

export default function EditProduct(){
    const  itemData  = useLoaderData();
    const { updateItem } = useItemCollection()
    const [ name, setName ] = useState(itemData.name)
    const [ quantity, setQuantity ] = useState(itemData.quantity)
    const [ price, setPrice ] = useState(itemData.price)
    const [ categories ] = useState(['Eletrônicos', 'Livros', 'Jogos', 'Outros'])
    const [ category, setCategory ] = useState(itemData.category)
    const [ description, setDescription ] = useState(itemData.description)

    function handleSubmit(ev){
        ev.preventDefault()
        const updatedData = {
            name,
            quantity,
            price,
            category,
            description
        }

        updateItem(itemData.id, updatedData)
        alert("Item atualizado com sucesso")
    }

    return(
        <>
          <div className="main-content">
            <form onSubmit={handleSubmit}>
                <div className="form-details">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input 
                         type="text" 
                         name="name" 
                         id="name"
                         value={name}
                         onChange={(e) => setName(e.target.value)} 
                         />
                    </div>
                    
                    <div>
                        <label htmlFor="quantity">Quantidade</label>
                        <input 
                         type="number" 
                         name="quantity" 
                         id="quantity"
                         value={quantity}
                         onChange={(e) => setQuantity(e.target.value)} 
                         />
                    </div>
                    
                    <div>
                        <label htmlFor="price">Preço</label>
                        <input 
                         type="number" 
                         name="price" 
                         id="price"
                         value={price}
                         onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="category">Categoria</label>
                        <select 
                         name="category_item" 
                         id="category_item"
                         value={category}
                         onChange={(e) => setCategory(e.target.value)}
                        >
                         {categories.map((categoryItem, index) => (
                             <option key={index} value={categoryItem}>{categoryItem}</option>
                         ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea 
                     name="description" 
                     id="description"
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                    > 
                    </textarea>
                </div>

                <button id="save" type="submit">Salvar</button>
            </form>
        </div>
        </>
    )
}