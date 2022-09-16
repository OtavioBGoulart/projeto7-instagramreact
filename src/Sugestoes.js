
const sugestoes = [
    { img: "img/bad.vibes.memes.svg", usuario: "bad.vibes.memes" },
    { img: "img/chibirdart.svg", usuario: "chibirdart" },
    { img: "img/razoesparaacreditar.svg", usuario: "razoesparaacreditar" },
    { img: "img/adorable_animals.svg", usuario: "adorable_animals" },
    { img: "img/smallcutecats.svg", usuario: "smallcutecats" },

]

function Sugestao(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt="" />
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
export default function Sugestoes() {

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Sugestao img={s.img} usuario={s.usuario} />)}
        </div>
    )


}