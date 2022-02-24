let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]

// MAP
// foods:[{id:number,name:string, price:number},...]
/// returns array of formatted strings[] (you choose what these look like)

const about = (foods)=>{
  return foods.map((food)=>{
    return`${food.name} is ${food.price}`
  })
}
let x = about(american)
let y = about(mexican)
console.log(x)
console.log(y)

const newFood = []

// [...]
// foods:[{id:number,name:string, price:number},...]
// food: {id:number,name:string, price:number}
/// returns new array with food add
const addFood1=(foods, food)=>{
  return [...foods, food]
}
const newfood = addFood1(american,{id:3, name:'milkshake'})
console.log(newfood)

// [...]

// foods:[{id:number,name:string, price:number},...]

// id:number,

// name:string, 

// price:number}

/// returns new array with food add

const addFood1=(foods, food)=>{
  return [...foods, food]
}
const newfood = addFood1(american,{id:3, name:'milkshake', price:53})
console.log(newfood)





//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

/// returns new array with the price updated with the id given

const updateFood1=(foods, id, price)=>{
  let x = foods.map((f)=>{
    if(f.id === id){
      return {...f, price: f.price +5}
    }
    return f
  })
  return x
};

const z = updateFood1(american,1)
console.log(z)



//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// food:{id:number,name:string, price:number}}

/// returns new array with the food item updated with the id given

const updateFood1=(foods, id )=>{
  let x = foods.map((f)=>{
    if(f.id === id){
      return {...f, name: f.name='chezz burger'}
    }
    return f
  })
  return x
};

const z = updateFood1(american,2)
console.log(z)
// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id

const deleteFood1 = (foods,id)=>{
  return foods.filter(foods=>{
    return foods.id !== id
  })
}
let x = deleteFood1(mexican,1)
console.log(x)



// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

const deleteFood1 = (foods,price)=>{
  return foods.filter(foods=>{
    return foods.price < 22
  })
}
let x = deleteFood1(mexican)
let z = deleteFood1(american)
console.log(x)
console.log(z)


