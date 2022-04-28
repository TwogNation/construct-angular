import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Game } from './models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'construct-angular';
  scores?: Observable<any>;
  gameFrameData: any;
  iframe: any;
  iframeData: any;
  myScore: any;
  @ViewChild('gameFrame', { static: false })
  gameFrame!: ElementRef<any>;
  localScores: any;
  myGame?: Game;
  playerName: any;
  id: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.playerName = '?';
    this.getGames();
    console.log('games are: ' + this.scores);
  }

  iFrameRead(): void {
    window.addEventListener(
      'message',
      (event) => {
        this.myScore = event.data;
        console.log('my score is:');
        console.log(this.myScore);

        this.postGame(this.myScore);
      },
      false
    );
  }

  getName(name: any): void {
    this.playerName = name;
  }

  ngAfterViewInit(): void {
    this.iFrameRead();
  }

  getGames(): void {
    this.scores = this.http.get('/api/scores');
    console.log('getGames passed');
    this.localScores = this.scores;
  }

  postGame(myScore: any): void {
    this.id = Date.now();
    this.myGame = {
      id: this.id,
      user: this.playerName,
      points: myScore,
    };
    console.log('my game is:');
    console.log(this.myGame);
    this.http.post<Game>('/api/scores', this.myGame, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
    console.log('http post passed');

    // console.log('local scores:');
    // console.log(this.localScores);
    // this.localScores?.push(this.myGame);
    // console.log('local scores: ' + this.localScores);
  }

  /*token() {
    // 1. access token variable from C3
    const token = 123456789;
    const out = document.getElementById('out');
    const c3 = document.getElementById('c3');

    const base = 'c3/index.html';
    // 2. send token by query string to C3
    document.getElementById('submit').addEventListener('click', () => {
      let url;
      if (token) {
        url = `${base}?url=${token}`;
      } else {
        url = base;
      }
      c3.src = url;
    });
    // 3. call function from C3 to get token
    function getToken() {
      return token;
    }
    console.log('token value> ' + token);
  }*/
}
