import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { formatRFC3339WithOptions } from 'date-fns/fp';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {

        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      },

    );
  }

  get f() {
    return this.form.controls;
  }
  //onsubmit fuction to be called on the html
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {

      this.auth.loguser(this.form.value).subscribe(
        {
          next: (res: any) => {
            localStorage.setItem("id",res.userId)
            console.log(res.userId)

            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/today'], { relativeTo: this.route });
          }, error: (err: any) => {
            console.log(err)
          }
        }
      )
    }

  }

  //this is a reset function to be called in the html as reset button
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

