import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, public uservice:UserService) { }
  feed:any;
  ngOnInit(): void {
  }
  doPost(){
    this.uservice.feeds.push({
      user:this.uservice.user.name,
      status:this.feed
    })
    this.uservice.feeds = JSON.stringify(JSON.parse(this.uservice.feeds)); 
    this.activeModal.close('Close click');
  }

}
