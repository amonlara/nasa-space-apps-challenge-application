import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acting } from '../model/acting';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActingService {

  constructor(private httpClient: HttpClient) { }

  save(acting: Acting): Promise<Acting> {
    return this.httpClient.post<Acting>(`${environment.apiURL}/actings`, acting
    ).toPromise().then( resp => {
      return resp;
    } );
  }


  getAll(): Promise<Array<Acting>> {
      return this.httpClient.get<Array<Acting>>(`${environment.apiURL}/actings`
    ).toPromise().then( resp => {
      return resp;
    } );
  }

  getActingById(id: number): Promise<Acting> {
      return this.httpClient.get<Acting>(`${environment.apiURL}/actings/${id}`
    ).toPromise().then( resp => {
      return resp;
    } );
  }
}
