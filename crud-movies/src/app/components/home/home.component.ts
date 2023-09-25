import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentIndex = 0;

  images = [
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793346455928842/4.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793347370291230/5.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793347840061501/1.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793348083318855/2.png'},
    { src: 'https://media.discordapp.net/attachments/1154210086512758835/1155793346149756969/3.png'}
  ];

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
}
