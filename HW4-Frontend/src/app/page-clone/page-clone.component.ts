//  Probably should have passed this an object somehow - need a service for that?
//  not pretty

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-page-clone',
  templateUrl: './page-clone.component.html',
  styleUrls: ['./page-clone.component.scss']
})
export class PageCloneComponent implements OnInit {
  item: any;

  info: string | null = "nothing to see here";
  name:string | null = "bubblegum";    // Typescript:  "string" and "string | null" are two different types.

  constructor(private route: ActivatedRoute, router: ActivatedRoute){
   }

   ngOnInit() {
    this.item = this.route.paramMap.subscribe(params => {
     console.log(params);
     console.log(this.name);
     console.log(params.get('name'));

     this.name = params.get('name');  // the return type from params.get is "string | null"
     this.info = params.get('info');

  })
  }
}
