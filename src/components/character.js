import './character.css'

function Character(prors){
    let {name, desc, img} = prors;

    return(
        <div>
            <h2>{name}</h2>
            <p className={'desc'}>{desc}</p>
            <img src={img}/>
         </div>
    )
}
export default Character;