// TEST DATA

let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]
let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]

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

