
const initstate = {
    cakes: [],
    length: 0,
}

function cartReducer(state = initstate, action) {
    if (action.type === 'ADD-TO-CART') {
        return {
            ...state,
            cakes: state.cakes.concat(action.payload),
            length: state.length + 1,   
        }
    }
    else {
        return state;
    }
}

export default cartReducer;