import { Component, OnInit } from '@angular/core';
import { AirbnbApiService } from '../../../services/airbnb-api.service';
//import { Detail } from '../../detail/controllers/detail-component.component';
//import {  } from '../../detail/controllers/detail-component.component';
//import { Detail } from '../../detail/controllers/detail-component.component';

import { Detail } from 'src/app/models/detail-model'; //es el modelo??

@Component({
  selector: 'app-list-component',
  templateUrl: '../assets/list-component.component.html',
  styleUrls: ['../styles/list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  details: Detail[]=[];

  constructor(private airbnbApiService: AirbnbApiService) { }

    ngOnInit(): void {
      this.getList();
      console.log("detalles" + this.details)

      
    }

    childToParent( coordenadasDeCiudad: any){
       console.log("*** RECIBIENDO COORDENADAS ***", coordenadasDeCiudad);
    }


    getList(): void {
      this.airbnbApiService.getRoomListByCurrentPosition()
          .subscribe(details => this.details = details);
    }


}
