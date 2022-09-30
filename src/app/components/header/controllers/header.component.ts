import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', 
  templateUrl: '../assets/header.component.html',
  styleUrls: ['../styles/header.component.css']
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
