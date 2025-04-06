

export default function RunningOutInfo(){
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    const runningOutItems = items.filter(item => item.quantity <= 3);

    return(
        <>
          <div className="info-table">
            <div className="table-highlight">
                <h5>Itens acabando</h5>
                <p>Qtd</p>
                <p>Ações</p>
            </div>
            {runningOutItems.map((item) => (
                <div key={item.id} className="table-content">
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <div className="options-container">
                        <button>Visualizar</button>
                    </div>
                </div>
            ))}
          </div>
        </>
    )
}