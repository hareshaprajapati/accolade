import {Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class JsonDataService {

  constructor(private http: Http) {
  }

  public getJSON() {

    return this.http.get("./assets/growerData.json")
      .map((value: Response) => {
        return value.json();
      })
      .catch(
        (error: Response) => {
          return Observable.throw('something went wrong');
        }
      );
  }
}
