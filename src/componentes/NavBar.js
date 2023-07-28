import CartWidget from "./CartWidget/CartiWidget"
import Logo from "./CartWidget/assets/logo2.png"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
const NavBar =  ()    =>  {
return (
    <>
    <nav>
        <div className="flexlogo">
        <img className='imglogo' src={Logo}></img>
        </div>
        <div>
        <button>Cremas</button>
        <button>Desodorantes</button>
        <button>Perfumes</button>
        <button>Jabones</button>
        </div>
        <CartWidget />
        
    
    
    </nav>
    <main>
    <ItemListContainer />
    </main>
    </>
)




}
export default NavBar