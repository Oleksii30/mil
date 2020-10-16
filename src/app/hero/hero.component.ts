import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  mainImageUrl:string = 'https://lh3.googleusercontent.com/hERr4I27IoEFII4-rt99-YfGbMTnN-5Px2xs0wkRu1KTUhZhmLXLxaWcpRWRpIEmerHVQglMiZZ07G-3ueFpwO6mRMtgmpEmIGudl-ugvRV50tOF_fcNhPjyi9oZTLNkzYQjwcMnAw=w2400'
  loading:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  onImageLoad() {
    this.loading = false    
  }
}
