import { useState } from "react";

export function useItemCollection(){
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    function addItem({name, quantity, price, category, description}){
        if (!name || !quantity || !price || !category) {
            alert('Por favor, preencha todos os campos obrigatórios');
            return;
        }

        const actualDate = new Date();
        const formatDate = new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        const date = formatDate.format(actualDate);
        const randomId = Math.floor(Math.random() * 1000);

        const newItem = {
            id: randomId,
            name,
            quantity: Number(quantity),
            price: Number(price),
            category,
            description,
            date
        };

        setItems(state => {
            const updatedItems = [...state, newItem];
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    return { items, addItem };
}