import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/author';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  private serviceEndPoint = 'http://localhost:4000/author';

  constructor(private http: HttpClient) { }

  getAll() : Observable<Author[]> {
    return this.http
        .get<Author[]>(this.serviceEndPoint);
}

getAuthor(id: number):
  Observable<Author[]> {
    return this.http
        .get<Author[]>(`${this.serviceEndPoint}/${id}`);
  }

  removeAuthor(id: number): Observable<Author[]>{
    return this.http
        .delete<Author[]>(this.serviceEndPoint + '/' +id);
}

addAuthor(author: Author): Observable<Author[]> {
    return this.http.post<Author[]>(this.serviceEndPoint + '/register/', author);
 }
}
