import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private autService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.autService.register(this.model)
            .subscribe(next => {
              this.alertify.success('registration successful');
            }, error => {
             this.alertify.error(error);
            }, () => {
              console.log('Completed registration successfully');
            });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Canceled');
  }
}
