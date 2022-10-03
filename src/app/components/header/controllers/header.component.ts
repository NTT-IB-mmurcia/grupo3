import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetCoordenatesFromTextService } from '../../../services/get-coordenates-from-text.service';
import { Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common'; 
import { Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header', 
  templateUrl: '../assets/header-buscador.html',
  styleUrls: ['../styles/header.component.css']
})
export class HeaderBuscadorComponent implements OnInit {
  
  @Output() childToParent = new EventEmitter<String>()

  //ciudad para search
  ciudad: string = "";


  constructor(
    @Inject(DOCUMENT) 
    private document: Document,
    private getCity: GetCoordenatesFromTextService,
    private router: Router)
    { 

      
    }




ngOnInit(): void {
  console.log("ngOnInit");  
}

  
  onClick(event: any) {
    console.log("onClick");

    if (event.key === "Enter") {
      event.preventDefault();
      let boton = this.document.getElementById("botonCiudad");
      if(boton != null){
        boton.click();
      }
    }
  }


  ngAfterViewInit() {

    setTimeout(() => {

      let input = this.document.getElementById("inputCiudad");
  
      console.log("input", input);
      
      if(input != null){

        input.addEventListener("keypress", this.onClick.bind(this));
      }
  
    }, 0)
  }



  SearchCity(){

    if(this.ciudad){
      console.log("Searching city...");

      this.getCity.getCoordenates(this.ciudad)
      .subscribe(k =>{
        console.log("COOR", k.results[0].locations[0].latLng);
        let coordenadasDeCiudad = k.results[0].locations[0].latLng;

        //this.childToParent.emit(coordenadasDeCiudad);

        this.router.navigate(
          [''],
          { queryParams: { "lat" : coordenadasDeCiudad.lat,  
                           "lng" : coordenadasDeCiudad.lng} }
        );

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


