let animals = [{ 
        type : "dog",
        breed : "husky",
        color : "black",
        sound : "bark"   
},
{
    type : "cat",
    breed: "persian cat",
    color: "orange",
    sound: "meow"
}
]

animals.forEach((animal) => {
    console.log(`I own a ${animal.type} and it is a ${animal.color} ${animal.breed}.`)
})