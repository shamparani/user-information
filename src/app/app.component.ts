import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'user-information';
  today = new Date();
  
  pipe = new DatePipe('en-US');
  currentdate = this.pipe.transform(this.today, 'd-MMMM-y');
}
