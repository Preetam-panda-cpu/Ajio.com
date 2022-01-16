import { Component } from '@angular/core';


interface Products{
  id: Number;
  title: String;
  desc: String;
  price: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AJIO';


}
