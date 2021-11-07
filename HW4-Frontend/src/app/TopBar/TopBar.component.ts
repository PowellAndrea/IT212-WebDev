import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-TopBar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() setDefault = new EventEmitter<any>();

  constructor(private router: ActivatedRoute, private route:Router) {
   }

  ngOnInit() {
  }

  goHome(){
    this.route.navigate(['/home']);
  }

}
