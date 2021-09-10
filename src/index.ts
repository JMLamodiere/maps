import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const googleMapsScript = (function () {
  const src =
    "https://maps.googleapis.com/maps/api/js?key=" +
    process.env.GOOGLE_UDEMY_TS_KEY;
  const script = document.createElement("script");
  script.setAttribute("src", src);
  document.body.appendChild(script);
  return script;
})();

googleMapsScript.onload = function () {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap("map");

  customMap.addMarker(user);
  customMap.addMarker(company);
};
