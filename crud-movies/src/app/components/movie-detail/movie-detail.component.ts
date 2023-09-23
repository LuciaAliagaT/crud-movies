import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  movie : any = '';
  movieName : any = '';
  movieDescription : any = '';
  movieGenre : any = '';
  movieDuration : any = '';
  movieImg : any = '';



  constructor(private service: MoviesService, private activaedRouter: ActivatedRoute ) { 
    this.activaedRouter.params.subscribe(params => {
      this.getMovie(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getMovie(id : any){
    this.service.getMovie(id).subscribe(
      (res) =>{
        console.log(res);
        this.movie = res;
        this.movieName = this.movie.name;
        this.movieDescription = this.movie.description;
        this.movieGenre = this.movie.genre;
        this.movieDuration = this.movie.length;
        this.movieImg = this.movie.photo;

      },
      (err)=>{
        console.log(err);
      }
    )
  };
}
