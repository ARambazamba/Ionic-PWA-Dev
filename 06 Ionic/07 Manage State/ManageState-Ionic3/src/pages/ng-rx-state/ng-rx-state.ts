import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Currency } from "../../app/shared/currency.model";
import { CurrenciesUpdateAction } from "../../ngrx/actions/currency";
import { AmountChangeAction } from "../../ngrx/actions/amount";
import * as fromRoot from "../../ngrx/reducers";

@IonicPage()
@Component({
  selector: "page-ng-rx-state",
  templateUrl: "ng-rx-state.html"
})
export class NgRxStatePage {
  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.amount$ = store.select(fromRoot.getAmountState);
    this.currencyRates$ = store.select(fromRoot.getCurrnecyRates);
  }

  // Dispatch the Action
  ngOnInit() {
    this.store.dispatch(new CurrenciesUpdateAction());
  }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);
    if (!isNaN(number)) this.store.dispatch(new AmountChangeAction(number));
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NgRxStatePage");
  }
}
