import { Link, Outlet } from "react-router-dom";


export default function RootLayout(){
    return(
        <div className="root-layout">
            <header>
                <h3>React Router</h3>

                <div className="links-nav">
                <Link to="/"><p>Inicio</p></Link>
                <Link to="/items"><p>Items</p></Link>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer> 
                <p> 
                Feito com React Router =) 
                </p> 
            </footer>
        </div>
    )
}