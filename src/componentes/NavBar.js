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
          <button  className="btn btnCategoria">Jabones</button>
          <button className="btn btnCategoria">Desodorantes</button>
          <button className="btn btnCategoria">Perfumes</button>
          <button className="btn btnCategoria">Cremas</button>
        </div>
        <CartWidget />
        
    
    
    </nav>
    </>
)




}
export default NavBar