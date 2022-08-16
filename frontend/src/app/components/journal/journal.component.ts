import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatecardService } from 'src/app/services/createcard.service';
import { GetallService } from 'src/app/services/getall.service';
import { ActivatedRouteSnapshot } from '@angular/router';

import { UpdatecardService } from 'src/app/services/updatecard.service';
import { GetbyidService } from 'src/app/services/getbyid.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
})
export class JournalComponent implements OnInit {
  Form!: FormGroup;
  id: any = localStorage.getItem('id');
  cardupdate: any;
  cardinfo: any;
  title:any;
  body:any;

  submitted: any;
  updateForm!: FormGroup;
  entryid: any;

  constructor(
    private createService: CreatecardService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activated: ActivatedRoute,
    private getallservice: GetallService,
    private getbyidservice: GetbyidService,
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

    // this.Form = new FormGroup({
    //   title: new FormControl(''),
    //   body: new FormControl(''),
    // });

    let id: number = this.activated.snapshot.params['id'];
   
    // console.log(`this is id: ${id}`);
    this.getbyid(id);
  }

  // update() {
  //   let user = {
  //     title: this.cardinfo.title,
  //     body: this.cardinfo.body,
  //   };
  //   let id: number = this.activated.snapshot.params['id'];

  //   console.log(`data: ${user}, id: ${id}`);


  //   this.updateservice.updatecard(user, id).subscribe((respond: any) => {
  //     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //     this.router.onSameUrlNavigation = 'reload';
  //     this.router.navigate(['/today'], { relativeTo: this.activated });
  //   });

  
  // }



  getbyid(id:any) {
    this.getbyidservice.getbyid(id).subscribe({

      next: (respond:any)=>{
          this.entryid = respond[0].entryid;
          this.body = respond[0].body;
          this.title = respond[0].title;
      }
    }
    )
    
  }




  // card: any = [1, 2, 3, 3, 3, 3]

  submit() {
    let data = {
      title: this.updateForm.value.title,
       body: this.updateForm.value.body,
       entryid:this.entryid
      }
 

  

    // console.log('hbjDWBUCJVJYG', data);

    this.updateservice.updatecard(data).subscribe((respond:any)=>{
      console.log("i am the message: ",respond
      );
      this.router.navigate(["/today"]);
    })
  }
}
