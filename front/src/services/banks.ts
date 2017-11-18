import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {baseUrl} from '../app/constants'
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class BanksService {
  constructor(private http: Http) {

  }






  private extractBanks(res: any) {
    let body = res.json();
    console.log(body);
    return body
  }
}
