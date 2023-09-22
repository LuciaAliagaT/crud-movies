import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent {
  genres: string[] = ['Acción', 'Aventura', 'Ciencia ficción', 'Comedia', 'Drama', 'Fantasía', 'Crimen'];
  selectedGenre = '';

  movieData!: Movie;

  @ViewChild('movieForm', {static: false})
  movieForm!: NgForm;

  displayedColumns :string[] = ['id', 'name', 'photo', 'length', 'genre'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) 
    paginator!: MatPaginator;
    isEditMode = false;
  @ViewChild(MatSort, {static: true})
    sort!: MatSort;


    onSubmit(): void {
    if (this.movieForm.form.valid) {
        console.log('Valid');
        if (this.isEditMode) {
            console.log('update');
            this.updateMovie();
        } else {
          console.log('create');
          this.addMovie();
        }        
        this.cancelEdit();
    }else {
      console.log('Valid data');
    }
    
  }
  constructor(private moviesService: MoviesService, private router: Router) { 
    this.movieData = {} as Movie;
  }
  cancelEdit(): void {
      this.isEditMode = false;
      this.movieForm.resetForm();
  }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllMovies();
  } 

  getAllMovies(): void{
    this.moviesService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

  searchByGenre(genre:any): void {
    this.selectedGenre = this.selectedGenre === genre ? '' : genre;

    if(this.selectedGenre === ''){
      this.getAllMovies();
    } else {
      this.dataSource.data = this.dataSource.data.filter((movie: any) => movie.genre.includes(this.selectedGenre));
      console.log(this.selectedGenre);
    }
  }

  editMovie(element: any): void{
    this.movieData = element;
    this.isEditMode = true;
  }

  deleteMovie(id: string): void{
    this.moviesService.deleteMovie(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      })
    })
    console.log(this.dataSource.data);
  } 

  // addStudent(): void{
  addMovie(): void{
    this.movieData.id = 0;
    this.moviesService.createMovie(this.movieData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        return o;
      });
    })
  }

  updateMovie(): void{
    this.moviesService.updateMovie(this.movieData.id, this.movieData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if(o.id === response.id){
          o = response;
        }
        return o;
      });
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow( row:any ){
    this.router.navigateByUrl(`/detail/${row.position}`);
  }

}
