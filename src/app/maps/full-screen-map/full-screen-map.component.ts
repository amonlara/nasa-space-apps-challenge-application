import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActingService } from 'app/shared/services/acting.service';
import { Acting } from 'app/shared/model/acting';
import { Marker } from 'app/shared/model/marker';
import { Statistical } from 'app/shared/model/statistical';
import { Fire } from 'app/shared/model/fire';
import { FirebaseApp } from '@angular/fire';


@Component({
    selector: 'app-full-screen-map',
    templateUrl: './full-screen-map.component.html',
    styleUrls: ['./full-screen-map.component.scss']
})

export class FullScreenMapComponent implements OnInit{
  markers: Array<Marker> = new Array<Marker>();

        public styleDark = [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },

        ];

    public defaultStyle = [];

   public actings: Array<Acting> = new Array<Acting>();

   statisticalShow: Statistical;
   showFire: boolean = false;
   fire: Fire;

    // Google map lat-long
    lat: number = -23.013538;
    lng: number =  -43.297337;

    ngOnInit(){

      this.actingService.getAll().then( resp => {
        this.actings = resp;

        this.actings.forEach( acting => {

          var coordinatesPoint = acting.address.coordinates;

          coordinatesPoint.forEach( coordinatePoint => {

            var marker = new Marker();
            marker.lat = coordinatePoint[0];
            marker.long = coordinatePoint[1];

            marker.id = acting.id;
            marker.title = acting.name;

            console.log(marker);

  
            this.markers.push(marker);

          });

        });


      });

    }

    mapClick(event: any) {
      console.log('mapClick', event);
    }

    markerClick(event: any) {
      console.log('markerClick', event);

      this.actingService.getActingById(event.title).then( resp => {
        console.log('resp', resp);

        this.statisticalShow = resp.statistical;

        var coordinates = resp.statistical.geometry.coordinates;
        coordinates.forEach( coordinatePoint => {
          console.log('coordinatePoint', coordinatePoint);
          this.fire = new Fire();
          this.fire.lat = coordinatePoint[0];
          this.fire.long = coordinatePoint[1];
          this.showFire = true;
        });
        this.cdRef.detectChanges();


      });

    }


    constructor(private actingService: ActingService,
      private cdRef: ChangeDetectorRef){

    }
   
}