import { useState } from "react";
import { useItemCollection } from "../hooks/useItemsCollection";

export default function Newitemform() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [categories] = useState(['Eletrônicos', 'Livros', 'Jogos', 'Outros']);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const { addItem } = useItemCollection();
    

    function clearFields(){
        setName('');
        setQuantity('');
        setPrice('');
        setCategory('');
        setDescription('');
    }
  

    function handleSubmit(e){
        e.preventDefault();
        addItem({name, quantity, price, category, description});
        clearFields();
        alert('Item cadastrado com sucesso');
        
    }

    return(
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
    )
}