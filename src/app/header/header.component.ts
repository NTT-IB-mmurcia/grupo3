import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //ciudad para search
  ciudad: any;


  constructor() { 

    this.ciudad = "MALAGA"

  }

  ngOnInit(): void {
  }

}
