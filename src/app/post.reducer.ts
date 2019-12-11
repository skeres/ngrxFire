import * as PostActions from './post.actions';
import { Post }  from './post.model'


export type Action =PostActions.All;

//Defautl app state
const defaultState: Post={
    text : 'blablabla', 
    likes : 0
};

//helper function to create a new state Object
const newState= (state, newData) => {
    return Object.assign({}, state, newData)
}

export function postReducer(state : Post=defaultState, action : Action) {
 console.log(action.type, state);


switch (action.type) {
    case PostActions.EDIT_TEXT : 
    return newState(state, {text : action.payload});

    case PostActions.UP_VOTE : 
    return newState(state, { likes:state.likes+1});

    case PostActions.DOWN_VOTE : 
    return newState(state, { likes:state.likes-1})

    case PostActions.RESET : 
    return defaultState;

    default : 
    return state;



}
    

}