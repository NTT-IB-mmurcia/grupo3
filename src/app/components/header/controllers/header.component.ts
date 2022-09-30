import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetCoordenatesFromTextService } from '../../../services/get-coordenates-from-text.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-header', 
  templateUrl: '../assets/header.component.html',
  styleUrls: ['../styles/header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() getCoor: EventEmitter<any> = new EventEmitter();

  //ciudad para search
  ciudad: string = "";


  constructor(private getCity: GetCoordenatesFromTextService) { }

  ngOnInit(): void {
  }

  SearchCity(){

    if(this.ciudad){
      console.log("Searching city...");

      this.getCity.getCoordenates(this.ciudad)
      .subscribe(k =>{
        console.log("COOR", k.results[0].locations[0].latLng);
        let sendCoor = k.results[0].locations[0].latLng;
      });
    }
      
  }

    /**
     * Al darle a buscar se deben visualizar la lista de alojamientos cerca de esa ciudad. 
     * Como el API solo acepta latitud y longitud para la búsqueda, deberéis traducir la ciudad a sus coordenadas. 
     * Podéis usar el servicio que queráis, os pongo uno que tiene 15000 llamadas gratuitas al mes (https://developer.mapquest.com/)
      Si no hay alojamientos se deberá mostrar un mensaje al usuario en vez de el listado
     */

  }


