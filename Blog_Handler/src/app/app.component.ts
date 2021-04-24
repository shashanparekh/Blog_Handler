import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'First Application using Angular';
  card='../assets/123.jpg';
  height='100px';
  choice=false;
  show(){
    alert("hello");
  }
}
