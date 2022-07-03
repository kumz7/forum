import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fourm';
  user:any;  
  constructor(public userService:UserService, public cd: ChangeDetectorRef, private modalService: NgbModal ){
    userService.setCD(this.cd);
  }
  createPost(){
    const ref = this.modalService.open(CreatepostComponent);
    ref.componentInstance.name = 'Create Post';
  }
  ngOnInit(): void {
    this.userService.doLogin();
  } 
}
