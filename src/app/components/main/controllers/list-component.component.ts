import { Component, OnInit } from '@angular/core';
import { AirbnbApiService } from '../../../services/airbnb-api.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private airbnbApiService: AirbnbApiService, 
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {

      this.route.queryParams.subscribe((params: any) => this.getList(params));

      //console.log(this.details)
      
    }

    childToParent( coordenadasDeCiudad: any){
       console.log("*** RECIBIENDO COORDENADAS ***", coordenadasDeCiudad);
    }


    getList(params:any): void {
      const coordenadas = {
        lat: parseFloat(params.lat),
        lng: parseFloat(params.lng)
      };

      console.log("*** RECIBIENDO COORDENADAS ***", params);

      this.airbnbApiService.getRoomListByCurrentPosition(coordenadas)
          .subscribe((details: Detail[]) => this.details = details);
    }

    goToDetails(event : any){

      console.log("*** goToDetails ***", event);

      this.router.navigate(
        ['/details'],
        event
      );
    }

}
