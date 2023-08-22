
const intialState = {
    count : 0
}

const reducerfunction = (state=intialState,action) => {
    switch (action?.type) {
        case "reset" : {
            const duplicatestate = {...state}
            duplicatestate.count = 0
            return duplicatestate;
        }
        case "increment" :{
            const fakestate = {...state}
            fakestate.count++;
            return fakestate
        }
        case "decrement" : {
            const fakestate = {...state}
            fakestate.count--;
            return fakestate
        }
        default: 
        {
            return state
        }
    }

}

export default reducerfunction;