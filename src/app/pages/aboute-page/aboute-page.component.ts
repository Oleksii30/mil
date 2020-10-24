import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboute-page',
  templateUrl: './aboute-page.component.html',
  styleUrls: ['./aboute-page.component.scss']
})
export class AboutePageComponent implements OnInit {

  link1:string = 'https://lh3.googleusercontent.com/jmRuxB5ks6KfB15yG-kfuXMdQik68PbCi5cGK7h4IIyMH11OklBJetPfxIkLnZUURGbO4T6iYGz0Hpim0i-JqAsvy6UQq7LeOx62qBO7HirSg5qFBFIs0uaxdvs41LvDYOHuo8FNBw=w2400'
  link2:string = 'https://lh3.googleusercontent.com/0R2yUCZcf07ANFyzZHYGddvqHwE77wUxkCMNhzoka2no689L_zZVlsRjN-tEpDh7BX7kX4X5ywz52Zftq-REgRM5JP-S0JegOhcgluZio-3MG4xrEb1T4ZxJLlJTgnnDwVeLFg2iFA=w2400'

  constructor() { }

  ngOnInit(): void {
  }

}
