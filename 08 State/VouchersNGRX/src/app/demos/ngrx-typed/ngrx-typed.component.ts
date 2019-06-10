import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { TOGGLE_SHOW_FILTER, UPDATE_FOOD } from "../state/demo.actions";
import * as fromDemo from "../state/demo.reducer.typed";

@Component({
  selector: "app-ngrx-typed",
  templateUrl: "./ngrx-typed.component.html",
  styleUrls: ["./ngrx-typed.component.scss"]
})
export class NgRxTypedComponent implements OnInit {
  constructor(private store: Store<fromDemo.State>) {}

  showFilterPane: boolean = false;
  food: string;

  ngOnInit() {
    this.store.pipe(select(fromDemo.getShowFilter)).subscribe(showSum => {
      this.showFilterPane = showSum;
    });

    this.store.pipe(select(fromDemo.getFavFood)).subscribe(fav => {
      this.food = fav;
    });
  }

  checkChanged(val: boolean) {
    this.store.dispatch({
      type: TOGGLE_SHOW_FILTER,
      payload: val
    });
  }

  updateFavFoood() {
    this.store.dispatch({
      type: UPDATE_FOOD,
      payload: this.food
    });
  }
}
