

export default function InfoContainer({ title, infoAmount}){
    return(
       <>
         <div className="info-container">
              <h5>{title}</h5>
              <p>{infoAmount}</p>
         </div>
       </>
    )
}