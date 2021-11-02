export default function Pokemon(pokemon){
    let poke =pokemon.pokemon
    return (
        <div>
            <h4>{poke.name}</h4>
            <img src={poke.image}/>                             
        </div>
        )
}