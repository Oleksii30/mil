import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() popupOpen

  @Output() onClose = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit('close')
  }

}
