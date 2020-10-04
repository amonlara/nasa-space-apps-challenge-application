import { Injectable } from '@angular/core';
import { FireInpe } from '../model/fire_inpe';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Array<FireInpe>> {
      return this.httpClient.get<Array<FireInpe>>(`${environment.apiURL}/fires`
    ).toPromise().then( resp => {
      return resp;
    } );
  }

}
