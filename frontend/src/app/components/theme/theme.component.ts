import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  theme(theme: any){
    document.getElementById('hold')?.setAttribute('data-theme', theme)
  }
}
