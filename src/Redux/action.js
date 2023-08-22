
const zero = () =>{
    return{type:"reset"} 
}

const plus = () =>{
    return{type:"increment"}
}

const minus = () =>{
    return{type:"decrement"}
}

export {zero, plus , minus}