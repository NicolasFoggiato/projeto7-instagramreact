import { useState } from "react"

export default function Usuario(props){
    const [novoNome, setMudarNome] = useState(props.name)
    const [suaFoto, setMudarFoto] = useState(props.image)

    function mudarNomeUsuario(){
        const nomeNovo = prompt('digite seu nome por  gentileza!') 
        setMudarNome(nomeNovo)
    }

    function mudarFotoUsuario(){
        const fotoNova = prompt('cole o link da nova foto!')
        setMudarFoto(fotoNova)
    }

    return(
        <div class="usuario">
        <img onClick={mudarFotoUsuario} src={suaFoto} />
        <div class="texto">
            <strong>{props.userName}</strong>
            <span>
                {novoNome}
                <ion-icon onClick={mudarNomeUsuario} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}