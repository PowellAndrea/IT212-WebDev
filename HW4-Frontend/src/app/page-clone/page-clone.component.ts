import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-page-clone',
  templateUrl: './page-clone.component.html',
  styleUrls: ['./page-clone.component.scss']
})
export class PageCloneComponent implements OnInit {
  item: any;

  info: string = "nothing to see here";
  name:string = "bubblegum"

  constructor(private route: ActivatedRoute, router: ActivatedRoute){
   }

   ngOnInit() {
    this.item = this.route.paramMap.subscribe(params => {
     console.log(params);
     console.log(this.name);
     console.log(params.get('name'));

     this.name = "spanky";
    // this.name = params.get('name');
    })
  }
}
