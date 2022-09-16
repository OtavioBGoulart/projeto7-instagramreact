
function User(props) {
    return (
        <div class="usuario">
            <img src={props.img} alt="" />
            <div class="texto">
                <strong>{props.nome}</strong>
                <span>
                    Catana
                    <ion-icon name="pencil"></ion-icon>
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