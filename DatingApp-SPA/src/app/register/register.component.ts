import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private autService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.autService.register(this.model)
            .subscribe(next => {
              console.log('registration successful');
            }, error => {
              console.log(error)
            }, () => {
              console.log('Completed registration successfully');
            });
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Canceled');
  }
}
