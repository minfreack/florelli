import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Map, tileLayer, marker} from 'leaflet';
@Component({
  selector: 'app-contactus-c',
  templateUrl: './contactus-c.component.html',
  styleUrls: ['./contactus-c.component.css']
})
export class ContactusCComponent implements OnInit {
  map:Map;
  constructor() { }

  ngOnInit() {
    this.leaftLetMap();
  }
  leaftLetMap(){
    this.map=new Map('mapid').setView([18.463276408121448,-97.4031972885132],20);
    tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWluZnJlYWNrIiwiYSI6ImNrMTB6dTR3aTAyczEzZHFzemF2M2gza2oifQ.rQO8LWMdsvZHIPb5nDPLqQ', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',

    accessToken: 'pk.eyJ1IjoibWluZnJlYWNrIiwiYSI6ImNrMTB6dTR3aTAyczEzZHFzemF2M2gza2oifQ.rQO8LWMdsvZHIPb5nDPLqQ'
  }).addTo(this.map);
 
  marker([18.463276408121448,-97.4031972885132]).addTo(this.map)
      .bindPopup('Florelli')
      .openPopup();

  }}
  


