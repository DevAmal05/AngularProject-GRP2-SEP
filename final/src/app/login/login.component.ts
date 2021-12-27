import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  errorMessage: any;
  constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.loginForm=this.fb.group( {
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    )
  }

  login(){
    const email=this.loginForm.get('email').value;
    const password=this.loginForm.get('password').value;
    this.authservice.signInuser(email,password).then(
      () => {
        this.router.navigate(['/users'])
      },
      (error) =>{
        this.errorMessage=error
      }
    )
  }

}
