const stories = [
    { img: "img/9gag.svg", usuario: "9gag" },
    { img: "img/meowed.svg", usuario: "meowed" },
    { img: "img/barked.svg", usuario: "barked" },
    { img: "img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { img: "img/wawawicomics.svg", usuario: "bwawawicomics" },
    { img: "img/respondeai.svg", usuario: "respondeai" },
    { img: "img/filomoderna.svg", usuario: "filomoderna" },
    { img: "img/memeriagourmet.svg", usuario: "memeriagourmet" },

]

function Storie(props) {

    return (
        <div class="story">
            <div class="imagem">
              <img src={props.img} alt=""/>
            </div>
            <div class="usuario">
              {props.usuario}
            </div>
          </div>
    )

}

export default function Stories() {

    return (
        <div class="stories">
            {stories.map((s) => <Storie img={s.img} usuario={s.usuario} />)}
        </div>

    )

}