import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromDemo from "../state/demo.reducer.typed";
import * as demoActions from "../state/demo.actions.creator";

@Component({
  selector: "app-ngrx-action-creators",
  templateUrl: "./ngrx-action-creators.component.html",
  styleUrls: ["./ngrx-action-creators.component.scss"]
})
export class NgrxActionCreatorsComponent implements OnInit {
  constructor(private store: Store<fromDemo.State>) {}

  showFilterPane: boolean = false;
  food: string;

  ngOnInit() {
    this.store.pipe(select(fromDemo.getShowFilter)).subscribe(hide => {
      this.showFilterPane = hide;
    });

    this.store.pipe(select(fromDemo.getFavFood)).subscribe(fav => {
      this.food = fav;
    });
  }

  checkChanged(val: boolean) {
    this.store.dispatch(new demoActions.ToggleShowFilter(val));
  }

  updateFavFoood() {
    this.store.dispatch(new demoActions.UpdateFood(this.food));
  }
}
