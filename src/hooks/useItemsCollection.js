import { useState } from "react";

export function useItemCollection(){
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : [];
    });

     function updateItem(id, updatedData) {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    ...updatedData,
                    editAt: new Date().toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    })
                };
            }
            return item;
        });

        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }

    function removeItem(id) {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }

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
            createdAt: date,
            editAt: date,
        };

        setItems(state => {
            const updatedItems = [...state, newItem];
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    return { items, addItem, removeItem, updateItem };
}