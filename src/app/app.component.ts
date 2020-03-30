import { Component } from "@angular/core";
declare var ol: any;
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
    name = "Angular";
  latitude: number = 2.335106;
  longitude: number = 46.8;

  map: any;

  ngOnInit() {
    this.map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([2.335106, 46.8]),
        zoom: 5
      })
    });
  }
}
