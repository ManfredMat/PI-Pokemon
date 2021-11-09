const { Router } = require('express');
const axios = require('axios')
const {Pokemon , Type}= require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/' ,(req , res)=>{
    res.status(200);
    res.send(allPokemons)
})
router.get('/pokemons' ,async (req , res)=>{
    try{
            let allPokemons =[];

            let listPokeDb = await Pokemon.findAll({
                include:[{
                    model: Type , attributes:['name'],
                    through:{
                        attributes:[]
                    }
                }]
            });

            listPokeDb = listPokeDb.map((pokemon)=>{return pokemon.dataValues})
            listPokeDb.forEach(pokemon => {
                pokemon.types = pokemon.types.map((type)=>{return type.name})
            });
            
            let pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=40');
    
            pokeApi = pokeApi.data.results
    
            let pokePromise= [];
            
            for(let i of pokeApi){
                pokePromise.push(axios.get(`${i.url}`))
            }
            let listPokeApi = await Promise.all(pokePromise); 
            
            for(let i of listPokeApi){
                let pokeTypes = i.data.types.map((type)=>{return type.type.name})

                allPokemons.push({
                    
                    id:i.data.id,
                    name:i.data.name,
                    image:i.data.sprites.front_default,
                    life:i.data.stats[0].base_stat,
                    strenght:i.data.stats[1].base_stat,
                    defense:i.data.stats[2].base_stat,
                    speed:i.data.stats[5].base_stat,
                    height:i.data.height,
                    weight:i.data.weight,
                    types:pokeTypes
                })
            }
            allPokemons = allPokemons.concat(listPokeDb)

            res.send(allPokemons)
    
        }catch(error){res.send(error)}
    
})
router.get('/pokemons/:name' , async(req,res)=>{
    let name = req.params.name;
    
    let url =`https://pokeapi.co/api/v2/pokemon/${name}`

    let pokemonApi = await Pokemon.findAll({
        where:{
           name: name,
        },
        include:[{
            model: Type , attributes:['name'],
            through:{
                attributes:[]
            }
        }]
    });;
     
    if(pokemonApi.length > 0){

        pokemonApi.forEach(pokemon => {
                pokemon.types = pokemon.types.map((type)=>{return type.name})
            });
         
          
        res.send(pokemonApi);
    }else{

        try{
        let pokeCall = await axios.get(url)
        let pokeTypes = pokeCall.data.types.map((type)=>{return type.type.name})
        pokemon={
        id:pokeCall.data.id,
        name:pokeCall.data.name,
        image:pokeCall.data.sprites.front_default,
        life:pokeCall.data.stats[0].base_stat,
        strenght:pokeCall.data.stats[1].base_stat,
        defense:pokeCall.data.stats[2].base_stat,
        speed:pokeCall.data.stats[5].base_stat,
        height:pokeCall.data.height,
        weight:pokeCall.data.weight,
        types:pokeTypes
        }
        
        res.send(pokemon)
        }catch(error){
        console.log(error)}
    }
    
        
    
})
router.get('/pokemons/:PokeId' , async(req,res)=>{
    let id = req.params.PokeId
   
    let url =`https://pokeapi.co/api/v2/pokemon/${id}`
    
        try{
        let pokeCall = await axios.get(url)
        let pokeTypes = pokeCall.data.types.map((type)=>{return type.type.name})
        pokemon={
        id:pokeCall.data.id,
        name:pokeCall.data.name,
        image:pokeCall.data.sprites.front_default,
        life:pokeCall.data.stats[0].base_stat,
        strenght:pokeCall.data.stats[1].base_stat,
        defense:pokeCall.data.stats[2].base_stat,
        speed:pokeCall.data.stats[5].base_stat,
        height:pokeCall.data.height,
        weight:pokeCall.data.weight,
        types:pokeTypes
        }
        
        res.send(pokemon)
        }catch(error){console.log(error)}
        
    
})
router.get('/types' , async (req , res)=>{

let typesDb = await Type.findAll()
if(!!typesDb.length){
    
    res.send(typesDb)
}else{
    
    try{

    let typeApi = await axios.get('https://pokeapi.co/api/v2/type')
    typeApi= typeApi.data.results.map((type)=>{return {name: type.name}})
    for(let i of typeApi){
        const newType = await Type.create({
            name: i.name
        })
    }

    res.send(typeApi)

    }catch(error){console.log(error)}
}
})
router.post('/addpokemon',async (req , res)=>{

    let { name ,image , life , strenght , defense , speed , height ,weight , type} = req.body;
    console.log(type)    
    
    try{
        
        const newPokemon = await Pokemon.create({
            name,
            image,
            life,
            strenght,
            defense,
            speed,
            height,
            weight
        });
        
        await newPokemon.setTypes(type)
        
        res.json(newPokemon);

    }catch(error){
        res.send(error)
    }
})


module.exports = router;
