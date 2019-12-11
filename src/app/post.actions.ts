import{ Action } from '@ngrx/store';

export  const EDIT_TEXT='[POST] Edit';
export  const UP_VOTE='[POST] UpVote';
export  const DOWN_VOTE='[POST] DownVote';
export  const RESET='[POST] Reset';

export class EditText implements Action {
    readonly type = EDIT_TEXT;

    constructor (public payload:string) {

    }
}

export class UpVote implements Action {
    readonly type=UP_VOTE;
}

export class DownVote implements Action {
    readonly type=DOWN_VOTE;
}

export class Reset implements Action {
    readonly type=RESET;
}


export type All = UpVote | DownVote | Reset | EditText;


