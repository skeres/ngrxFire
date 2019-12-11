import { Component } from '@angular/core';
import { Store} from '@ngrx/store'
import { Observable } from 'rxjs'


import { Post } from './post.model'
import * as PosActions from './post.actions'

interface AppState {
  post : Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxFire';
  post : Observable<Post>;

  public text : string; // for input values

  constructor(private store: Store<AppState>){
    this.post=this.store.select('post')
  }

  editText(){
    this.store.dispatch(new PosActions.EditText(this.text));
  }

  resetPost(){
    this.store.dispatch( new PosActions.Reset())
  }


  upVote() {
    this.store.dispatch( new PosActions.UpVote())
  }

  downVote() {
    this.store.dispatch(new PosActions.DownVote())
  }



}
