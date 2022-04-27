import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User {
  id: string;
  nom_app: string;
  url: string;
  id_groupe: string ;
}

export class Groups {
  id_groupe: string;
  nom_groupe: string;
  ordre: string;
}
export class Annonce {
    telephone_annonceur: string;
    email_annonceur: string;
    animal_AGE: string;
    animal_ID: string;
    animal_RACE: string;
    animal_genre: string;
    vaccin: string ;
    animal_NOM: string;
    date_ANONCE : string;
    description: string ;

  }

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // REST API
  endpoint = 'http://localhost:8080/annonce';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080/'

    })
  }  

  getUsers(): Observable<User> {
    return this.httpClient.get<User>(this.endpoint + '/join')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSingleUser(id): Observable<User> {
    return this.httpClient.get<User>(this.endpoint + '/id/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  
  addAnnonce(data): Observable<Annonce> {
    return this.httpClient.post<Annonce>(this.endpoint + '/all', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
    }
    
 

  updateUser(id, data): Observable<User> {
    return this.httpClient.put<User>(this.endpoint + '/id/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }


  deleteUser(id){
    return this.httpClient.delete<User>(this.endpoint + '/id/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

 

  processError(err) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
  
}