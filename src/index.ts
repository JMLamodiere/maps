// import { User } from "./User";
// import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const googleMapsSrc: string =
  "https://maps.googleapis.com/maps/api/js?key=" +
  process.env.GOOGLE_UDEMY_TS_KEY;
const googleMapsScript = document.createElement("script");
googleMapsScript.setAttribute("src", googleMapsSrc);
document.body.appendChild(googleMapsScript);

googleMapsScript.onload = function () {
  const customMap = new CustomMap("map");
};
