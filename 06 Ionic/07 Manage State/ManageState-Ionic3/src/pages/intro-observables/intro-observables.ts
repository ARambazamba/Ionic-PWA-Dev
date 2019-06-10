import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/from";
import { Movie } from "../../app/shared/model";
import { Observer } from "rxjs/Observer";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@IonicPage()
@Component({
  selector: "page-intro-observables",
  templateUrl: "intro-observables.html"
})
export class IntroObservablesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad IntroObservablesPage");
  }

  numbers = [1, 5, 10, 18, 22];
  nbrObs: Observable<number>;

  movies: Movie[];
  movieObs: Observable<Movie[]>;

  useObsCreate() {
    this.nbrObs = Observable.create(observer => {
      let idx = 0;

      let getNumber = () => {
        observer.next(this.numbers[idx++]);

        if (idx < this.numbers.length) {
          setTimeout(getNumber, 250);
        } else {
          observer.complete();
        }
      };

      getNumber();
    });

    this.nbrObs.subscribe((data: number) =>
      console.log("useObsCreate: ", data)
    );
  }

  useObsFrom() {
    Observable.from(this.numbers).subscribe(data =>
      console.log("useObsFrom: ", data)
    );
  }

  mockPromise(succeed: boolean): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task Complete");
        if (succeed) {
          resolve(this.numbers);
        } else {
          reject("Outcome: Promise rejected");
        }
      }, 1000);
    });
  }

  useFromPromise() {
    Observable.fromPromise(this.mockPromise(true)).subscribe(data =>
      console.log("usePromiseToObs:", data)
    );
  }

  createArrayObservable() {
    this.movies = [];
    let label = "Movie ";

    this.movieObs = Observable.create((observer: Observer<Movie[]>) => {
      setTimeout(() => {
        this.movies.push(<Movie>{ title: `${label} 1`, startTime: new Date() });
        observer.next(this.movies);
      }, 0);
      setTimeout(() => {
        this.movies.push(<Movie>{ title: `${label} 2`, startTime: new Date() });
        observer.next(this.movies);
      }, 1000);
      setTimeout(() => {
        this.movies.push(<Movie>{ title: `${label} 3`, startTime: new Date() });
        observer.next(this.movies);
      }, 2000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        this.movies.push(<Movie>{ title: `${label} 4`, startTime: new Date() });
        observer.next(this.movies);
      }, 4000);
    });

    this.movieObs.subscribe(data => {
      this.movies = data;
    });
  }

  private buildMedia(initialCount: number): Movie[] {
    let dt = new Date();
    const substractMinutes: number = 2;
    const intervalInSeconds: number = 20;

    this.movies = new Array();
    for (let i = 0; i < initialCount; i++) {
      let t0: Date = new Date(
        dt.setMinutes(dt.getMinutes() - substractMinutes)
      );
      let mi: Movie = <Movie>{
        id: i,
        title: `Movie ${i + 1}`,
        startTime: new Date(t0.setSeconds(t0.getSeconds() + intervalInSeconds))
      };
      this.movies.push(mi);
    }
    return this.movies;
  }

  getMovieBehaviourSubject(initialCount: number = 8) {
    console.log("using: getObservableUsingBehaviorSubj()");
    let bs: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(
      this.buildMedia(initialCount)
    );

    bs.subscribe(data => {
      console.log("BS:", data);
    });
  }

  usingBS() {}
}
