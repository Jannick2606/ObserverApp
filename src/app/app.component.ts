import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './interfaces/joke';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ObserverApp';
  joke$: Observable<string> | undefined;
  punchLine$: Observable<string> | undefined;
  jokes$: Observable<Array<Joke>> | undefined;
  constructor(private jokeService: JokeService){  
  }

  jokeClick(): void {
    this.jokes$ = this.jokeService.getAllJokes();
    setInterval(() =>{
    var index = this.jokeService.getIndex();
    this.joke$ = this.jokeService.emitJoke(index);
    setTimeout(() => {
      this.punchLine$ = this.jokeService.emitPunchLine(index);
    }, 3000)
  }, 6000
    )
    
  }
}
