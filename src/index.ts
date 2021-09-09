// import { User } from "./User";
// import { Company } from "./Company";

const googleMapsSrc: string =
  "https://maps.googleapis.com/maps/api/js?key=" +
  process.env.GOOGLE_UDEMY_TS_KEY;
const googleMapsScript = document.createElement("script");
googleMapsScript.setAttribute("src", googleMapsSrc);
document.body.appendChild(googleMapsScript);

googleMapsScript.onload = function () {
  new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 0,
      lng: 0,
    },
  });
};
