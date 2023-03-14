import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Joke } from '../interfaces/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private joke: Array<Joke>

  constructor() {
    this.joke = [
      {joke: "Joke1", punchLine:"Punchline1"},
      {joke: "Joke2", punchLine:"Punchline2"},
      {joke: "Joke3", punchLine:"Punchline3"}
    ]
   }
   getIndex():number{
    return Math.floor(Math.random() * this.joke.length)
   }
   emitJoke(index: number):Observable<string> {
    
    return of(this.joke[index].joke);
   }
   emitPunchLine(index: number): Observable<string> {
    return of(this.joke[index].punchLine);
   }
   getAllJokes(): Observable<Array<Joke>>{
    return of(this.joke);
   }
}
