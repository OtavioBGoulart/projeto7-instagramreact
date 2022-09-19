import React from "react";

function User(props) {

    const [nome, setNome] = React.useState(props.nome);
    const [img, setImg] = React.useState(props.img);

    function mudaNome() {
        const novoNome = prompt("Para qual nomme deseja mudar?");
        setNome(novoNome);
    }

    function mudaImgPerfil() {
        const mudaImg = prompt("Digite o url da foto que deseja colocar!");
        setImg(mudaImg);
    }

    return (
        <div class="usuario">
            <img src={img} alt="" onClick={mudaImgPerfil} />
            <div class="texto">
                <strong>{nome}</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={mudaNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}


export default function Usuario() {

    return (
        <User nome="catanacomics" img="img/catanacomics.svg" />
    )


}