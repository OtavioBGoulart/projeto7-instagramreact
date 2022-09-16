const post = [
    { imgperfil: "img/meowed.svg", imgpost: "img/gato-telefone.svg", imgcurtiu: "img/respondeai.svg", textcurtiu: "respondeai" },
    { imgperfil: "img/barked.svg", imgpost: "img/dog.svg", imgcurtiu: "img/adorable_animals.svg", textcurtiu: "adorable_animals" },
]

function Post(props) {

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgperfil} alt=""/>
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgpost} alt=""/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcurtiu} alt=""/>
                    <div class="texto">
                        Curtido por <strong>{props.textcurtiu}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    return (
        <div class="posts">
            {post.map((p) => <Post imgperfil={p.imgperfil} imgpost={p.imgpost} imgcurtiu={p.imgcurtiu} textcurtiu={p.textcurtiu} />)}
        </div>
    )
}