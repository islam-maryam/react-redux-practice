const initState = {
    tasks: [],
}

function taskReucer(state = initState, action) {
    if (action.type === "CREATE-TASK"){
        return {
            ...state,tasks: state.tasks.concat(action.payload)  
        }
    }
    else if (action.type === "UPDARE-TASK"){}
    else if (action.type === "DELETE TASK"){}
    else {
        return state;
    }
}

export default taskReucer;