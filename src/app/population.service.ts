import { Injectable } from '@angular/core';
import { Data } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PopulationService {

  	constructor(private http: HttpClient) { }

  	private hostUrl = 'http://localhost:8000/api/data';  // URL to web api

	getData (): Observable<Data[]> {
  		return this.http.get<Data[]>(this.hostUrl).pipe(
      		catchError(this.handleError('getData', []))
    		);
	}

	/** DELETE: delete the hero from the server */
	deleteData (data: Data | string): Observable<Data> {
	  const _id = typeof data === 'string' ? data : data._id;
	  const url = `${this.hostUrl}/${_id}`;

	  return this.http.delete<Data>(url, httpOptions).pipe(
	    catchError(this.handleError<Data>('deleteData'))
	  );
	}

addData (data: Data): Observable<Data> {
	console.log(data);
  return this.http.post<Data>(this.hostUrl, data, httpOptions).pipe(
    catchError(this.handleError<Data>('addData'))
  );
}

updateData (data: Data): Observable<Data> {
  return this.http.put<Data>(this.hostUrl, data, httpOptions).pipe(
    catchError(this.handleError<Data>('updateData'))
  );
}


private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
   
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
