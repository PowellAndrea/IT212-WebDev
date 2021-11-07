import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CloneComponent } from 'app/clone/clone.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})

export class LandingpageComponent implements OnInit {

  name: string ="";
  imagePath: string = "";
  info: string ="";

  constructor(private router: ActivatedRoute, private route: Router) {

  }

  ngOnInit() {
  }

}
