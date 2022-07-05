import './character.css'

function Character(prom){
    let {id,name,status,species,gender,image} = prom

    return(
        <div className={`person`}>
            <div>
            <img alt={name} src={image}/>
            </div>
            <div>
            <p>id: {id}</p>
            <h2>{name}</h2>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            </div>
        </div>
    )
}
export default Character;