import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  router: any;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

 
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    conpassword: new FormControl(''),
});

get f() {
return this.form.controls;
}

createuser(): void {
let users = {
  data: {
    firstname: this.form.value.firstname,
    lastname: this.form.value.lastname,
    email: this.form.value.email,
    password: this.form.value.password,
    conpassword: this.form.value.conpassword,
  },
};

if (users.data.password != users.data.conpassword) {
 alert("Password don't match")
} else if(this.form.invalid){
  return;
}
else {
  this.auth.createUser(users.data).subscribe({
    next: data =>{
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/login'], { relativeTo: this.router });
      alert("Registered in successfully");
    },
    error: err =>{
      alert("You are already registered");
    }

  });
}
}

register() {
this.createuser();
}

ngOnInit(): void {
this.form = this.formBuilder.group({
  lastname: ['',[Validators.required, Validators.minLength(3)]],
  firstname: ['',[Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.email, Validators.minLength(10), Validators.required]],
  password: ['', [
    Validators.required,
    Validators.minLength(8),
  ]],
  conpassword: ['', [
    Validators.required,
    Validators.minLength(8),
  ]]
});
}

}
