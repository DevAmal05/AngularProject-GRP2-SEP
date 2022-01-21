import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup
  errorMessage:string

  constructor(private fb: FormBuilder,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.myForm=this.fb.group({
      firstname:new FormControl('', [
        Validators.required,
      
       
      ]),
      lastname:new FormControl('', [
        Validators.required,
      
       
      ]),
      email:new FormControl('', [
        Validators.required,
        Validators.email
       
      ]),
    
      password:new FormControl('', [
        Validators.required,
      
        Validators.minLength(3)
      ]),
      repeatPassword:new FormControl('', [
        Validators.required
      ]),

    }

    )
  }

  saveUser()
  {
    const email=this.myForm.get('email').value;
    const password=this.myForm.get('password').value;
    const repeatPassword=this.myForm.get('repeatPassword').value;
    this.authservice.signUpuser(email,password).then(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage=error
        alert("connexion invalide");
        
      }
    )
  }


}
