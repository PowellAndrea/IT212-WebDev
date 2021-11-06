import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-SelectPanel',
  templateUrl: './SelectPanel.component.html',
  styleUrls: ['./SelectPanel.component.scss']
})
export class SelectPanelComponent implements OnInit {
  @Input() item: any;
  
  myClones: any[] = [
    {
      name: "One",
      id: 0,
      imagePath: "assets/images/1clone.jpg",
      info:"Mare died at the age of 4 from bladder cancer.",
    },
    {
      name: "Two",
      id: 1,
      imagePath: "assets/images/2clone.jpg",
      info:"Stallion, sold at auction $28,000",
    },
    {
      name: "Three",
      id: 2,
      imagePath: "assets/images/3clone.jpg",
      info:"Stallion, sold at auction $27,000",
    },
    {
      name: "Four",
      id: 3,
      imagePath: "assets/images/4clone.jpg",
      info: "Gelding, sold at auction $3,000",
    },
    {
      name: "Five",
      id: 4,
      imagePath: "assets/images/5clone.jpg",
      info:"Gelding, sold at auction $2,400",
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
