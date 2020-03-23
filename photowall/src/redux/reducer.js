
import _posts from '../data/posts';


const postReducer = function posts(state = _posts, action) {
    console.log(...state)
    
    switch (action.type) {
        case 'ADD_POST': return [...state, action.post]
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        default: return state

    }
}

export default postReducer;