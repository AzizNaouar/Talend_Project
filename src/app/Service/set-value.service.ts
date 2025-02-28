import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetValueService 


{

  constructor(private http:HttpClient) { }

  // declaration de la route de connexion
  private apiUrl = 'http://localhost:8080/api/Controller';


  SentValue(cle:String,Date_Debut:String,Date_Fin:String):Observable<any>
  {

    const createUrl = `${this.apiUrl}/SetValue/${cle}/${Date_Debut}/${Date_Fin}`;
    return this.http.post(createUrl, {}); // Envoie un corps vide
  }



}
