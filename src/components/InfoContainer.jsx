import { useItemCollection } from "../hooks/useItemsCollection"


export default function InfoContainer({title, infoAmount}){
    const item = useItemCollection()
    return(
       <>
         <div className="info-container">
              <h5>{title}</h5>
              <p>{infoAmount}</p>
         </div>
       </>
    )
}