export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 8,
      center: {
        lat: 48.52,
        lng: 2.19,
      },
    });
  }
}
