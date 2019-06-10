import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { Currency } from "../app/shared/currency.model";
import { API_KEY } from "../app/shared/model";

@Injectable()
export class FixerService {
  constructor(private httpClient: HttpClient) {}

  getRates(): Observable<Currency[]> {
    return this.httpClient
      .get<any>(`http://data.fixer.io/latest?base=EUR&access_key=${API_KEY}`)
      .map(result => {
        return Object.keys(result.rates).map((key, index) => {
          return { code: key, value: result.rates[key] };
        });
      });
  }
}
