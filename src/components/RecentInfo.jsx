
export default function RecentInfo(){
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    const recentItems = items.length <= 3 ? items : items.slice(0, 3);
    return(
        <>
          <div className="info-table">
            <div className="table-highlight">
                <h5>Itens Recentes</h5>
                <p>Ações</p>
            </div>
            {recentItems.map((item) => (
                <div key={item.id} className="table-content">
                    <p>{item.name}</p>
                    <div className="options-container">
                        <button>Visualizar</button>
                    </div>
                </div>
            ))}
          </div>
        </>
    )
}