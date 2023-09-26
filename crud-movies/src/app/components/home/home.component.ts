import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  currentIndex = 0;
  intervalId: any;
  
  moviesList: Movie[] = [];

  images = [
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793346455928842/4.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793347370291230/5.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793347840061501/1.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793348083318855/2.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793346149756969/3.png'}
  ];

  constructor(private router: Router, private moviesService:MoviesService) { 
  
  }

  
  movies(){
    this.router.navigateByUrl(`/business/peliculas`);
  }

  getMovies(){
    this.moviesService.getList().subscribe({
      next: (response:any) => {
        this.moviesList = response;
      },
    });
  }

  ngOnInit(): void {
    this.getMovies();
  }

}
