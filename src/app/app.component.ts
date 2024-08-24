import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page1';
 
  isNewContentVisible: boolean = false;

  toggleContent(): void {
    this.isNewContentVisible = !this.isNewContentVisible;
  }



}
