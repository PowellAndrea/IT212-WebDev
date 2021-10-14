import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ChatMessage } from './models/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoaded: boolean = false;

  obs: Observable<number> = interval(5000);

  data: ChatMessage[] = [];

  ngOnInit(): void {      // Lifecycle Hook - run this when initialized

    this.obs.subscribe((d) => {    // subscribe to object
      this.data.push({
        name: "data" + d,
        message:  "toast" + d,
        author:   "me",
        created_on: new Date,
        updated_on: new Date,
        channel: "news"
      });
    })
  }

  toggleLoaded(){
      this.isLoaded = !this.isLoaded;
    }
  }
