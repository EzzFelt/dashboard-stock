
const items = JSON.parse(localStorage.getItem("items") || "[]");

export default async function loadItem({ params }) {
    const item = items.find(item => item.id === +params.itemId);

    if (!item) {
        throw new Response("Ops... Parece que este item não existe", { status: 404 });
    }

    return item;
}