import { useItemCollection } from "../context/ItemContext"


export default function InfoContainer(){
    const item = useItemCollection()
    return(
       <>
         <div className="info-container">
              <h5>{item.title}</h5>
              <p>{item.infoAmount}</p>
         </div>
       </>
    )
}