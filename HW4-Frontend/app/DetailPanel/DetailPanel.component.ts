import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-DetailPanel',
  templateUrl: './DetailPanel.component.html',
  styleUrls: ['./DetailPanel.component.scss']
})

export class DetailPanelComponent implements OnInit {
  @Input() item: any;   // decorator
  thingID: number = 0;
  isDefault: boolean=true;

// need to watch for new active route here?


  constructor(private router: ActivatedRoute) { }

  drawPage(target:any){
    this.thingID = target.id;
    console.log(this.thingID);
  }

  showDefault(){
    this.isDefault = true;
    console.log("show default");
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params =>{
      this.item = params['id'];

    });
  }

  



}
