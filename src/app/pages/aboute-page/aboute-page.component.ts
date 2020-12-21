import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboute-page',
  templateUrl: './aboute-page.component.html',
  styleUrls: ['./aboute-page.component.scss']
})
export class AboutePageComponent implements OnInit {

  link1:string = 'https://raw.githubusercontent.com/Oleksii30/photos/main/IMG_3590.webp'
  link2:string = 'https://raw.githubusercontent.com/Oleksii30/photos/main/IMG_3495.webp'

  constructor() { }

  ngOnInit(): void {
  }

}
