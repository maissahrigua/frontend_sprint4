import { Injectable } from '@angular/core';
import { Song } from '../model/song.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class SongService {
  apiURL: string = 'http://localhost:8080/songs/api/all';


  songs! : Song[]; //un tableau de songs
  //albums : Album[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeSong(): Observable<Song[]>{
    return this.http.get<Song[]>(this.apiURL);
    }

  

     
       
}