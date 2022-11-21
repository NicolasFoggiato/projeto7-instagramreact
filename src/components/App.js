import NavBar from "./NavBar"
import Corpo from "./Corpo"
import Stories from "./Stories"
import Posts from "./Posts"
import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"


export default function  App() {
    return (
        <div>
            <NavBar/>
            <Corpo/>
            

            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>

    )
}