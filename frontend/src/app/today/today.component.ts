import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { response } from 'express';
import { NgModel } from '@angular/forms';
import { CreatecardService } from 'src/app/services/createcard.service';
import { GetallService } from 'src/app/services/getall.service';
import { DeletecardService } from 'src/app/services/deletecard.service';
import { threadId } from 'worker_threads';
import { UpdatecardService } from '../services/updatecard.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {
  Form!: FormGroup;
  updateForm!: FormGroup;

  title: string = '';
  body: string = '';
  submitted: any;
  card: any;

  selected: any;

  constructor(
    private getallservice: GetallService,
    private reactiveformmodule: ReactiveFormsModule,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private deletecardservice: DeletecardService,
    private updateservice: UpdatecardService
  ) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      body: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

    this.Form = new FormGroup({
      entryId: new FormControl(''),

      title: new FormControl(''),
      body: new FormControl(''),
    });

    this.getallservice
      .getall(localStorage.getItem('id'))
      .subscribe((data: any) => {
        this.card = data;
        console.log(data);
      });
  }

  storeIndex!: number;
  entryid!: number;
  onSelect(num: any) {
    console.log(num);
    this.storeIndex = num;
    console.log(this.card[this.storeIndex].title);
    console.log(this.card[this.storeIndex].body);
    this.title = this.card[this.storeIndex].title;
    this.body = this.card[this.storeIndex].body;
    this.entryid = this.card[this.storeIndex].entryid;
    // this.selected = data;
  }

 

  /*get(){
    //console.log(this.Form.value);
    this.getallservice.getall().subscribe((respond : any) =>{
     this.card=response
      console.log(respond)
    })*/

  

  delete() {
    console.log(this.card[this.storeIndex].entryid);

    this.deletecardservice.deletecard(this.card[this.storeIndex].entryid).subscribe(
      (res: any) => {
        console.log(res);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/today'], { relativeTo: this.route });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submit() {
    let data = {
      title: this.title,
      body: this.body,
      entryid: this.entryid,
    };

    // console.log('hbjDWBUCJVJYG', data);

    this.updateservice.updatecard(data).subscribe((respond: any) => {
      console.log('i am the message: ', respond);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/today'], { relativeTo: this.route });
    });
  }
}

// this.card=response any = [1,2,3,3,3,3]
