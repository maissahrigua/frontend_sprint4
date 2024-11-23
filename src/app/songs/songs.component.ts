import { Component, OnInit } from '@angular/core';
import { Song } from '../model/song.model';
import { SongService } from '../services/services.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

     songs! : Song[]; //un tableau de Song
     
     constructor(private songService: SongService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerSongs();
      }
    
      chargerSongs(){
        this.songService.listeSong().subscribe(sons => {
          console.log(sons);
          this.songs = sons;
          });
      }
   

 
  

}
