import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatecardService } from '../services/createcard.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title: any;
  body: any;

  constructor(private createService: CreatecardService,private router: Router,
    private activated: ActivatedRoute) { }
  

  ngOnInit(): void {

  }


  create() {
    let user={
      title: this.title,
      body: this.body
    }
    console.log(user)

    const id = localStorage.getItem("id")
    
    this.createService.createCard(user, id).subscribe((respond: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/today'], { relativeTo: this.activated });
    })

  }
}
