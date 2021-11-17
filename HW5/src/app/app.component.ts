import { Component, Input } from '@angular/core';
import { ChatService } from './chat.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() items:any

  title = 'HW5';
  name: string="";

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private chatSvc:ChatService) { }

    goHome(){
      this.router.navigate(['/home']);
    }

  ngOnInit() {
    this.chatSvc.getChannels().subscribe(data => this.items = data);
  }


}
