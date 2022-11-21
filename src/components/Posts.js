import { useState } from "react"

function Post(props) {
    const [salvar, setFotoSalva] = useState(false)
    const [like, setDeslike] = useState(false)
    const [contaLikes, setContaLikes] = useState(props.numbers)

    function mudarEstadoSalvo(){
        setFotoSalva(!salvar)
    }
    function mudarEstadoLikes(){
        if(!like){
            setContaLikes(contaLikes +1 )
        }else{
            setContaLikes(contaLikes -1 )
        }
        setDeslike(!like)
    }

    function mudarEstadoImagem(){
        if(!like){
            setDeslike(true)
            setContaLikes(contaLikes +1)
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.image} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo"onClick={mudarEstadoImagem}> 
                <img src={props.postImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                    {
                            like ? <ion-icon class='Redlike' onClick={mudarEstadoLikes} name="heart"></ion-icon> : <ion-icon onClick={mudarEstadoLikes} name="heart-outline"></ion-icon>
                        }

                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {
                            salvar ? <ion-icon onClick={mudarEstadoSalvo} name="bookmark"></ion-icon> : <ion-icon onClick={mudarEstadoSalvo} name="bookmark-outline"></ion-icon>
                        }
                        
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImage} />
                    <div class="texto">
                        Curtido por <strong>{props.like}</strong> e <strong>outras {contaLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        {
            name: 'meowed',
            image: 'assets/img/meowed.svg',
            postImage: 'assets/img/gato-telefone.svg',
            likeImage: 'assets/img/respondeai.svg',
            like: 'respondeai',
            numbers: 101523

        },
        {
            name: 'barked',
            image: 'assets/img/barked.svg',
            postImage: 'assets/img/dog.svg',
            likeImage: 'assets/img/9gag.svg',
            like: '9gag',
            numbers: 90523

        }

    ]
    return (
        <div class="posts">
            {posts.map((p) => (
                <Post
                    name={p.name}
                    image={p.image}
                    postImage={p.postImage}
                    likeImage={p.likeImage}
                    like={p.like}
                    number={p.numbers}
                />
            ))}
        </div>
    )
}