function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.texto}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )

}



export default function Sugestoes() {
    const sugestao = [
        {name:'bad.vibes.memes', image: "assets/img/bad.vibes.memes.svg", texto: 'Segue você'},
        {name:'chibirdart', image: "assets/img/chibirdart.svg", texto: 'Segue você'},
        {name:'razoesparaacreditar', image: "assets/img/razoesparaacreditar.svg", texto: 'Segue você'},
        {name:'adorable_animals', image: "assets/img/adorable_animals.svg", texto: 'Segue você'},
        {name:'smallcutecats', image: "assets/img/smallcutecats.svg", texto: 'Segue você'},
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
    {sugestao.map((s) => <Sugestao name={s.name} image={s.image} texto={s.texto}/>)}
    </div>
    )
}