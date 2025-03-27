import InfoContainer from "../components/InfoContainer";
import RecentInfo from "../components/RecentInfo";
import RunningOutInfo from "../components/RunningOutInfo";

export default function Home(){
    return(
        <>
        <h2>Dashboard</h2>
         <div className="stock-info">
           <InfoContainer title="Diversidade de itens" infoAmount={10}/>
           <InfoContainer title="Inventário total" infoAmount={10}/>
           <InfoContainer title="Itens Recentes" infoAmount={10}/>
           <InfoContainer title="Itens acabando" infoAmount={10}/>
         </div>

         <div className="stock-tables"> 
            <RecentInfo/>
            <RunningOutInfo/>
         </div>
        </>
    )
}