import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})

export class TopComponent implements OnInit {
  isNew = true;

  constructor() { }

  ngOnInit() {
  }

  btnClicked(){
    this.isNew = !this.isNew;
  }

}
