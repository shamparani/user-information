import { Component, OnInit } from '@angular/core';
import { GetlistService } from '../getlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  listsOfUser:any;
  
  constructor(private service:GetlistService) {}
  
  ngOnInit() {
      this.service.getList()
        .subscribe(response => {
          this.listsOfUser = response;
          console.log(this.listsOfUser);
        }, err => {
          console.log('error')
        });
  }

}
