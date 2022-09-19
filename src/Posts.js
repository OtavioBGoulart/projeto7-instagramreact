import React from "react";


const post = [
    { imgperfil: "img/meowed.svg", imgpost: "img/gato-telefone.svg", imgcurtiu: "img/respondeai.svg", textcurtiu: "respondeai", qtdecurtidas: "101523" },
    { imgperfil: "img/barked.svg", imgpost: "img/dog.svg", imgcurtiu: "img/adorable_animals.svg", textcurtiu: "adorable_animals", qtdecurtidas: "99372"},
]


function Post(props) {

    const [salvar, setSalvar] = React.useState("bookmark-outline");
    const [curtir, setCurtir] = React.useState("heart-outline");
    const [cor, setCor] = React.useState("");
    const [curtidas, setCurtidas] = React.useState(props.qtdecurtidas);

    function salvarPost() {

        if (salvar == "bookmark-outline") {

            setSalvar("bookmark");
        } 

        if (salvar == "bookmark") {

            setSalvar("bookmark-outline");
        }
    }               
    
    function curtirPost() {
        
        if (curtir == "heart-outline") {
            setCurtir("heart");
            setCor("red");
            const addCurtida = Number(curtidas) + 1
            setCurtidas(addCurtida);

        }
    }

    function curtirIcon() {

        if (curtir == "heart-outline") {

            setCurtir("heart");
            setCor("red");
            const addCurtida = Number(curtidas) + 1
            setCurtidas(addCurtida);
        }

        if (curtir == "heart") {

            setCurtir("heart-outline");
            setCor("");
            const removeCurtida = Number(curtidas) - 1
            setCurtidas(removeCurtida);
        }
    
    }


    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgperfil} alt="" />
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgpost} alt="" onClick={curtirPost}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={curtir} style= {{color: cor}} onClick={curtirIcon}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon name={salvar} onClick={salvarPost}></ion-icon> 
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcurtiu} alt="" />
                    <div class="texto">
                        Curtido por <strong>{props.textcurtiu}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    return (
        <div class="posts">
            {post.map((p) => <Post imgperfil={p.imgperfil} imgpost={p.imgpost} imgcurtiu={p.imgcurtiu} textcurtiu={p.textcurtiu} qtdecurtidas={p.qtdecurtidas}/>)}
        </div>
    )
}