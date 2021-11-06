import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['./clone.component.scss']
})
export class CloneComponent implements OnInit {

  //currentClone: any = null;

  name: string ="";
  imagePath: string = "";
  info: string ="";
  id: number;

@Input() item: any;
@Output() showDetails = new EventEmitter<any>();

  myClones: any[] = [
    {
      name: "One",
      id: 1,
      imagePath: "assets/images/1clone.jpg",
      info:"Mare died at the age of 4 from bladder cancer.",
    },
    {
      name: "Two",
      id: 2,
      imagePath: "assets/images/2clone.jpg",
      info:"Stallion, sold at auction $28,000",
    },
    {
      name: "Three",
      id: 3,
      imagePath: "assets/images/3clone.jpg",
      info:"Stallion, sold at auction $27,000",
    },
    {
      name: "Four",
      id: 4,
      imagePath: "assets/images/4clone.jpg",
      info: "Gelding, sold at auction $3,000",
    },
    {
      name: "Five",
      id: 5,
      imagePath: "assets/images/5clone.jpg",
      info:"Gelding, sold at auction $2,400",
    }
  ]

  constructor(private router: ActivatedRoute, private route: Router) {
    this.id = 0;
    this.name="";
    this.info="";
    this.imagePath="";
  }

  ngOnInit() {
    //this.router.params.subscribe(params => {
    //});
  }

  showDetail(item:any){
    console.log("buy Me", item);
    this.route.navigate(['/DetailPanel']);
  }
}
