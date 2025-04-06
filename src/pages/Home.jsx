import InfoContainer from "../components/InfoContainer";
import RecentInfo from "../components/RecentInfo";
import RunningOutInfo from "../components/RunningOutInfo";

export default function Home(){
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    const itemsLength = items.length;
    const totalItems = items.reduce((acc, item) => acc + +item.quantity, 0);
    const recentItems = items.filter(item => Date.now() - new Date(item.createdAt).getTime() <= 1000 * 60 * 60 * 24 * 10);
    const runningOutItems = items.filter(item => item.quantity <= 10);



    return(
        <>
        <h2>Dashboard</h2>
         <div className="stock-info">
           <InfoContainer title="Diversidade de itens" infoAmount={itemsLength}/>
           <InfoContainer title="Inventário total" infoAmount={totalItems}/>
            <InfoContainer title="Itens recentes" infoAmount={recentItems.length}/>
            <InfoContainer title="Itens em falta" infoAmount={runningOutItems.length}/>
       
  
         </div>

         <div className="stock-tables"> 
            <RecentInfo/>
            <RunningOutInfo/>
         </div>
        </>
    )
}