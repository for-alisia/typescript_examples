import {} from 'google-maps';

/** Interface for adding marker on the map */
export interface IMappable {
  location: {
    lat: number;
    lng: number;
  };
  markerInfo(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: IMappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerInfo()
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
