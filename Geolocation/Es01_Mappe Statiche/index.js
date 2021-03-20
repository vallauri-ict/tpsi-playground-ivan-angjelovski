"use strict";

const URL = "https://maps.googleapis.com/maps/api";

// ******* Inserire all'interno della costante key la API Key fornitavi da Google *******
const key = "";

const params = {
  "key": key,
  "zoom": 16,
  "size": "800x600",
  "center": "via san michele 68, fossano", /*44.5557763,7.7347183*/
  "location": "via san michele 68, fossano", /*44.5557763,7.7347183*/
  "heading": "-60",
  "pitch": "7",
  "fov": "45",
  // maptype viene aggiunto dopo  manualmente
  "markers": "color:blue|size:big|label:V|via san michele 68, fossano",
};

const mapType = ["roadmap", "satellite", "hybrid", "terrain", "streetview"];

window.onload = function () {
  let imgBox = $("#imgBox");
  let btnBox = $("#btnBox");

  for (const item of mapType) {
    let btn = $("<button>");
    btn.text(item);
    btn.appendTo(btnBox);
    btn.on("click", visualizzaMappa);
  }
  
  $("button").eq(0).trigger("click");

  function visualizzaMappa() {
    let url;
	if ($(this).text() != "streetview") {
	  url = URL + "/staticmap?" + setParams($(this).text());
    } else {
	  url = URL + "/streetview?" + setParams("streetview");
	}
	imgBox.prop("src", url);
	
	$("button").removeClass("active");
	$(this).addClass("active");
  }

  function setParams(maptype) {
    let queryString = "";
    for (const key in params) {
      // se rimane una & al fondo non succede nulla
      queryString += key + "=" + params[key] + "&";
    }
    queryString += "maptype=" + maptype;
    return queryString;
  }
};
