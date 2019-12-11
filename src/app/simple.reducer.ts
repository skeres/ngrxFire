import { Action } from '@ngrx/store';

export function simpleReducer( state : string ='Hello my little big world', action : Action){

    console.log(action.type, state);

    switch (action.type) {
        case 'SPANISH' : return state='hola Mundo'
        case 'FRENCH' : return state='bonjour le monde !'
        default : return state;
    }
}