mapboxgl.accessToken = "pk.eyJ1IjoiZGxtNTg5IiwiYSI6ImNrNTg5NmFrMjBjYWEzbm80dTk2bzVvcTQifQ.uSqt_zKktbLWt-5D9mIbSg";
//=====================================================================================================================
//================================================= Large Source and Add Layer =======================================
//=====================================================================================================================
var largeMap = new mapboxgl.Map({
  container: "large",  //container id in HTML
  style: "mapbox://styles/dlm589/ck6tfgu6n4idu1io9znelasuo",  //stylesheet location
  center: [-79.650329,47.972871],  // specify where the starting point is, longitude/latitude43° 39" 3.8520"" N and 79° 20" 49.2540"
  zoom: 5 // starting zoom level
});
largeMap.on("load", function() // this is to make sure the label is in front of all layers
{
  var layers = largeMap.getStyle().layers;
  var layersLabel;
  for (var i = 0; i < layers.length; i++)
  {
    if (layers[i].type === "symbol" && layers[i].layout["text-field"])
    {
      layersLabel = layers[i].id;
      break;
    }
  }
largeMap.addSource("Province_Recent_Immigrant",{
    "type" : "vector",
    "url" : "mapbox://dlm589.9xic5jcm"
  });
  // addProvince Province_Recent_Immigrant
  largeMap.addLayer({
    "id": "Province",
    "type": "fill",
    "source" : "Province_Recent_Immigrant",
    "source-layer": "Province_RecentImmi-79024l",
    "layout" : {"visibility" : "visible"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "COL0"], 10, "#8dd3c7", 11, "#ffffb3", 12, "#bebada", 13, "#fb8072", 24, "#80b1d3", 35, "#fdb462", 46, "#b3de69", 47, "#fccde5", 48, "#d9d9d9", 59, "#bc80bd", 60, "#ccebc5", 61, "#ffed6f", 62, "#99ffcc"
    ]
    }
  }, layersLabel);
  largeMap.addLayer({
    "id": "Province_Recent_Immigrant",
    "type": "fill",
    "source" : "Province_Recent_Immigrant",
    "source-layer": "Province_RecentImmi-79024l",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Port_RAS"],
      10, "#5e4fa2",
      20, "#3288bd",
      30, "#66c2a5",
      40, "#abdda4",
      50, "#e6f598",
      60, "#fee08b",
      70, "#fdae61",
      80, "#f46d43",
      90, "#d53e4f",
      100, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);

largeMap.addSource("Province_Past_Immigrant",{
    "type" : "vector",
    "url" : "mapbox://dlm589.6uy6abs1"
  });
  // addProvince Province_Past_Immigrant
  largeMap.addLayer({
    "id": "Province_Past_Immigrant",
    "type": "fill",
    "source" : "Province_Past_Immigrant",
    "source-layer": "Province_OldImmi-d95lpi",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Port_AS"],
      10, "#5e4fa2",
      20, "#3288bd",
      30, "#66c2a5",
      40, "#abdda4",
      50, "#e6f598",
      60, "#fee08b",
      70, "#fdae61",
      80, "#f46d43",
      90, "#d53e4f",
      100, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
largeMap.addSource("ProvinceAge_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.2o4xe6lc"
  });
  // addProvince Province_Age
  largeMap.addLayer({
    "id": "Province_Age",
    "type": "fill",
    "source" : "ProvinceAge_source",
    "source-layer": "Province_Age-aiaizb",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "AvgAge"],
      25, "#5e4fa2",
      30, "#3288bd",
      35, "#66c2a5",
      40, "#abdda4",
      41.5, "#e6f598",
      42, "#fee08b",
      42.5, "#fdae61",
      43, "#f46d43",
      44, "#d53e4f",
      45, "#9e0142"
      ],"fill-outline-color": "#000000"}
  }, layersLabel);

largeMap.addSource("ProvinceOrigin_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.5n8uijjj"
  });
  // addProvince Origin
  largeMap.addLayer({
    "id": "Province_Ethnic_Origin",
    "type": "fill",
    "source" : "ProvinceOrigin_source",
    "source-layer": "Province_Origin-bbsu91",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Calc_COL11"],
      0.01, "#5e4fa2",
      0.02, "#3288bd",
      0.03, "#66c2a5",
      0.04, "#abdda4",
      0.05, "#e6f598",
      0.06, "#fee08b",
      0.07, "#fdae61",
      0.1, "#f46d43",
      0.3, "#d53e4f",
      0.5, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
/*
largeMap.addSource("ProvinceTongue_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.2kf2ubmb"
  });
  // addProvince Province_Mother_Tongue
  largeMap.addLayer({
    "id": "Province_Mother_Tongue",
    "type": "fill",
    "source" : "ProvinceTongue_source",
    "source-layer": "Province_Tongue-4i42z8",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": "white",
      "fill-outline-color" : "#000000"
    }
  }, layersLabel);*/
largeMap.addSource("CensusDivisionRecent_Immigrant_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.2yi9nbis"
  });
  // addCensusDivision Province_Recent_Immigrant
  largeMap.addLayer({
    "id": "CensusDivision_Recent_Immigrant",
    "type": "fill",
    "source" : "CensusDivisionRecent_Immigrant_source",
    "source-layer": "CensusDivision_RecentImmi-c9crff",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Port_RAS"],
      10, "#5e4fa2",
      20, "#3288bd",
      30, "#66c2a5",
      40, "#abdda4",
      50, "#e6f598",
      60, "#fee08b",
      70, "#fdae61",
      80, "#f46d43",
      90, "#d53e4f",
      100, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
largeMap.addSource("CensusDivisionPast_Immigrant_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.caa9nrho"
  });
  // addCensusDivision Province_Past_Immigrant
  largeMap.addLayer({
    "id": "CensusDivision_Past_Immigrant",
    "type": "fill",
    "source" : "CensusDivisionPast_Immigrant_source",
    "source-layer": "CensusDivision_OldImmi-ar0zcz",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Port_AS"],
      10, "#5e4fa2",
      20, "#3288bd",
      30, "#66c2a5",
      40, "#abdda4",
      50, "#e6f598",
      60, "#fee08b",
      70, "#fdae61",
      80, "#f46d43",
      90, "#d53e4f",
      100, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
largeMap.addSource("CensusDivisionAge_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.azawezg3"
  });
  // addCensusDivision Province_Age
  largeMap.addLayer({
    "id": "CensusDivision_Age",
    "type": "fill",
    "source" : "CensusDivisionAge_source",
    "source-layer": "CensusDivision_Age-dwu75l",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "AvgAge"],
      40,	 "#f46d43",
      45,	 "#fdae61",
      50,	 "#fee08b",
      55,	 "#e6f598",
      60,	 "#abdda4",
      65,	 "#66c2a5",
      70,	 "#3288bd",
      75,	 "#5e4fa2"
      ],"fill-outline-color": "#000000"}
  }, layersLabel);
largeMap.addSource("CensusDivisionOrigin_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.3medly6n"
  });
  // addCensusDivision Origin
  largeMap.addLayer({
    "id": "CensusDivision_Origin",
    "type": "fill",
    "source" : "CensusDivisionOrigin_source",
    "source-layer": "CensusDivision_Origin-4a4wwl",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Calc_COL12"],
      0.01, "#5e4fa2",
      0.02, "#3288bd",
      0.05, "#66c2a5",
      0.1, "#abdda4",
      0.15, "#e6f598",
      0.2, "#fee08b",
      0.25, "#fdae61",
      0.3, "#f46d43",
      0.4, "#d53e4f",
      0.5, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
largeMap.addSource("CensusDivisionTongue_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.cbi0oakl"
  });
  // addCensusDivision Province_Mother_Tongue
  largeMap.addLayer({
    "id": "CensusDivision_Tongue",
    "type": "fill",
    "source" : "CensusDivisionTongue_source",
    "source-layer": "CensusDivision_Tongue-7b2mlc",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": "white",
      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
largeMap.addSource("CensusSubDivisionAge_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.dcdwf2cp"
  });
  // addCensusSubDivision Province_Age
  largeMap.addLayer({
    "id": "CensusSubDivision_Age",
    "type": "fill",
    "source" : "CensusSubDivisionAge_source",
    "source-layer": "CensusSubDivisionAge-9wijp2",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Age_Sex_23"],

      40,	 "#f46d43",
      45,	 "#fdae61",
      50,	 "#fee08b",
      55,	 "#e6f598",
      60,	 "#abdda4",
      65,	 "#66c2a5",
      70,	 "#3288bd",
      75,	 "#5e4fa2"
      ],"fill-outline-color": "#000000"}
  }, layersLabel);
largeMap.addSource("CensusSubDivisionRecent_Immigrant_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.3977to9a"
  });
  // addCensusSubDivision Province_Recent_Immigrant
  largeMap.addLayer({
    "id": "CensusSubDivision_Recent_Immigrant",
    "type": "fill",
    "source" : "CensusSubDivisionRecent_Immigrant_source",
    "source-layer": "CensusSubDivision_RecentImmi-4w2kc8",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Port_RAS"],
      10, "#5e4fa2",
      20, "#3288bd",
      30, "#66c2a5",
      40, "#abdda4",
      50, "#e6f598",
      60, "#fee08b",
      70, "#fdae61",
      80, "#f46d43",
      90, "#d53e4f",
      100, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
largeMap.addSource("CensusSubDivisionPast_Immigrant_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.7plpsmxv"
  });
  // addCensusSubDivision Province_Past_Immigrant
  largeMap.addLayer({
    "id": "CensusSubDivision_Past_Immigrant",
    "type": "fill",
    "source" : "CensusSubDivisionPast_Immigrant_source",
    "source-layer": "CensusSubDivision_OldImmi-1yirgk",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Port_AS"],
      10, "#5e4fa2",
      20, "#3288bd",
      30, "#66c2a5",
      40, "#abdda4",
      50, "#e6f598",
      60, "#fee08b",
      70, "#fdae61",
      80, "#f46d43",
      90, "#d53e4f",
      100, "#9e0142"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
largeMap.addSource("CensusSubDivisionOrigin_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.2pmdg1ax"
  });
  // addCensusSubDivision Origin
  largeMap.addLayer({
    "id": "CensusSubDivision_Origin",
    "type": "fill",
    "source" : "CensusSubDivisionOrigin_source",
    "source-layer": "CensusSubDivision_Origin-d3mxyk",
    "layout" : {"visibility" : "none"},
    "paint" :
    {
      "fill-color": ["interpolate",["linear"],["get", "Calc_COL14"],
      0.01, "#5e4fa2",
      0.02, "#3288bd",
      0.05, "#66c2a5",
      0.1, "#abdda4",
      0.2, "#e6f598",
      0.3, "#fee08b",
      0.4, "#fdae61",
      0.5, "#f46d43",
      0.6, "#d53e4f",
      0.7, "#9e0142",
      7, "#000000"
      ],      "fill-outline-color" : "#000000"
    }
  }, layersLabel);
/*largeMap.addSource("CensusSubDivisionTongue_source",{
    "type" : "vector",
    "url" : "mapbox://dlm589.1r9wvtrm"
  });
  // addCensusSubDivision Province_Mother_Tongue
  largeMap.addLayer({
    "id": "CensusSubDivision_Tongue",
    "type": "fill",
    "source" : "CensusSubDivisionTongue_source",
    "source-layer": "CensusSubDivision_Tongue-1k1oir",
    "layout" : {"visibility" : "none"},
    "paint" :
    {

      "fill-outline-color" : "#ffffff"
    }
  }, layersLabel);*/
});
//================================================= Large Map Interactive Features ====================================
//===================================================Select Menu=======================================

var toggleableLayerIds =
[
    "Province_Age",
    "CensusDivision_Age",
    "CensusSubDivision_Age",
    "Province_Recent_Immigrant",
    "CensusDivision_Recent_Immigrant",
    "CensusSubDivision_Recent_Immigrant",
    "Province_Past_Immigrant",
    "CensusDivision_Past_Immigrant",
    "CensusSubDivision_Past_Immigrant",
    "Province_Ethnic_Origin",
    "CensusDivision_Origin",
    "CensusSubDivision_Origin"
]
for (var i =0; i<toggleableLayerIds.length; i++)
{
  var id = toggleableLayerIds[i];
  var link = document.createElement('a');
  link.href = '#';
  link.className = '';
  link.textContent = id;

  var currentIndex; // used for storing the the current clicked layer index number
  var zoom = largeMap.getZoom()
  console.log(zoom)
  link.onclick = function(e)
  {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = largeMap.getLayoutProperty(clickedLayer, 'visibility');
    var index = toggleableLayerIds.indexOf(clickedLayer);
    var newIndex = index;
    currentIndex = newIndex;
    //only highlight the selected bars and turn on the clicked layer
    for (var x = 0; x<toggleableLayerIds.length; x++)
    {
      if (x != newIndex)
      {
  //      document.getElementsByTagName("a")[x+4].setAttribute("class", "");
          largeMap.setLayoutProperty(toggleableLayerIds[x], 'visibility', 'none')
          console.log(toggleableLayerIds[x])
      }
      else
      {
  //      document.getElementsByTagName("a")[newIndex+4].setAttribute("class", "active");
          largeMap.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      }
    }

    //largeMap.setLayoutProperty(clickedLayer, 'visibility', 'visible');
  };

  var layers = document.getElementById('menu');
  layers.appendChild(link);
}
var popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: false
  });
//====================== ================ ====================
//====================== Recent Immigrant ====================

//======================Province====================
largeMap.on("mouseenter","Province_Recent_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","Province_Recent_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "Province_Recent_Immigrant", (e) =>
{
    var worldField = e.features[0].properties.PRUID;
    var smallMap = new mapboxgl.Map({
      container: "small",  //container id in HTML
      style: "mapbox://styles/dlm589/ck86oxm1z0g3l1ikareawpiyj",  //stylesheet location
      center: [8,45],  // specify where the starting point is, longitude/latitude43° 39" 3.8520"" N and 79° 20" 49.2540"
      zoom: -0.3 // starting zoom level
    });
    smallMap.on("load", function() // this is to make sure the label is in front of all layers
    {
      var layers = smallMap.getStyle().layers;
      var layersLabel;
      for (var i = 0; i < layers.length; i++)
      {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"])
        {
          layersLabel = layers[i].id;
          break;
        }
      }
      smallMap.addSource("World_RecentImmigrants_source",{
          "type" : "vector",
          "url" : "mapbox://dlm589.41k6jaru",
        });
        // addProvince Province_Recent_Immigrant
      smallMap.addLayer({
        "id": "Province_Recent_Immigrant",
        "type": "fill",
        "source" : "World_RecentImmigrants_source",
        "source-layer": "World_Recent_Province-76wqez",
        "layout" : {},
        "paint" :
        {
          "fill-color": ["interpolate",["linear"],["get", "F"+ worldField],
          0,"#C0C0C0", 0.001, "#000000",
          0.003, "#5e4fa2", 0.005, "#3288bd",
          0.01, "#66c2a5", 0.015, "#abdda4",
          0.02, "#e6f598", 0.03, "#fee08b",
          0.1, "#fdae61", 0.4, "#f46d43",
          1, "#9e0142"

          ],      "fill-outline-color" : "#000000"
        }
      }, layersLabel);
    });
/*    smallMap.on("mouseenter","Province_Recent_Immigrant",function(e){
          smallMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
      });
    // if the mouse leaves the province fill layer then do the following:
    largeMap.on("mouseleave","Province_Recent_Immigrant",function(e){
        largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
      });*/
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Colombia * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.Cuba * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Haiti * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Jamaica * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Mexico * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.United_Sta * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Venezuela * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.Other_plac * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.France * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.Germany * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.Ireland * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.Moldova * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.Romania * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.Russian_Fe * 100)/100);
        var field16 = (Math.floor(e.features[0].properties.Ukraine * 100)/100);
        var field17 = (Math.floor(e.features[0].properties.United_Kin * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.Other_pl_1 * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.Algeria * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.Cameroon * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.Congo__Dem * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.Côte_d_Iv * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.Egypt * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.Eritrea * 100)/100);
        var field25 = (Math.floor(e.features[0].properties.Ethiopia * 100)/100);
        var field26 = (Math.floor(e.features[0].properties.Morocco * 100)/100);
        var field27 = (Math.floor(e.features[0].properties.Nigeria * 100)/100);
        var field28 = (Math.floor(e.features[0].properties.Somalia * 100)/100);
        var field29 = (Math.floor(e.features[0].properties.South_Afri * 100)/100);
        var field30 = (Math.floor(e.features[0].properties.Tunisia * 100)/100);
        var field31 = (Math.floor(e.features[0].properties.Other_pl_2 * 100)/100);
        var field32 = (Math.floor(e.features[0].properties.Afghanista * 100)/100);
        var field33 = (Math.floor(e.features[0].properties.Bangladesh * 100)/100);
        var field34 = (Math.floor(e.features[0].properties.China * 100)/100);
        var field35 = (Math.floor(e.features[0].properties.Hong_Kong * 100)/100);
        var field36 = (Math.floor(e.features[0].properties.India * 100)/100);
        var field37 = (Math.floor(e.features[0].properties.Iran * 100)/100);
        var field38 = (Math.floor(e.features[0].properties.Iraq * 100)/100);
        var field39 = (Math.floor(e.features[0].properties.Israel * 100)/100);
        var field40 = (Math.floor(e.features[0].properties.Japan * 100)/100);
        var field41 = (Math.floor(e.features[0].properties.Korea__Sou * 100)/100);
        var field42 = (Math.floor(e.features[0].properties.Lebanon * 100)/100);
        var field43 = (Math.floor(e.features[0].properties.Nepal * 100)/100);
        var field44 = (Math.floor(e.features[0].properties.Pakistan * 100)/100);
        var field45 = (Math.floor(e.features[0].properties.Philippine * 100)/100);
        var field46 = (Math.floor(e.features[0].properties.Saudi_Arab * 100)/100);
        var field47 = (Math.floor(e.features[0].properties.Sri_Lanka * 100)/100);
        var field48 = (Math.floor(e.features[0].properties.Syria * 100)/100);
        var field49 = (Math.floor(e.features[0].properties.Taiwan * 100)/100);
        var field50 = (Math.floor(e.features[0].properties.Turkey * 100)/100);
        var field51 = (Math.floor(e.features[0].properties.United_Ara * 100)/100);
        var field52 = (Math.floor(e.features[0].properties.Viet_Nam * 100)/100);
        var field53 = (Math.floor(e.features[0].properties.Other_pl_3 * 100)/100);
        var field54 = (Math.floor(e.features[0].properties.Australia * 100)/100);
        var field55 = (Math.floor(e.features[0].properties.Other_pl_4 * 100)/100);
        var field56 = (Math.floor(e.features[0].properties.Port_RAF * 100)/100);
        var field57 = (Math.floor(e.features[0].properties.Port_RAM * 100)/100);
        var field58 = (Math.floor(e.features[0].properties.Port_RAS * 100)/100);
        var field59 = (Math.floor(e.features[0].properties.Port_REU * 100)/100);
        var field60 = (Math.floor(e.features[0].properties.Port_ROC * 100)/100);

    //var data = [field1, field2, field3, field4, field5, field6]
       inputFields = [
      { field :"--------America--------", value: -1},
         { field :" Brazil", value: field1, colour : ""},
         { field :" Colombia", value: field2, colour : ""},
         { field :" Cuba", value: field3, colour : ""},
         { field :" Haiti", value: field4, colour : ""},
         { field :" Jamaica", value: field5, colour : ""},
         { field :" Mexico", value: field6, colour : ""},
         { field :" US", value: field7, colour : ""},
         { field :" Venezuela", value: field8, colour : ""},
         { field :"Other American", value: field9, colour : ""},
      { field :"--------Europe--------", value: -1},
         { field :" France", value: field10, colour : ""},
         { field :" Germany", value: field11, colour : ""},
         { field :" Ireland", value: field12, colour : ""},
         { field :" Moldova", value: field13, colour : ""},
         { field :" Romania", value: field14, colour : ""},
         { field :" Russian", value: field15, colour : ""},
         { field :" Ukraine", value: field16, colour : ""},
         { field :" UK", value: field17, colour : ""},
         { field :"Other European", value: field18, colour : ""},
     { field :"--------Africa--------", value: -1},
         { field :" Algeria", value: field19, colour : ""},
         { field :" Cameroon", value: field20, colour : ""},
         { field :" Congo", value: field21, colour : ""},
         { field :" Ivory Coast", value: field22, colour : ""},
         { field :" Egypt", value: field23, colour : ""},
         { field :" Eritrea", value: field24, colour : ""},
         { field :" Ethiopia", value: field25, colour : ""},
         { field :" Morocco", value: field26, colour : ""},
         { field :" Nigeria", value: field27, colour : ""},
         { field :" Somalia", value: field28, colour : ""},
         { field :" South Africa", value: field29, colour : ""},
         { field :" Tunisia", value: field30, colour : ""},
         { field :"Other African", value: field31, colour : ""},
      { field :"--------Asia--------", value: -1},
         { field :" Afghanistan", value: field32, colour : ""},
         { field :" Bangladesh", value: field33, colour : ""},
         { field :" China", value: field34, colour : ""},
         { field :" Hong Kong", value: field35, colour : ""},
         { field :" India", value: field36, colour : ""},
         { field :" Iran", value: field37, colour : ""},
         { field :" Iraq", value: field38, colour : ""},
         { field :" Israel", value: field39, colour : ""},
         { field :" Japan", value: field40, colour : ""},
         { field :" South Korea", value: field41, colour : ""},
         { field :" Lebanon", value: field42, colour : ""},
         { field :" Nepal", value: field43, colour : ""},
         { field :" Pakistan", value: field44, colour : ""},
         { field :" Philippines", value: field45, colour : ""},
         { field :" Saudi Arabia", value: field46, colour : ""},
         { field :" Sri Lanka", value: field47, colour : ""},
         { field :" Syria", value: field48, colour : ""},
         { field :" Taiwan", value: field49, colour : ""},
         { field :" Turkey", value: field50, colour : ""},
         { field :" UAE", value: field51, colour : ""},
         { field :" Viet Nam", value: field52, colour : ""},
         { field :" Other Asian", value: field53, colour : ""},
       { field :"--------Oceania--------", value: -1},
         { field :" Australia", value: field54, colour : ""},
         { field :" Other", value: field55, colour : ""},
       { field :"--------By Continents------", value: -1},
         { field :"Africa", value: field56, colour : ""},
         { field :"America", value: field57, colour : ""},
         { field :"Asia", value: field58, colour : ""},
         { field :"Europe", value: field59, colour : ""},
         { field :"Oceania", value: field60, colour : ""},
      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
        indexo = inputFields.indexOf(inputFields[i])
        if (indexo > 0 && indexo < 10)
        {
          inputFields[indexo].colour = "#BA55D3"
        }
        else if (indexo > 10 && indexo <20 )
        {
          inputFields[indexo].colour = "#40E0D0"
        }
        else if (indexo > 20 && indexo <34 )
        {
          inputFields[indexo].colour = "#C1FFC1"
        }
        else if (indexo > 34 && indexo <57 )
        {
          inputFields[indexo].colour = "#87CEFF"
        }
        else if (indexo > 57 && indexo <60 )
        {
          inputFields[indexo].colour = "#FFB5C5"
        }
        else if (indexo >60)
        {
          var fieldValue = inputFields[indexo].value
          if (fieldValue > 90) {
            inputFields[indexo].colour = "#9e0142";
          }
          else if (fieldValue > 80 && fieldValue<=90)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (fieldValue > 70 && fieldValue<=80) {
            inputFields[indexo].colour = "#f46d43";
          }
          else if (fieldValue > 60 && fieldValue<=70) {
            inputFields[indexo].colour = "#fdae61";
          }
          else if (fieldValue > 50 && fieldValue<=60) {
            inputFields[indexo].colour = "#fee08b";
          }
          else if (fieldValue > 40 && fieldValue<=50) {
            inputFields[indexo].colour = "#e6f598";
          }
          else if (fieldValue > 30 && fieldValue<=40) {
            inputFields[indexo].colour = "#abdda4";
          }
          else if (fieldValue > 20 && fieldValue<=30) {
            inputFields[indexo].colour = "#66c2a5";
          }
          else if (fieldValue > 10 && fieldValue<=20) {
            inputFields[indexo].colour = "#3288bd";
          }
          else if (fieldValue > 0 && fieldValue<=10) {
            inputFields[indexo].colour = "#5e4fa2";
          }
          else {
            inputFields[indexo].colour = "000000";
          }
        }
}
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", indexo * 30);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield =>{
            if (showfield.value == -1){
              scale(0*showfield.value)
            }
            else {
              return 2*scale(showfield.value)
            }
          })
          .attr('y', (showfield, i) => i * 27)
        //  .style("overflow-y","scroll")
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == -1)
            {
              scale(0*showfield.value)
            }
            else {
              return  2*scale(showfield.value)
            }

          })// set length of the bar
          .attr('x',120)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentage
        group
          .append('text')
          .attr('x', 120)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == -1)
            {
              return " ";
            }
            else {
              return showfield.value + "%";
            }
          }
      );

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["Province_Recent_Immigrant"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Province ID:</b><br> " + feature.properties.COL_00 + "<br>" +
                        "<b>Portion of Population From Asia:</b><br> " + feature.properties.Port_RAS + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});

//======================Census Division====================
largeMap.on("mouseenter","CensusDivision_Recent_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusDivision_Recent_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusDivision_Recent_Immigrant", (e) =>
{
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Colombia * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.Cuba * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Haiti * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Jamaica * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Mexico * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.United_Sta * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Venezuela * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.Other_plac * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.France * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.Germany * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.Ireland * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.Moldova * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.Romania * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.Russian_Fe * 100)/100);
        var field16 = (Math.floor(e.features[0].properties.Ukraine * 100)/100);
        var field17 = (Math.floor(e.features[0].properties.United_Kin * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.Other_pl_1 * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.Algeria * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.Cameroon * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.Congo__Dem * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.Côte_d_Iv * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.Egypt * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.Eritrea * 100)/100);
        var field25 = (Math.floor(e.features[0].properties.Ethiopia * 100)/100);
        var field26 = (Math.floor(e.features[0].properties.Morocco * 100)/100);
        var field27 = (Math.floor(e.features[0].properties.Nigeria * 100)/100);
        var field28 = (Math.floor(e.features[0].properties.Somalia * 100)/100);
        var field29 = (Math.floor(e.features[0].properties.South_Afri * 100)/100);
        var field30 = (Math.floor(e.features[0].properties.Tunisia * 100)/100);
        var field31 = (Math.floor(e.features[0].properties.Other_pl_2 * 100)/100);
        var field32 = (Math.floor(e.features[0].properties.Afghanista * 100)/100);
        var field33 = (Math.floor(e.features[0].properties.Bangladesh * 100)/100);
        var field34 = (Math.floor(e.features[0].properties.China * 100)/100);
        var field35 = (Math.floor(e.features[0].properties.Hong_Kong * 100)/100);
        var field36 = (Math.floor(e.features[0].properties.India * 100)/100);
        var field37 = (Math.floor(e.features[0].properties.Iran * 100)/100);
        var field38 = (Math.floor(e.features[0].properties.Iraq * 100)/100);
        var field39 = (Math.floor(e.features[0].properties.Israel * 100)/100);
        var field40 = (Math.floor(e.features[0].properties.Japan * 100)/100);
        var field41 = (Math.floor(e.features[0].properties.Korea__Sou * 100)/100);
        var field42 = (Math.floor(e.features[0].properties.Lebanon * 100)/100);
        var field43 = (Math.floor(e.features[0].properties.Nepal * 100)/100);
        var field44 = (Math.floor(e.features[0].properties.Pakistan * 100)/100);
        var field45 = (Math.floor(e.features[0].properties.Philippine * 100)/100);
        var field46 = (Math.floor(e.features[0].properties.Saudi_Arab * 100)/100);
        var field47 = (Math.floor(e.features[0].properties.Sri_Lanka * 100)/100);
        var field48 = (Math.floor(e.features[0].properties.Syria * 100)/100);
        var field49 = (Math.floor(e.features[0].properties.Taiwan * 100)/100);
        var field50 = (Math.floor(e.features[0].properties.Turkey * 100)/100);
        var field51 = (Math.floor(e.features[0].properties.United_Ara * 100)/100);
        var field52 = (Math.floor(e.features[0].properties.Viet_Nam * 100)/100);
        var field53 = (Math.floor(e.features[0].properties.Other_pl_3 * 100)/100);
        var field54 = (Math.floor(e.features[0].properties.Australia * 100)/100);
        var field55 = (Math.floor(e.features[0].properties.Other_pl_4 * 100)/100);
        var field56 = (Math.floor(e.features[0].properties.Port_RAF * 100)/100);
        var field57 = (Math.floor(e.features[0].properties.Port_RAM * 100)/100);
        var field58 = (Math.floor(e.features[0].properties.Port_RAS * 100)/100);
        var field59 = (Math.floor(e.features[0].properties.Port_REU * 100)/100);
        var field60 = (Math.floor(e.features[0].properties.Port_ROC * 100)/100);

    //var data = [field1, field2, field3, field4, field5, field6]
       inputFields = [
      { field :"--------America--------", value: -1},
         { field :" Brazil", value: field1, colour : ""},
         { field :" Colombia", value: field2, colour : ""},
         { field :" Cuba", value: field3, colour : ""},
         { field :" Haiti", value: field4, colour : ""},
         { field :" Jamaica", value: field5, colour : ""},
         { field :" Mexico", value: field6, colour : ""},
         { field :" US", value: field7, colour : ""},
         { field :" Venezuela", value: field8, colour : ""},
         { field :"Other American", value: field9, colour : ""},
      { field :"--------Europe--------", value: -1},
         { field :" France", value: field10, colour : ""},
         { field :" Germany", value: field11, colour : ""},
         { field :" Ireland", value: field12, colour : ""},
         { field :" Moldova", value: field13, colour : ""},
         { field :" Romania", value: field14, colour : ""},
         { field :" Russian", value: field15, colour : ""},
         { field :" Ukraine", value: field16, colour : ""},
         { field :" UK", value: field17, colour : ""},
         { field :"Other European", value: field18, colour : ""},
     { field :"--------Africa--------", value: -1},
         { field :" Algeria", value: field19, colour : ""},
         { field :" Cameroon", value: field20, colour : ""},
         { field :" Congo", value: field21, colour : ""},
         { field :" Ivory Coast", value: field22, colour : ""},
         { field :" Egypt", value: field23, colour : ""},
         { field :" Eritrea", value: field24, colour : ""},
         { field :" Ethiopia", value: field25, colour : ""},
         { field :" Morocco", value: field26, colour : ""},
         { field :" Nigeria", value: field27, colour : ""},
         { field :" Somalia", value: field28, colour : ""},
         { field :" South Africa", value: field29, colour : ""},
         { field :" Tunisia", value: field30, colour : ""},
         { field :"Other African", value: field31, colour : ""},
      { field :"--------Asia--------", value: -1},
         { field :" Afghanistan", value: field32, colour : ""},
         { field :" Bangladesh", value: field33, colour : ""},
         { field :" China", value: field34, colour : ""},
         { field :" Hong Kong", value: field35, colour : ""},
         { field :" India", value: field36, colour : ""},
         { field :" Iran", value: field37, colour : ""},
         { field :" Iraq", value: field38, colour : ""},
         { field :" Israel", value: field39, colour : ""},
         { field :" Japan", value: field40, colour : ""},
         { field :" South Korea", value: field41, colour : ""},
         { field :" Lebanon", value: field42, colour : ""},
         { field :" Nepal", value: field43, colour : ""},
         { field :" Pakistan", value: field44, colour : ""},
         { field :" Philippines", value: field45, colour : ""},
         { field :" Saudi Arabia", value: field46, colour : ""},
         { field :" Sri Lanka", value: field47, colour : ""},
         { field :" Syria", value: field48, colour : ""},
         { field :" Taiwan", value: field49, colour : ""},
         { field :" Turkey", value: field50, colour : ""},
         { field :" UAE", value: field51, colour : ""},
         { field :" Viet Nam", value: field52, colour : ""},
         { field :" Other Asian", value: field53, colour : ""},
       { field :"--------Oceania--------", value: -1},
         { field :" Australia", value: field54, colour : ""},
         { field :" Other", value: field55, colour : ""},
       { field :"--------By Continents------", value: -1},
         { field :"Africa", value: field56, colour : ""},
         { field :"America", value: field57, colour : ""},
         { field :"Asia", value: field58, colour : ""},
         { field :"Europe", value: field59, colour : ""},
         { field :"Oceania", value: field60, colour : ""}
      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
        console.log(inputFields[i].value)
        indexo = inputFields.indexOf(inputFields[i])
        if (indexo > 0 && indexo < 10)
        {
          inputFields[indexo].colour = "#BA55D3"
        }
        else if (indexo > 10 && indexo <20 )
        {
          inputFields[indexo].colour = "#40E0D0"
        }
        else if (indexo > 20 && indexo <34 )
        {
          inputFields[indexo].colour = "#C1FFC1"
        }
        else if (indexo > 34 && indexo <57 )
        {
          inputFields[indexo].colour = "#87CEFF"
        }
        else if (indexo > 57 && indexo <60 )
        {
          inputFields[indexo].colour = "#FFB5C5"
        }
        else if (indexo >60)
        {
          var fieldValue = inputFields[indexo].value
          if (fieldValue > 90) {
            inputFields[indexo].colour = "#9e0142";
          }
          else if (fieldValue > 80 && fieldValue<=90)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (fieldValue > 70 && fieldValue<=80) {
            inputFields[indexo].colour = "#f46d43";
          }
          else if (fieldValue > 60 && fieldValue<=70) {
            inputFields[indexo].colour = "#fdae61";
          }
          else if (fieldValue > 50 && fieldValue<=60) {
            inputFields[indexo].colour = "#fee08b";
          }
          else if (fieldValue > 40 && fieldValue<=50) {
            inputFields[indexo].colour = "#e6f598";
          }
          else if (fieldValue > 30 && fieldValue<=40) {
            inputFields[indexo].colour = "#abdda4";
          }
          else if (fieldValue > 20 && fieldValue<=30) {
            inputFields[indexo].colour = "#66c2a5";
          }
          else if (fieldValue > 10 && fieldValue<=20) {
            inputFields[indexo].colour = "#3288bd";
          }
          else if (fieldValue > 0 && fieldValue<=10) {
            inputFields[indexo].colour = "#5e4fa2";
          }
          else {
            inputFields[indexo].colour = "000000";
          }
        }
}
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", indexo * 30);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield =>{
            if (showfield.value == -1){
              scale(0*showfield.value)
            }
            else {
              return 2*scale(showfield.value)
            }
          })
          .attr('y', (showfield, i) => i * 27)
        //  .style("overflow-y","scroll")
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == -1)
            {
              scale(0*showfield.value)
            }
            else {
              return  2*scale(showfield.value)
            }

          })// set length of the bar
          .attr('x',120)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentage
        group
          .append('text')
          .attr('x', 120)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == -1)
            {
              return " ";
            }
            else {
              return showfield.value + "%";
            }
          }
      );

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusDivision_Recent_Immigrant"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Census Division ID:</b><br> " + feature.properties.COL_00 + "<br>"+
                        "<b>Portion of Population From Asia:</b><br> " + feature.properties.Port_RAS + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});
//======================Census SubDivision====================
largeMap.on("mouseenter","CensusSubDivision_Recent_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusSubDivision_Recent_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusSubDivision_Recent_Immigrant", (e) =>
{

    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Colombia * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.Cuba * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Haiti * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Jamaica * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Mexico * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.United_Sta * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Venezuela * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.Other_plac * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.France * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.Germany * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.Ireland * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.Moldova * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.Romania * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.Russian_Fe * 100)/100);
        var field16 = (Math.floor(e.features[0].properties.Ukraine * 100)/100);
        var field17 = (Math.floor(e.features[0].properties.United_Kin * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.Other_pl_1 * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.Algeria * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.Cameroon * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.Congo__Dem * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.Côte_d_Iv * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.Egypt * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.Eritrea * 100)/100);
        var field25 = (Math.floor(e.features[0].properties.Ethiopia * 100)/100);
        var field26 = (Math.floor(e.features[0].properties.Morocco * 100)/100);
        var field27 = (Math.floor(e.features[0].properties.Nigeria * 100)/100);
        var field28 = (Math.floor(e.features[0].properties.Somalia * 100)/100);
        var field29 = (Math.floor(e.features[0].properties.South_Afri * 100)/100);
        var field30 = (Math.floor(e.features[0].properties.Tunisia * 100)/100);
        var field31 = (Math.floor(e.features[0].properties.Other_pl_2 * 100)/100);
        var field32 = (Math.floor(e.features[0].properties.Afghanista * 100)/100);
        var field33 = (Math.floor(e.features[0].properties.Bangladesh * 100)/100);
        var field34 = (Math.floor(e.features[0].properties.China * 100)/100);
        var field35 = (Math.floor(e.features[0].properties.Hong_Kong * 100)/100);
        var field36 = (Math.floor(e.features[0].properties.India * 100)/100);
        var field37 = (Math.floor(e.features[0].properties.Iran * 100)/100);
        var field38 = (Math.floor(e.features[0].properties.Iraq * 100)/100);
        var field39 = (Math.floor(e.features[0].properties.Israel * 100)/100);
        var field40 = (Math.floor(e.features[0].properties.Japan * 100)/100);
        var field41 = (Math.floor(e.features[0].properties.Korea__Sou * 100)/100);
        var field42 = (Math.floor(e.features[0].properties.Lebanon * 100)/100);
        var field43 = (Math.floor(e.features[0].properties.Nepal * 100)/100);
        var field44 = (Math.floor(e.features[0].properties.Pakistan * 100)/100);
        var field45 = (Math.floor(e.features[0].properties.Philippine * 100)/100);
        var field46 = (Math.floor(e.features[0].properties.Saudi_Arab * 100)/100);
        var field47 = (Math.floor(e.features[0].properties.Sri_Lanka * 100)/100);
        var field48 = (Math.floor(e.features[0].properties.Syria * 100)/100);
        var field49 = (Math.floor(e.features[0].properties.Taiwan * 100)/100);
        var field50 = (Math.floor(e.features[0].properties.Turkey * 100)/100);
        var field51 = (Math.floor(e.features[0].properties.United_Ara * 100)/100);
        var field52 = (Math.floor(e.features[0].properties.Viet_Nam * 100)/100);
        var field53 = (Math.floor(e.features[0].properties.Other_pl_3 * 100)/100);
        var field54 = (Math.floor(e.features[0].properties.Australia * 100)/100);
        var field55 = (Math.floor(e.features[0].properties.Other_pl_4 * 100)/100);
        var field56 = (Math.floor(e.features[0].properties.Port_RAF * 100)/100);
        var field57 = (Math.floor(e.features[0].properties.Port_RAM * 100)/100);
        var field58 = (Math.floor(e.features[0].properties.Port_RAS * 100)/100);
        var field59 = (Math.floor(e.features[0].properties.Port_REU * 100)/100);
        var field60 = (Math.floor(e.features[0].properties.Port_ROC * 100)/100);

    //var data = [field1, field2, field3, field4, field5, field6]
       inputFields = [
      { field :"--------America--------", value: -1},
         { field :" Brazil", value: field1, colour : ""},
         { field :" Colombia", value: field2, colour : ""},
         { field :" Cuba", value: field3, colour : ""},
         { field :" Haiti", value: field4, colour : ""},
         { field :" Jamaica", value: field5, colour : ""},
         { field :" Mexico", value: field6, colour : ""},
         { field :" US", value: field7, colour : ""},
         { field :" Venezuela", value: field8, colour : ""},
         { field :"Other American", value: field9, colour : ""},
      { field :"--------Europe--------", value: -1},
         { field :" France", value: field10, colour : ""},
         { field :" Germany", value: field11, colour : ""},
         { field :" Ireland", value: field12, colour : ""},
         { field :" Moldova", value: field13, colour : ""},
         { field :" Romania", value: field14, colour : ""},
         { field :" Russian", value: field15, colour : ""},
         { field :" Ukraine", value: field16, colour : ""},
         { field :" UK", value: field17, colour : ""},
         { field :"Other European", value: field18, colour : ""},
     { field :"--------Africa--------", value: -1},
         { field :" Algeria", value: field19, colour : ""},
         { field :" Cameroon", value: field20, colour : ""},
         { field :" Congo", value: field21, colour : ""},
         { field :" Ivory Coast", value: field22, colour : ""},
         { field :" Egypt", value: field23, colour : ""},
         { field :" Eritrea", value: field24, colour : ""},
         { field :" Ethiopia", value: field25, colour : ""},
         { field :" Morocco", value: field26, colour : ""},
         { field :" Nigeria", value: field27, colour : ""},
         { field :" Somalia", value: field28, colour : ""},
         { field :" South Africa", value: field29, colour : ""},
         { field :" Tunisia", value: field30, colour : ""},
         { field :"Other African", value: field31, colour : ""},
      { field :"--------Asia--------", value: -1},
         { field :" Afghanistan", value: field32, colour : ""},
         { field :" Bangladesh", value: field33, colour : ""},
         { field :" China", value: field34, colour : ""},
         { field :" Hong Kong", value: field35, colour : ""},
         { field :" India", value: field36, colour : ""},
         { field :" Iran", value: field37, colour : ""},
         { field :" Iraq", value: field38, colour : ""},
         { field :" Israel", value: field39, colour : ""},
         { field :" Japan", value: field40, colour : ""},
         { field :" South Korea", value: field41, colour : ""},
         { field :" Lebanon", value: field42, colour : ""},
         { field :" Nepal", value: field43, colour : ""},
         { field :" Pakistan", value: field44, colour : ""},
         { field :" Philippines", value: field45, colour : ""},
         { field :" Saudi Arabia", value: field46, colour : ""},
         { field :" Sri Lanka", value: field47, colour : ""},
         { field :" Syria", value: field48, colour : ""},
         { field :" Taiwan", value: field49, colour : ""},
         { field :" Turkey", value: field50, colour : ""},
         { field :" UAE", value: field51, colour : ""},
         { field :" Viet Nam", value: field52, colour : ""},
         { field :" Other Asian", value: field53, colour : ""},
       { field :"--------Oceania--------", value: -1},
         { field :" Australia", value: field54, colour : ""},
         { field :" Other", value: field55, colour : ""},
       { field :"--------By Continents------", value: -1},
         { field :"Africa", value: field56, colour : ""},
         { field :"America", value: field57, colour : ""},
         { field :"Asia", value: field58, colour : ""},
         { field :"Europe", value: field59, colour : ""},
         { field :"Oceania", value: field60, colour : ""}
      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
        console.log(inputFields[i].value)
        indexo = inputFields.indexOf(inputFields[i])
        if (indexo > 0 && indexo < 10)
        {
          inputFields[indexo].colour = "#BA55D3"
        }
        else if (indexo > 10 && indexo <20 )
        {
          inputFields[indexo].colour = "#40E0D0"
        }
        else if (indexo > 20 && indexo <34 )
        {
          inputFields[indexo].colour = "#C1FFC1"
        }
        else if (indexo > 34 && indexo <57 )
        {
          inputFields[indexo].colour = "#87CEFF"
        }
        else if (indexo > 57 && indexo <60 )
        {
          inputFields[indexo].colour = "#FFB5C5"
        }
        else if (indexo >60)
        {
          var fieldValue = inputFields[indexo].value
          if (fieldValue > 90) {
            inputFields[indexo].colour = "#9e0142";
          }
          else if (fieldValue > 80 && fieldValue<=90)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (fieldValue > 70 && fieldValue<=80) {
            inputFields[indexo].colour = "#f46d43";
          }
          else if (fieldValue > 60 && fieldValue<=70) {
            inputFields[indexo].colour = "#fdae61";
          }
          else if (fieldValue > 50 && fieldValue<=60) {
            inputFields[indexo].colour = "#fee08b";
          }
          else if (fieldValue > 40 && fieldValue<=50) {
            inputFields[indexo].colour = "#e6f598";
          }
          else if (fieldValue > 30 && fieldValue<=40) {
            inputFields[indexo].colour = "#abdda4";
          }
          else if (fieldValue > 20 && fieldValue<=30) {
            inputFields[indexo].colour = "#66c2a5";
          }
          else if (fieldValue > 10 && fieldValue<=20) {
            inputFields[indexo].colour = "#3288bd";
          }
          else if (fieldValue > 0 && fieldValue<=10) {
            inputFields[indexo].colour = "#5e4fa2";
          }
          else {
            inputFields[indexo].colour = "000000";
          }
        }
}
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", indexo * 30);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield =>{
            if (showfield.value == -1){
              scale(0*showfield.value)
            }
            else {
              return 2*scale(showfield.value)
            }
          })
          .attr('y', (showfield, i) => i * 27)
        //  .style("overflow-y","scroll")
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == -1)
            {
              scale(0*showfield.value)
            }
            else {
              return  2*scale(showfield.value)
            }

          })// set length of the bar
          .attr('x',120)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentage
        group
          .append('text')
          .attr('x', 120)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == -1)
            {
              return " ";
            }
            else {
              return showfield.value + "%";
            }
          }
      );

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusSubDivision_Recent_Immigrant"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Census Sub-Division ID:</b><br> " + feature.properties.COL_00 + "<br>"+
                        "<b>Portion of Population From Asia:</b><br> " + feature.properties.Port_RAS + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});

//====================== ================ ====================
//====================== =Past Immigrant=  ====================

//======================Province====================
largeMap.on("mouseenter","Province_Past_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","Province_Past_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "Province_Past_Immigrant", (e) =>{
  // Turn on small map
  var worldField = e.features[0].properties.PRUID;
  var smallMap = new mapboxgl.Map({
    container: "small",  //container id in HTML
    style: "mapbox://styles/dlm589/ck86oxm1z0g3l1ikareawpiyj",  //stylesheet location
    center: [8,45],  // specify where the starting point is, longitude/latitude43° 39" 3.8520"" N and 79° 20" 49.2540"
    zoom: -0.3 // starting zoom level
  });
  smallMap.on("load", function() // this is to make sure the label is in front of all layers
  {
    var layers = smallMap.getStyle().layers;
    var layersLabel;
    for (var i = 0; i < layers.length; i++)
    {
      if (layers[i].type === "symbol" && layers[i].layout["text-field"])
      {
        layersLabel = layers[i].id;
        break;
      }
    }

    smallMap.addSource("World_PastImmigrants_source",{
        "type" : "vector",
        "url" : "mapbox://dlm589.6s0pmipb",
      });
    // addProvince Province_Recent_Immigrant
    smallMap.addLayer({
      "id": "Province_Past_Immigrant",
      "type": "fill",
      "source" : "World_PastImmigrants_source",
      "source-layer": "World_Past_Province-8ntqz3",
      "layout" : {},
      "paint" :
      {
        "fill-color": ["interpolate",["linear"],["get", "F"+ worldField],
          0,"#C0C0C0", 0.001, "#000000",
          0.003, "#5e4fa2", 0.005, "#3288bd",
          0.01, "#66c2a5", 0.015, "#abdda4",
          0.02, "#e6f598", 0.03, "#fee08b",
          0.1, "#fdae61", 0.4, "#f46d43",
          1, "#9e0142"
        ],"fill-outline-color": "#000000"}

      }, layersLabel);
      });
    //=============================================================================
    //=========================== Back to big map =================================

      // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {

        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Colombia * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.El_Salvado * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Guyana * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Haiti * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Jamaica * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.Mexico * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Peru * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.Trinidad_a * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.United_Sta * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.Other_plac * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.Bosnia_and * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.Croatia * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.France * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.Germany * 100)/100);
        var field16 = (Math.floor(e.features[0].properties.Greece * 100)/100);
        var field17 = (Math.floor(e.features[0].properties.Hungary * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.Ireland * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.Italy * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.Netherland * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.Poland * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.Portugal * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.Romania * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.Russian_Fe * 100)/100);
        var field25 = (Math.floor(e.features[0].properties.Serbia * 100)/100);
        var field26 = (Math.floor(e.features[0].properties.Ukraine * 100)/100);
        var field27 = (Math.floor(e.features[0].properties.United_Kin * 100)/100);
        var field28 = (Math.floor(e.features[0].properties.Other_pl_1 * 100)/100);
        var field29 = (Math.floor(e.features[0].properties.Algeria * 100)/100);
        var field30 = (Math.floor(e.features[0].properties.Egypt * 100)/100);
        var field31 = (Math.floor(e.features[0].properties.Ethiopia * 100)/100);
        var field32 = (Math.floor(e.features[0].properties.Kenya * 100)/100);
        var field33 = (Math.floor(e.features[0].properties.Morocco * 100)/100);
        var field34 = (Math.floor(e.features[0].properties.Nigeria * 100)/100);
        var field35 = (Math.floor(e.features[0].properties.Somalia * 100)/100);
        var field36 = (Math.floor(e.features[0].properties.South_Afri * 100)/100);
        var field37 = (Math.floor(e.features[0].properties.Other_pl_2 * 100)/100);
        var field38 = (Math.floor(e.features[0].properties.Afghanista * 100)/100);
        var field39 = (Math.floor(e.features[0].properties.Bangladesh * 100)/100);
        var field40 = (Math.floor(e.features[0].properties.China * 100)/100);
        var field41 = (Math.floor(e.features[0].properties.Hong_Kong * 100)/100);
        var field42 = (Math.floor(e.features[0].properties.India * 100)/100);
        var field43 = (Math.floor(e.features[0].properties.Iran * 100)/100);
        var field44 = (Math.floor(e.features[0].properties.Iraq * 100)/100);
        var field45 = (Math.floor(e.features[0].properties.Japan * 100)/100);
        var field46 = (Math.floor(e.features[0].properties.Korea__Sou * 100)/100);
        var field47 = (Math.floor(e.features[0].properties.Lebanon * 100)/100);
        var field48 = (Math.floor(e.features[0].properties.Pakistan * 100)/100);
        var field49 = (Math.floor(e.features[0].properties.Philippine * 100)/100);
        var field50 = (Math.floor(e.features[0].properties.Sri_Lanka * 100)/100);
        var field51 = (Math.floor(e.features[0].properties.Syria * 100)/100);
        var field52 = (Math.floor(e.features[0].properties.Taiwan * 100)/100);
        var field53 = (Math.floor(e.features[0].properties.Viet_Nam * 100)/100);
        var field54 = (Math.floor(e.features[0].properties.Other_pl_3 * 100)/100);
        var field55 = (Math.floor(e.features[0].properties.Port_AM * 100)/100);
        var field56 = (Math.floor(e.features[0].properties.Port_EU * 100)/100);
        var field57 = (Math.floor(e.features[0].properties.Port_AF * 100)/100);
        var field58 = (Math.floor(e.features[0].properties.Port_AS * 100)/100);
        var field59 = (Math.floor(e.features[0].properties.Port_OC * 100)/100);

        inputFields = [
      { field :"--------America--------", value: -1},
        { field :" Brazil", value: field1, colour : ""},
        { field :" Colombia", value: field2, colour : ""},
        { field :" El Salvador", value: field3, colour : ""},
        { field :" Guyana", value: field4, colour : ""},
        { field :" Haiti", value: field5, colour : ""},
        { field :" Jamaica", value: field6, colour : ""},
        { field :" Mexico", value: field7, colour : ""},
        { field :" Peru", value: field8, colour : ""},
        { field :" Trinidad... (TT)", value: field9, colour : ""},
        { field :" USA", value: field10, colour : ""},
        { field :"Other American", value: field11, colour : ""},
      { field :"--------Europe--------", value: -1},
        { field :" Bosnia...(BIH)", value: field12, colour : ""},
        { field :" Croatia", value: field13, colour : ""},
        { field :" France", value: field14, colour : ""},
        { field :" Germany", value: field15, colour : ""},
        { field :" Greece", value: field16, colour : ""},
        { field :" Hungary", value: field17, colour : ""},
        { field :" Ireland", value: field18, colour : ""},
        { field :" Italy", value: field19, colour : ""},
        { field :" Netherlands", value: field20, colour : ""},
        { field :" Poland", value: field21, colour : ""},
        { field :" Portugal", value: field22, colour : ""},
        { field :" Romania", value: field23, colour : ""},
        { field :" Russia", value: field24, colour : ""},
        { field :" Serbia", value: field25, colour : ""},
        { field :" Ukraine", value: field26, colour : ""},
        { field :"UK", value: field27, colour : ""},
        { field :"Other European", value: field28, colour : ""},
    { field :"--------Africa--------", value: -1},
        { field :" Algeria", value: field29, colour : ""},
        { field :" Egypt", value: field30, colour : ""},
        { field :" Ethiopia", value: field31, colour : ""},
        { field :" Kenya", value: field32, colour : ""},
        { field :" Morocco", value: field33, colour : ""},
        { field :" Nigeria", value: field34, colour : ""},
        { field :" Somalia", value: field35, colour : ""},
        { field :"South Africa", value: field36, colour : ""},
        { field :"Other African", value: field37, colour : ""},
    { field :"--------Asia--------", value: -1},
        { field :" Afghanistan", value: field38, colour : ""},
        { field :" Bangladesh", value: field39, colour : ""},
        { field :" China", value: field40, colour : ""},
        { field :" Hong Kong", value: field41, colour : ""},
        { field :" India", value: field42, colour : ""},
        { field :" Iran", value: field43, colour : ""},
        { field :" Iraq", value: field44, colour : ""},
        { field :" Japan", value: field45, colour : ""},
        { field :"South Korea", value: field46, colour : ""},
        { field :" Lebanon", value: field47, colour : ""},
        { field :" Pakistan", value: field48, colour : ""},
        { field :" Philippines", value: field49, colour : ""},
        { field :" Sri Lanka", value: field50, colour : ""},
        { field :" Syria", value: field51, colour : ""},
        { field :" Taiwan", value: field52, colour : ""},
        { field :" Viet Nam", value: field53, colour : ""},
        { field :"Other Asian", value: field54, colour : ""},
      { field :"--------By Continents------", value: -1},
         { field :"Africa", value: field55, colour : ""},
         { field :"America", value: field56, colour : ""},
         { field :"Asia", value: field57, colour : ""},
         { field :"Europe", value: field58, colour : ""},
         { field :"Oceania", value: field59, colour : ""}
      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          if (indexo > 0 && indexo < 12)
          {
            inputFields[indexo].colour = "#BA55D3"
          }
          else if (indexo > 12 && indexo <30 )
          {
            inputFields[indexo].colour = "#40E0D0"
          }
          else if (indexo > 30 && indexo <40 )
          {
            inputFields[indexo].colour = "#C1FFC1"
          }
          else if (indexo > 40 && indexo <58 )
          {
            inputFields[indexo].colour = "#87CEFF"
          }
          else if (indexo >58)
          {
            var fieldValue = inputFields[indexo].value
            if (fieldValue > 90) {
              inputFields[indexo].colour = "#9e0142";
            }
            else if (fieldValue > 80 && fieldValue<=90)
            {
              inputFields[indexo].colour = "#d53e4f";
            }
            else if (fieldValue > 70 && fieldValue<=80) {
              inputFields[indexo].colour = "#f46d43";
            }
            else if (fieldValue > 60 && fieldValue<=70) {
              inputFields[indexo].colour = "#fdae61";
            }
            else if (fieldValue > 50 && fieldValue<=60) {
              inputFields[indexo].colour = "#fee08b";
            }
            else if (fieldValue > 40 && fieldValue<=50) {
              inputFields[indexo].colour = "#e6f598";
            }
            else if (fieldValue > 30 && fieldValue<=40) {
              inputFields[indexo].colour = "#abdda4";
            }
            else if (fieldValue > 20 && fieldValue<=30) {
              inputFields[indexo].colour = "#66c2a5";
            }
            else if (fieldValue > 10 && fieldValue<=20) {
              inputFields[indexo].colour = "#3288bd";
            }
            else if (fieldValue > 0 && fieldValue<=10) {
              inputFields[indexo].colour = "#5e4fa2";
            }
            else {
              inputFields[indexo].colour = "000000";
            }
          }
      }
      // Set SVG height and width
      var chart = d3
        .select('.chart')
        .append('svg')
        .style("overflow-y","scroll")
        .style("text-align","left")
        .attr("height", indexo * 30);
      //.attr('height', 1000);
      var group = chart
        .selectAll('g')
        .style("text-align","left")
        .data(inputFields)
        .enter()
        .append('g');
      // Set Stretch scale
      var scale = d3
        .scaleLinear()
        .domain([0, 120])
        .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
      group
        .append('rect')
        .attr('width', 0)// set length of the bar
        .attr('height', 27 - 3)//where to start drawing the bars (at __px)
        .attr('x', showfield =>
        {
          if (showfield.value == -1)
          {
            scale(0*showfield.value)
          }
          else {
            return 2*scale(100-showfield.value)
          }
        })
        .attr('y', (showfield, i) => i * 27)
        .transition()
        .duration(1000)
        .attr('width', showfield => {
          if (showfield.value == -1)
          {
            scale(0*showfield.value)
          }
          else {
            return  4*scale(showfield.value)
          }
        })
        // set length of the bar
        .attr('x',120)
        .style('opacity', 0.8)
        .attr("fill", showfield => showfield.colour)
      //show field name
      group
        .append('text')
        .attr('x', 10) //set the x coordinate of the field names text
        .attr('y', (showfield, i) => i * 27 + 18)
        .style('fill', 'black')
        .style('font-size', '14px')
        .style('opacity', 0.5)
        .style('font-weight', 'bold')
        .text(showfield => showfield.field);
      //show percentage
      group
        .append('text')
        .attr('x', 120)
        .attr('y', (showfield, i) => i * 27 + 18)
        .attr('text-anchor', 'start')
        .style('fill', 'black')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .text(showfield =>
          {
            if (showfield.value == -1)
          {
            return " ";
          }
          else {
            return showfield.value + "%";
          }
      });

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["Province_Past_Immigrant"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Province ID:</b><br> " + feature.properties.COL_00 + "<br>" +
                        "<b>Portion of Population From Asia:</b><br> " + feature.properties.Port_AS + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});
//======================Census Division====================
largeMap.on("mouseenter","CensusDivision_Past_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusDivision_Past_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusDivision_Past_Immigrant", (e) =>{

      // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {

        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Colombia * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.El_Salvado * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Guyana * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Haiti * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Jamaica * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.Mexico * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Peru * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.Trinidad_a * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.United_Sta * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.Other_plac * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.Bosnia_and * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.Croatia * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.France * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.Germany * 100)/100);
        var field16 = (Math.floor(e.features[0].properties.Greece * 100)/100);
        var field17 = (Math.floor(e.features[0].properties.Hungary * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.Ireland * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.Italy * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.Netherland * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.Poland * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.Portugal * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.Romania * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.Russian_Fe * 100)/100);
        var field25 = (Math.floor(e.features[0].properties.Serbia * 100)/100);
        var field26 = (Math.floor(e.features[0].properties.Ukraine * 100)/100);
        var field27 = (Math.floor(e.features[0].properties.United_Kin * 100)/100);
        var field28 = (Math.floor(e.features[0].properties.Other_pl_1 * 100)/100);
        var field29 = (Math.floor(e.features[0].properties.Algeria * 100)/100);
        var field30 = (Math.floor(e.features[0].properties.Egypt * 100)/100);
        var field31 = (Math.floor(e.features[0].properties.Ethiopia * 100)/100);
        var field32 = (Math.floor(e.features[0].properties.Kenya * 100)/100);
        var field33 = (Math.floor(e.features[0].properties.Morocco * 100)/100);
        var field34 = (Math.floor(e.features[0].properties.Nigeria * 100)/100);
        var field35 = (Math.floor(e.features[0].properties.Somalia * 100)/100);
        var field36 = (Math.floor(e.features[0].properties.South_Afri * 100)/100);
        var field37 = (Math.floor(e.features[0].properties.Other_pl_2 * 100)/100);
        var field38 = (Math.floor(e.features[0].properties.Afghanista * 100)/100);
        var field39 = (Math.floor(e.features[0].properties.Bangladesh * 100)/100);
        var field40 = (Math.floor(e.features[0].properties.China * 100)/100);
        var field41 = (Math.floor(e.features[0].properties.Hong_Kong * 100)/100);
        var field42 = (Math.floor(e.features[0].properties.India * 100)/100);
        var field43 = (Math.floor(e.features[0].properties.Iran * 100)/100);
        var field44 = (Math.floor(e.features[0].properties.Iraq * 100)/100);
        var field45 = (Math.floor(e.features[0].properties.Japan * 100)/100);
        var field46 = (Math.floor(e.features[0].properties.Korea__Sou * 100)/100);
        var field47 = (Math.floor(e.features[0].properties.Lebanon * 100)/100);
        var field48 = (Math.floor(e.features[0].properties.Pakistan * 100)/100);
        var field49 = (Math.floor(e.features[0].properties.Philippine * 100)/100);
        var field50 = (Math.floor(e.features[0].properties.Sri_Lanka * 100)/100);
        var field51 = (Math.floor(e.features[0].properties.Syria * 100)/100);
        var field52 = (Math.floor(e.features[0].properties.Taiwan * 100)/100);
        var field53 = (Math.floor(e.features[0].properties.Viet_Nam * 100)/100);
        var field54 = (Math.floor(e.features[0].properties.Other_pl_3 * 100)/100);
        var field55 = (Math.floor(e.features[0].properties.Port_AM * 100)/100);
        var field56 = (Math.floor(e.features[0].properties.Port_EU * 100)/100);
        var field57 = (Math.floor(e.features[0].properties.Port_AF * 100)/100);
        var field58 = (Math.floor(e.features[0].properties.Port_AS * 100)/100);
        var field59 = (Math.floor(e.features[0].properties.Port_OC * 100)/100);

        inputFields = [
      { field :"--------America--------", value: -1},
        { field :" Brazil", value: field1, colour : ""},
        { field :" Colombia", value: field2, colour : ""},
        { field :" El Salvador", value: field3, colour : ""},
        { field :" Guyana", value: field4, colour : ""},
        { field :" Haiti", value: field5, colour : ""},
        { field :" Jamaica", value: field6, colour : ""},
        { field :" Mexico", value: field7, colour : ""},
        { field :" Peru", value: field8, colour : ""},
        { field :" Trinidad... (TT)", value: field9, colour : ""},
        { field :" USA", value: field10, colour : ""},
        { field :"Other American", value: field11, colour : ""},
      { field :"--------Europe--------", value: -1},
        { field :" Bosnia...(BIH)", value: field12, colour : ""},
        { field :" Croatia", value: field13, colour : ""},
        { field :" France", value: field14, colour : ""},
        { field :" Germany", value: field15, colour : ""},
        { field :" Greece", value: field16, colour : ""},
        { field :" Hungary", value: field17, colour : ""},
        { field :" Ireland", value: field18, colour : ""},
        { field :" Italy", value: field19, colour : ""},
        { field :" Netherlands", value: field20, colour : ""},
        { field :" Poland", value: field21, colour : ""},
        { field :" Portugal", value: field22, colour : ""},
        { field :" Romania", value: field23, colour : ""},
        { field :" Russia", value: field24, colour : ""},
        { field :" Serbia", value: field25, colour : ""},
        { field :" Ukraine", value: field26, colour : ""},
        { field :"UK", value: field27, colour : ""},
        { field :"Other European", value: field28, colour : ""},
    { field :"--------Africa--------", value: -1},
        { field :" Algeria", value: field29, colour : ""},
        { field :" Egypt", value: field30, colour : ""},
        { field :" Ethiopia", value: field31, colour : ""},
        { field :" Kenya", value: field32, colour : ""},
        { field :" Morocco", value: field33, colour : ""},
        { field :" Nigeria", value: field34, colour : ""},
        { field :" Somalia", value: field35, colour : ""},
        { field :"South Africa", value: field36, colour : ""},
        { field :"Other African", value: field37, colour : ""},
    { field :"--------Asia--------", value: -1},
        { field :" Afghanistan", value: field38, colour : ""},
        { field :" Bangladesh", value: field39, colour : ""},
        { field :" China", value: field40, colour : ""},
        { field :" Hong Kong", value: field41, colour : ""},
        { field :" India", value: field42, colour : ""},
        { field :" Iran", value: field43, colour : ""},
        { field :" Iraq", value: field44, colour : ""},
        { field :" Japan", value: field45, colour : ""},
        { field :"South Korea", value: field46, colour : ""},
        { field :" Lebanon", value: field47, colour : ""},
        { field :" Pakistan", value: field48, colour : ""},
        { field :" Philippines", value: field49, colour : ""},
        { field :" Sri Lanka", value: field50, colour : ""},
        { field :" Syria", value: field51, colour : ""},
        { field :" Taiwan", value: field52, colour : ""},
        { field :" Viet Nam", value: field53, colour : ""},
        { field :"Other Asian", value: field54, colour : ""},
      { field :"--------By Continents------", value: -1},
         { field :"Africa", value: field55, colour : ""},
         { field :"America", value: field56, colour : ""},
         { field :"Asia", value: field57, colour : ""},
         { field :"Europe", value: field58, colour : ""},
         { field :"Oceania", value: field59, colour : ""}
      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          if (indexo > 0 && indexo < 12)
          {
            inputFields[indexo].colour = "#BA55D3"
          }
          else if (indexo > 12 && indexo <30 )
          {
            inputFields[indexo].colour = "#40E0D0"
          }
          else if (indexo > 30 && indexo <40 )
          {
            inputFields[indexo].colour = "#C1FFC1"
          }
          else if (indexo > 40 && indexo <58 )
          {
            inputFields[indexo].colour = "#87CEFF"
          }
          else if (indexo >58)
          {
            var fieldValue = inputFields[indexo].value
            if (fieldValue > 90) {
              inputFields[indexo].colour = "#9e0142";
            }
            else if (fieldValue > 80 && fieldValue<=90)
            {
              inputFields[indexo].colour = "#d53e4f";
            }
            else if (fieldValue > 70 && fieldValue<=80) {
              inputFields[indexo].colour = "#f46d43";
            }
            else if (fieldValue > 60 && fieldValue<=70) {
              inputFields[indexo].colour = "#fdae61";
            }
            else if (fieldValue > 50 && fieldValue<=60) {
              inputFields[indexo].colour = "#fee08b";
            }
            else if (fieldValue > 40 && fieldValue<=50) {
              inputFields[indexo].colour = "#e6f598";
            }
            else if (fieldValue > 30 && fieldValue<=40) {
              inputFields[indexo].colour = "#abdda4";
            }
            else if (fieldValue > 20 && fieldValue<=30) {
              inputFields[indexo].colour = "#66c2a5";
            }
            else if (fieldValue > 10 && fieldValue<=20) {
              inputFields[indexo].colour = "#3288bd";
            }
            else if (fieldValue > 0 && fieldValue<=10) {
              inputFields[indexo].colour = "#5e4fa2";
            }
            else {
              inputFields[indexo].colour = "000000";
            }
          }
      }
      // Set SVG height and width
      var chart = d3
        .select('.chart')
        .append('svg')
        .style("overflow-y","scroll")
        .style("text-align","left")
        .attr("height", indexo * 30);
      //.attr('height', 1000);
      var group = chart
        .selectAll('g')
        .style("text-align","left")
        .data(inputFields)
        .enter()
        .append('g');
      // Set Stretch scale
      var scale = d3
        .scaleLinear()
        .domain([0, 120])
        .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
      group
        .append('rect')
        .attr('width', 0)// set length of the bar
        .attr('height', 27 - 3)//where to start drawing the bars (at __px)
        .attr('x', showfield =>
        {
          if (showfield.value == -1)
          {
            scale(0*showfield.value)
          }
          else {
            return 2*scale(100-showfield.value)
          }
        })
        .attr('y', (showfield, i) => i * 27)
        .transition()
        .duration(1000)
        .attr('width', showfield => {
          if (showfield.value == -1)
          {
            scale(0*showfield.value)
          }
          else {
            return  4*scale(showfield.value)
          }
        })
        // set length of the bar
        .attr('x',120)
        .style('opacity', 0.8)
        .attr("fill", showfield => showfield.colour)
      //show field name
      group
        .append('text')
        .attr('x', 10) //set the x coordinate of the field names text
        .attr('y', (showfield, i) => i * 27 + 18)
        .style('fill', 'black')
        .style('font-size', '14px')
        .style('opacity', 0.5)
        .style('font-weight', 'bold')
        .text(showfield => showfield.field);
      //show percentage
      group
        .append('text')
        .attr('x', 120)
        .attr('y', (showfield, i) => i * 27 + 18)
        .attr('text-anchor', 'start')
        .style('fill', 'black')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .text(showfield =>
          {
            if (showfield.value == -1)
          {
            return " ";
          }
          else {
            return showfield.value + "%";
          }
      });

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusDivision_Past_Immigrant"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Census Division ID:</b><br> " + feature.properties.COL_00 + "<br>" +
                        "<b>Portion of Population From Asia:</b><br> " + feature.properties.Port_AS + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});
//======================Census SubDivision====================
largeMap.on("mouseenter","CensusSubDivision_Past_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusSubDivision_Past_Immigrant",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusSubDivision_Past_Immigrant", (e) =>{

    //=============================================================================
    //=========================== Back to big map =================================

      // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {

        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Brazil * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Colombia * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.El_Salvado * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Guyana * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Haiti * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Jamaica * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.Mexico * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Peru * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.Trinidad_a * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.United_Sta * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.Other_plac * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.Bosnia_and * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.Croatia * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.France * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.Germany * 100)/100);
        var field16 = (Math.floor(e.features[0].properties.Greece * 100)/100);
        var field17 = (Math.floor(e.features[0].properties.Hungary * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.Ireland * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.Italy * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.Netherland * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.Poland * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.Portugal * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.Romania * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.Russian_Fe * 100)/100);
        var field25 = (Math.floor(e.features[0].properties.Serbia * 100)/100);
        var field26 = (Math.floor(e.features[0].properties.Ukraine * 100)/100);
        var field27 = (Math.floor(e.features[0].properties.United_Kin * 100)/100);
        var field28 = (Math.floor(e.features[0].properties.Other_pl_1 * 100)/100);
        var field29 = (Math.floor(e.features[0].properties.Algeria * 100)/100);
        var field30 = (Math.floor(e.features[0].properties.Egypt * 100)/100);
        var field31 = (Math.floor(e.features[0].properties.Ethiopia * 100)/100);
        var field32 = (Math.floor(e.features[0].properties.Kenya * 100)/100);
        var field33 = (Math.floor(e.features[0].properties.Morocco * 100)/100);
        var field34 = (Math.floor(e.features[0].properties.Nigeria * 100)/100);
        var field35 = (Math.floor(e.features[0].properties.Somalia * 100)/100);
        var field36 = (Math.floor(e.features[0].properties.South_Afri * 100)/100);
        var field37 = (Math.floor(e.features[0].properties.Other_pl_2 * 100)/100);
        var field38 = (Math.floor(e.features[0].properties.Afghanista * 100)/100);
        var field39 = (Math.floor(e.features[0].properties.Bangladesh * 100)/100);
        var field40 = (Math.floor(e.features[0].properties.China * 100)/100);
        var field41 = (Math.floor(e.features[0].properties.Hong_Kong * 100)/100);
        var field42 = (Math.floor(e.features[0].properties.India * 100)/100);
        var field43 = (Math.floor(e.features[0].properties.Iran * 100)/100);
        var field44 = (Math.floor(e.features[0].properties.Iraq * 100)/100);
        var field45 = (Math.floor(e.features[0].properties.Japan * 100)/100);
        var field46 = (Math.floor(e.features[0].properties.Korea__Sou * 100)/100);
        var field47 = (Math.floor(e.features[0].properties.Lebanon * 100)/100);
        var field48 = (Math.floor(e.features[0].properties.Pakistan * 100)/100);
        var field49 = (Math.floor(e.features[0].properties.Philippine * 100)/100);
        var field50 = (Math.floor(e.features[0].properties.Sri_Lanka * 100)/100);
        var field51 = (Math.floor(e.features[0].properties.Syria * 100)/100);
        var field52 = (Math.floor(e.features[0].properties.Taiwan * 100)/100);
        var field53 = (Math.floor(e.features[0].properties.Viet_Nam * 100)/100);
        var field54 = (Math.floor(e.features[0].properties.Other_pl_3 * 100)/100);
        var field55 = (Math.floor(e.features[0].properties.Port_AM * 100)/100);
        var field56 = (Math.floor(e.features[0].properties.Port_EU * 100)/100);
        var field57 = (Math.floor(e.features[0].properties.Port_AF * 100)/100);
        var field58 = (Math.floor(e.features[0].properties.Port_AS * 100)/100);
        var field59 = (Math.floor(e.features[0].properties.Port_OC * 100)/100);

        inputFields = [
      { field :"--------America--------", value: -1},
        { field :" Brazil", value: field1, colour : ""},
        { field :" Colombia", value: field2, colour : ""},
        { field :" El Salvador", value: field3, colour : ""},
        { field :" Guyana", value: field4, colour : ""},
        { field :" Haiti", value: field5, colour : ""},
        { field :" Jamaica", value: field6, colour : ""},
        { field :" Mexico", value: field7, colour : ""},
        { field :" Peru", value: field8, colour : ""},
        { field :" Trinidad... (TT)", value: field9, colour : ""},
        { field :" USA", value: field10, colour : ""},
        { field :"Other American", value: field11, colour : ""},
      { field :"--------Europe--------", value: -1},
        { field :" Bosnia...(BIH)", value: field12, colour : ""},
        { field :" Croatia", value: field13, colour : ""},
        { field :" France", value: field14, colour : ""},
        { field :" Germany", value: field15, colour : ""},
        { field :" Greece", value: field16, colour : ""},
        { field :" Hungary", value: field17, colour : ""},
        { field :" Ireland", value: field18, colour : ""},
        { field :" Italy", value: field19, colour : ""},
        { field :" Netherlands", value: field20, colour : ""},
        { field :" Poland", value: field21, colour : ""},
        { field :" Portugal", value: field22, colour : ""},
        { field :" Romania", value: field23, colour : ""},
        { field :" Russia", value: field24, colour : ""},
        { field :" Serbia", value: field25, colour : ""},
        { field :" Ukraine", value: field26, colour : ""},
        { field :"UK", value: field27, colour : ""},
        { field :"Other European", value: field28, colour : ""},
    { field :"--------Africa--------", value: -1},
        { field :" Algeria", value: field29, colour : ""},
        { field :" Egypt", value: field30, colour : ""},
        { field :" Ethiopia", value: field31, colour : ""},
        { field :" Kenya", value: field32, colour : ""},
        { field :" Morocco", value: field33, colour : ""},
        { field :" Nigeria", value: field34, colour : ""},
        { field :" Somalia", value: field35, colour : ""},
        { field :"South Africa", value: field36, colour : ""},
        { field :"Other African", value: field37, colour : ""},
    { field :"--------Asia--------", value: -1},
        { field :" Afghanistan", value: field38, colour : ""},
        { field :" Bangladesh", value: field39, colour : ""},
        { field :" China", value: field40, colour : ""},
        { field :" Hong Kong", value: field41, colour : ""},
        { field :" India", value: field42, colour : ""},
        { field :" Iran", value: field43, colour : ""},
        { field :" Iraq", value: field44, colour : ""},
        { field :" Japan", value: field45, colour : ""},
        { field :"South Korea", value: field46, colour : ""},
        { field :" Lebanon", value: field47, colour : ""},
        { field :" Pakistan", value: field48, colour : ""},
        { field :" Philippines", value: field49, colour : ""},
        { field :" Sri Lanka", value: field50, colour : ""},
        { field :" Syria", value: field51, colour : ""},
        { field :" Taiwan", value: field52, colour : ""},
        { field :" Viet Nam", value: field53, colour : ""},
        { field :"Other Asian", value: field54, colour : ""},
      { field :"--------By Continents------", value: -1},
         { field :"Africa", value: field55, colour : ""},
         { field :"America", value: field56, colour : ""},
         { field :"Asia", value: field57, colour : ""},
         { field :"Europe", value: field58, colour : ""},
         { field :"Oceania", value: field59, colour : ""}
      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          if (indexo > 0 && indexo < 12)
          {
            inputFields[indexo].colour = "#BA55D3"
          }
          else if (indexo > 12 && indexo <30 )
          {
            inputFields[indexo].colour = "#40E0D0"
          }
          else if (indexo > 30 && indexo <40 )
          {
            inputFields[indexo].colour = "#C1FFC1"
          }
          else if (indexo > 40 && indexo <58 )
          {
            inputFields[indexo].colour = "#87CEFF"
          }
          else if (indexo >58)
          {
            var fieldValue = inputFields[indexo].value
            if (fieldValue > 90) {
              inputFields[indexo].colour = "#9e0142";
            }
            else if (fieldValue > 80 && fieldValue<=90)
            {
              inputFields[indexo].colour = "#d53e4f";
            }
            else if (fieldValue > 70 && fieldValue<=80) {
              inputFields[indexo].colour = "#f46d43";
            }
            else if (fieldValue > 60 && fieldValue<=70) {
              inputFields[indexo].colour = "#fdae61";
            }
            else if (fieldValue > 50 && fieldValue<=60) {
              inputFields[indexo].colour = "#fee08b";
            }
            else if (fieldValue > 40 && fieldValue<=50) {
              inputFields[indexo].colour = "#e6f598";
            }
            else if (fieldValue > 30 && fieldValue<=40) {
              inputFields[indexo].colour = "#abdda4";
            }
            else if (fieldValue > 20 && fieldValue<=30) {
              inputFields[indexo].colour = "#66c2a5";
            }
            else if (fieldValue > 10 && fieldValue<=20) {
              inputFields[indexo].colour = "#3288bd";
            }
            else if (fieldValue > 0 && fieldValue<=10) {
              inputFields[indexo].colour = "#5e4fa2";
            }
            else {
              inputFields[indexo].colour = "000000";
            }
          }
      }
      // Set SVG height and width
      var chart = d3
        .select('.chart')
        .append('svg')
        .style("overflow-y","scroll")
        .style("text-align","left")
        .attr("height", indexo * 30);
      //.attr('height', 1000);
      var group = chart
        .selectAll('g')
        .style("text-align","left")
        .data(inputFields)
        .enter()
        .append('g');
      // Set Stretch scale
      var scale = d3
        .scaleLinear()
        .domain([0, 120])
        .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
      group
        .append('rect')
        .attr('width', 0)// set length of the bar
        .attr('height', 27 - 3)//where to start drawing the bars (at __px)
        .attr('x', showfield =>
        {
          if (showfield.value == -1)
          {
            scale(0*showfield.value)
          }
          else {
            return 2*scale(100-showfield.value)
          }
        })
        .attr('y', (showfield, i) => i * 27)
        .transition()
        .duration(1000)
        .attr('width', showfield => {
          if (showfield.value == -1)
          {
            scale(0*showfield.value)
          }
          else {
            return  4*scale(showfield.value)
          }
        })
        // set length of the bar
        .attr('x',120)
        .style('opacity', 0.8)
        .attr("fill", showfield => showfield.colour)
      //show field name
      group
        .append('text')
        .attr('x', 10) //set the x coordinate of the field names text
        .attr('y', (showfield, i) => i * 27 + 18)
        .style('fill', 'black')
        .style('font-size', '14px')
        .style('opacity', 0.5)
        .style('font-weight', 'bold')
        .text(showfield => showfield.field);
      //show percentage
      group
        .append('text')
        .attr('x', 120)
        .attr('y', (showfield, i) => i * 27 + 18)
        .attr('text-anchor', 'start')
        .style('fill', 'black')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .text(showfield =>
          {
            if (showfield.value == -1)
          {
            return " ";
          }
          else {
            return showfield.value + "%";
          }
      });

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusSubDivision_Past_Immigrant"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Census Sub-Division ID:</b><br> " + feature.properties.COL_00 + "<br>" +
                        "<b>Portion of Population From Asia:</b><br> " + feature.properties.Port_AS + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});
//===================== ================= ====================
//===================== ====== Age ====== ====================

//======================Province====================
largeMap.on("mouseenter","Province_Age",function(e){
      largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","Province_Age",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "Province_Age", (e) =>
{
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field2 = (Math.floor(e.features[0].properties.F0_to_4_ye * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.F5_to_9_ye * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.F10_to_14_ * 100)/100);

        var field6 = (Math.floor(e.features[0].properties.F15_to_19_ * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.F20_to_24_ * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.F25_to_29_ * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.F30_to_34_ * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.F35_to_39_ * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.F40_to_44_ * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.F45_to_49_ * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.F50_to_54_ * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.F55_to_59_ * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.F60_to_64_ * 100)/100);

        var field17 = (Math.floor(e.features[0].properties.F65_to_69_ * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.F70_to_74_ * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.F75_to_79_ * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.F80_to_84_ * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.F85_to_89_ * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.F90_to_94_ * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.F95_to_99_ * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.F100_years * 100)/100);

       inputFields = [
         { field :"100 and above", value: field24, colour : ""},
          { field :"95 to 99", value: field23, colour : ""},
          { field :"90 to 94", value: field22, colour : ""},
          { field :"85 to 89", value: field21, colour : ""},
          { field :"80 to 84", value: field20, colour : ""},
          { field :"75 to 79", value: field19, colour : ""},
          { field :"70 to 74", value: field18, colour : ""},
          { field :"65 to 69", value: field17, colour : ""},
          { field :"60 to 64", value: field15, colour : ""},
          { field :"55 to 59", value: field14, colour : ""},
          { field :"50 to 54", value: field13, colour : ""},
          { field :"45 to 49", value: field12, colour : ""},
          { field :"40 to 44", value: field11, colour : ""},
          { field :"35 to 39", value: field10, colour : ""},
          { field :"30 to 34", value: field9, colour : ""},
          { field :"25 to 29", value: field8, colour : ""},
          { field :"20 to 24", value: field7, colour : ""},
          { field :"15 to 19", value: field6, colour : ""},
          { field :"10 to 14", value: field4, colour : ""},
          { field :"5 to 9", value: field3, colour : ""},
          { field :"0 to 4", value: field2, colour : ""}

      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          if (indexo <8)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (indexo >=8 && indexo <18)
          {
            inputFields[indexo].colour = "#fee08b";
          }
          else {
            inputFields[indexo].colour = "#5e4fa2";
          }

        }
        console.log(inputFields.value)
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", 800);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield => 5*scale(showfield.value))
          .attr('y', (showfield, i) => i * 27)
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == -1)
            {
              scale(0*showfield.value)
            }
            else {
              return  20*scale(showfield.value)
            }

          })// set length of the bar
          .attr('x',120)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentAge
        group
          .append('text')
          .attr('x', 120)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == -1)
            {
              return " ";
            }
            else {
              return showfield.value + "%";
              }
            });


             //classify colour
             var indexo;
             for (i = 0; i<inputFields.length; i++)
             {
                 indexo = inputFields.indexOf(inputFields[i])
            }
            // Set SVG height and width
/*
            // Set Stretch scale
             scale = d3
             .scaleLinear()
             .domain([0, 120])
             .range([0, 100]); // need to change this to be auto resizing
            // Create Bars and Transitions
            group
             .append('rect')
             .attr('width', 0)// set length of the bar
             .attr('height', 27 - 3)//where to start drawing the bars (at __px)
             .attr('x', showAvg => 5*scale(showAvg.value))

             .attr('y', (showAvg, i) => i * 27)
            //  .style("overflow-y","scroll")
             .transition()
             .duration(1000)
             .attr('width', showAvg => 20*scale(showAvg.value))

             // set length of the bar
             .attr('x',120)
             .style('opacity', 0.8)
             .attr("fill-outline", "black")

            //show field name
            group
             .append('text')
             .attr('x', 10) //set the x coordinate of the field names text
             .attr('y', (showAvg, i) => i * 27 + 18)
             .style('fill', 'black')
             .style('font-size', '14px')
             .style('opacity', 0.5)
             .style('font-weight', 'bold')
            //  .style("overflow-y","scroll")
             .text(showAvg => showAvg.field);
            //show percentAge
            group
             .append('text')
             .attr('x', 120)
             .attr('y', (showAvg, i) => i * 27 + 18)
             .attr('text-anchor', 'start')
             .style('fill', 'black')

             .style('font-size', '14px')
             .style('font-weight', 'bold')
             .text(showAvg =>{
                 if (showAvg.value == -1)
               {
                 return " ";
               }
               else {
                 return showAvg.value + "%";
               }
             }
            );
*/
      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["Province_Age"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Province ID:</b><br> " + feature.properties.COL0 + "<br>"+
                        "<b>Average Age: </b><br>" + feature.properties.AvgAge) + "<br>";
                        //+ "<center>Clink link for <a href = 'https://bikesharetoronto.com/''>Bikeshare Toronto's Website</a></center>");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});
//======================Census Division====================
largeMap.on("mouseenter","CensusDivision_Age",function(e){
      largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusDivision_Age",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusDivision_Age", (e) =>
{
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field2 = (Math.floor(e.features[0].properties.F0_to_4_ye * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.F5_to_9_ye * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.F10_to_14_ * 100)/100);

        var field6 = (Math.floor(e.features[0].properties.F15_to_19_ * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.F20_to_24_ * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.F25_to_29_ * 100)/100);
        var field9 = (Math.floor(e.features[0].properties.F30_to_34_ * 100)/100);
        var field10 = (Math.floor(e.features[0].properties.F35_to_39_ * 100)/100);
        var field11 = (Math.floor(e.features[0].properties.F40_to_44_ * 100)/100);
        var field12 = (Math.floor(e.features[0].properties.F45_to_49_ * 100)/100);
        var field13 = (Math.floor(e.features[0].properties.F50_to_54_ * 100)/100);
        var field14 = (Math.floor(e.features[0].properties.F55_to_59_ * 100)/100);
        var field15 = (Math.floor(e.features[0].properties.F60_to_64_ * 100)/100);

        var field17 = (Math.floor(e.features[0].properties.F65_to_69_ * 100)/100);
        var field18 = (Math.floor(e.features[0].properties.F70_to_74_ * 100)/100);
        var field19 = (Math.floor(e.features[0].properties.F75_to_79_ * 100)/100);
        var field20 = (Math.floor(e.features[0].properties.F80_to_84_ * 100)/100);
        var field21 = (Math.floor(e.features[0].properties.F85_to_89_ * 100)/100);
        var field22 = (Math.floor(e.features[0].properties.F90_to_94_ * 100)/100);
        var field23 = (Math.floor(e.features[0].properties.F95_to_99_ * 100)/100);
        var field24 = (Math.floor(e.features[0].properties.F100_years * 100)/100);

       inputFields = [
         { field :"100 and above", value: field24, colour : ""},
          { field :"95 to 99", value: field23, colour : ""},
          { field :"90 to 94", value: field22, colour : ""},
          { field :"85 to 89", value: field21, colour : ""},
          { field :"80 to 84", value: field20, colour : ""},
          { field :"75 to 79", value: field19, colour : ""},
          { field :"70 to 74", value: field18, colour : ""},
          { field :"65 to 69", value: field17, colour : ""},
          { field :"60 to 64", value: field15, colour : ""},
          { field :"55 to 59", value: field14, colour : ""},
          { field :"50 to 54", value: field13, colour : ""},
          { field :"45 to 49", value: field12, colour : ""},
          { field :"40 to 44", value: field11, colour : ""},
          { field :"35 to 39", value: field10, colour : ""},
          { field :"30 to 34", value: field9, colour : ""},
          { field :"25 to 29", value: field8, colour : ""},
          { field :"20 to 24", value: field7, colour : ""},
          { field :"15 to 19", value: field6, colour : ""},
          { field :"10 to 14", value: field4, colour : ""},
          { field :"5 to 9", value: field3, colour : ""},
          { field :"0 to 4", value: field2, colour : ""}

      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          if (indexo <8)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (indexo >=8 && indexo <18)
          {
            inputFields[indexo].colour = "#fee08b";
          }
          else {
            inputFields[indexo].colour = "#5e4fa2";
          }

        }
        console.log(inputFields.value)
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", 800);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield => 5*scale(showfield.value))
          .attr('y', (showfield, i) => i * 27)
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == -1)
            {
              scale(0*showfield.value)
            }
            else {
              return  20*scale(showfield.value)
            }

          })// set length of the bar
          .attr('x',120)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentAge
        group
          .append('text')
          .attr('x', 120)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == -1)
            {
              return " ";
            }
            else {
              return showfield.value + "%";
              }
            });


             //classify colour
             var indexo;
             for (i = 0; i<inputFields.length; i++)
             {
                 indexo = inputFields.indexOf(inputFields[i])
            }
            // Set SVG height and width

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusDivision_Age"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Census Division ID:</b><br> " + feature.properties.COL0 + "<br>"+
                        "<b>Average Age: </b><br>" + feature.properties.AvgAge) + "<br>";
                        //"<center>Clink link for <a href = 'https://bikesharetoronto.com/''>Bikeshare Toronto's Website</a></center>");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});
//======================Census SubDivision====================
largeMap.on("mouseenter","CensusSubDivision_Age",function(e){
      largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusSubDivision_Age",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusSubDivision_Age", (e) =>
{
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Age_Sex_22* 100)/100)
        var field2 = (Math.floor(e.features[0].properties.Age_Sex_21* 100)/100)
        var field3 = (Math.floor(e.features[0].properties.Age_Sex_20* 100)/100)
        var field4 = (Math.floor(e.features[0].properties.Age_Sex_19* 100)/100)
        var field5 = (Math.floor(e.features[0].properties.Age_Sex_18* 100)/100)
        var field6 = (Math.floor(e.features[0].properties.Age_Sex_17* 100)/100)
        var field7 = (Math.floor(e.features[0].properties.Age_Sex_16* 100)/100)
        var field8 = (Math.floor(e.features[0].properties.Age_Sex_15* 100)/100)
        var field9 = (Math.floor(e.features[0].properties.Age_Sex_14* 100)/100)
        var field10 = (Math.floor(e.features[0].properties.Age_Sex_13* 100)/100)
        var field11 = (Math.floor(e.features[0].properties.Age_Sex_12* 100)/100)
        var field12 = (Math.floor(e.features[0].properties.Age_Sex_11* 100)/100)
        var field13 = (Math.floor(e.features[0].properties.Age_Sex_10* 100)/100)
        var field14 = (Math.floor(e.features[0].properties.Age_Sex__9* 100)/100)
        var field15 = (Math.floor(e.features[0].properties.Age_Sex__8* 100)/100)
        var field16 = (Math.floor(e.features[0].properties.Age_Sex__7* 100)/100)
        var field17 = (Math.floor(e.features[0].properties.Age_Sex__6* 100)/100)
        var field18 = (Math.floor(e.features[0].properties.Age_Sex__5* 100)/100)
        var field19 = (Math.floor(e.features[0].properties.Age_Sex__4* 100)/100)
        var field20 = (Math.floor(e.features[0].properties.Age_Sex__3* 100)/100)
        var field21 = (Math.floor(e.features[0].properties.Age_Sex__2* 100)/100)

       inputFields = [
         { field : "100 and above", value: field1, colour : ""},
         { field : "95 to 99", value: field2, colour : ""},
         { field : "90 to 94", value: field3, colour : ""},
         { field : "85 to 89", value: field4, colour : ""},
         { field : "80 to 84", value: field5, colour : ""},
         { field : "75 to 79", value: field6, colour : ""},
         { field : "70 to 74", value: field7, colour : ""},
         { field : "65 to 69", value: field8, colour : ""},
         { field : "60 to 64", value: field9, colour : ""},
         { field : "55 to 59", value: field10, colour : ""},
         { field : "50 to 54", value: field11, colour : ""},
         { field : "45 to 49", value: field12, colour : ""},
         { field : "40 to 44", value: field13, colour : ""},
         { field : "35 to 39", value: field14, colour : ""},
         { field : "30 to 34", value: field15, colour : ""},
         { field : "25 to 29", value: field16, colour : ""},
         { field : "20 to 24", value: field17, colour : ""},
         { field : "15 to 19", value: field18, colour : ""},
         { field : "10 to 14", value: field19, colour : ""},
         { field : "5 to 9", value: field20, colour : ""},
         { field : "0 to 4", value: field21, colour : ""}
      ]
      //classify colour
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          if (indexo <8)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (indexo >=8 && indexo <18)
          {
            inputFields[indexo].colour = "#fee08b";
          }
          else {
            inputFields[indexo].colour = "#5e4fa2";
          }

        }
        console.log(inputFields.value)
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", 800);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield => 5*scale(showfield.value))
          .attr('y', (showfield, i) => i * 27)
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == -1)
            {
              scale(0*showfield.value)
            }
            else {
              return  20*scale(showfield.value)
            }

          })// set length of the bar
          .attr('x',120)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentAge
        group
          .append('text')
          .attr('x', 120)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == -1)
            {
              return " ";
            }
            else {
              return showfield.value + "%";
              }
            });


             //classify colour
             var indexo;
             for (i = 0; i<inputFields.length; i++)
             {
                 indexo = inputFields.indexOf(inputFields[i])
            }
            // Set SVG height and width

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusSubDivision_Age"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Census Sub-Division ID:</b><br> " + feature.properties.CensusSu_3 + "<br>"+
                        "<b>Average Age: </b><br>" + feature.properties.Age_Sex_23) + "<br>";
                        //"<center>Clink link for <a href = 'https://bikesharetoronto.com/''>Bikeshare Toronto's Website</a></center>");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});

//===================== ================= ====================
//===================== ==Ethnic Origin== ====================

//======================Province====================
largeMap.on("mouseenter","Province_Ethnic_Origin",function(e){
      largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","Province_Ethnic_Origin",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "Province_Ethnic_Origin", (e) =>
{
    var worldField = e.features[0].properties.COL0;
    var smallMap = new mapboxgl.Map({
      container: "small",  //container id in HTML
      style: "mapbox://styles/dlm589/ck86oxm1z0g3l1ikareawpiyj",  //stylesheet location
      center: [8,45],  // specify where the starting point is, longitude/latitude43° 39" 3.8520"" N and 79° 20" 49.2540"
      zoom: -0.3 // starting zoom level
    });
    smallMap.on("load", function() // this is to make sure the label is in front of all layers
    {
      var layers = smallMap.getStyle().layers;
      var layersLabel;
      for (var i = 0; i < layers.length; i++)
      {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"])
        {
          layersLabel = layers[i].id;
          break;
        }
      }
      smallMap.addSource("Continent_Ethnic_source",{
          "type" : "vector",
          "url" : "mapbox://dlm589.204y1pfc",
        });
        // addProvince Province_Ethnic_Origin
      smallMap.addLayer({
        "id": "Province_Ethnic_Origin",
        "type": "fill",
        "source" : "Continent_Ethnic_source",
        "source-layer": "Continent_Ethinic_Province-4k055l",
        "layout" : {},
        "paint" :
        {
          "fill-color": ["interpolate",["linear"],["get", "F"+ worldField],
          0,"#000000", 3, "#C0C0C0",
          5, "#5e4fa2", 10, "#3288bd",
          20, "#66c2a5", 30, "#abdda4",
          40, "#e6f598", 50, "#fee08b",
          60, "#fdae61", 70, "#f46d43",
          100, "#9e0142"

        ],      "fill-outline-color" : "#000000"
        }
      }, layersLabel);
    });
    smallMap.on("mouseenter","Province_Ethnic_Origin",function(e){
          smallMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
      });
    // if the mouse leaves the province fill layer then do the following:
    largeMap.on("mouseleave","Province_Ethnic_Origin",function(e){
        largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
      });
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Calc_COL5 * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Calc_COL6 * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.Calc_COL7 * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Calc_COL8 * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Calc_COL9 * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Calc_COL10 * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.Calc_COL11 * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Calc_COL12 * 100)/100);
    //var data = [field1, field2, field3, field4, field5, field6]
      var inputFields = [
          { field :" NA Aboriginal", value: field1, colour : ""},
           { field :" Other N. America", value: field2, colour : ""},
           { field :" European", value: field3, colour : ""},
           { field :" Caribbean", value: field4, colour : ""},
           { field :" South American", value: field5, colour : ""},
           { field :" African", value: field6, colour : ""},
           { field :" Asian", value: field7, colour : ""},
           { field :" Oceania", value: field8, colour : ""}
      ]
      console.log(inputFields)
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          console.log(inputFields[indexo].value);
          var fieldValue = inputFields[indexo].value*100
          if (fieldValue > 90) {
            inputFields[indexo].colour = "#9e0142";
          }
          else if (fieldValue > 80 && fieldValue<=90)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (fieldValue > 70 && fieldValue<=80) {
            inputFields[indexo].colour = "#f46d43";
          }
          else if (fieldValue > 60 && fieldValue<=70) {
            inputFields[indexo].colour = "#fdae61";
          }
          else if (fieldValue > 50 && fieldValue<=60) {
            inputFields[indexo].colour = "#fee08b";
          }
          else if (fieldValue > 40 && fieldValue<=50) {
            inputFields[indexo].colour = "#e6f598";
          }
          else if (fieldValue > 30 && fieldValue<=40) {
            inputFields[indexo].colour = "#abdda4";
          }
          else if (fieldValue > 20 && fieldValue<=30) {
            inputFields[indexo].colour = "#66c2a5";
          }
          else if (fieldValue > 10 && fieldValue<=20) {
            inputFields[indexo].colour = "#3288bd";
          }
          else if (fieldValue > 0 && fieldValue<=10) {
            inputFields[indexo].colour = "#5e4fa2";
          }
          else {
            inputFields[indexo].colour = "grey";
          }
        }
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", indexo * 30);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield =>{
            if (showfield.value == -1){
              scale(0*showfield.value)
            }
            else {
              return 2*scale(showfield.value*100)
            }
          })
          .attr('y', (showfield, i) => i * 27)
        //  .style("overflow-y","scroll")
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == -1)
            {
              scale(0*showfield.value)
            }
            else {
              return  2*scale(showfield.value*100)
            }

          })// set length of the bar
          .attr('x',140)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentEthnic_Origin
        group
          .append('text')
          .attr('x', 140)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == -1)
            {
              return " ";
            }
            else {
              return Math.floor(showfield.value*100 * 100)/100+ "%";
            }
          }
      );

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["Province_Ethnic_Origin"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Province ID:</b><br> " + feature.properties.COL0 + "<br>" +
                        "<b>Portion of Population With Asian Origins:</b><br> " + feature.properties.Calc_COL11*100 + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});

//======================Census Division=======================

largeMap.on("mouseenter","CensusDivision_Origin",function(e){
      largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusDivision_Origin",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusDivision_Origin", (e) =>
{
    // if the mouse leaves the province fill layer then do the following:
    largeMap.on("mouseleave","CensusDivision_Origin",function(e){
        largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
      });
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Calc_COL6 * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Calc_COL7 * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.Calc_COL8 * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Calc_COL9 * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Calc_COL10 * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Calc_COL11 * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.Calc_COL12 * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Calc_COL13 * 100)/100);
    //var data = [field1, field2, field3, field4, field5, field6]
      var inputFields = [
          { field :" NA Aboriginal", value: field1, colour : ""},
           { field :" Other N. America", value: field2, colour : ""},
           { field :" European", value: field3, colour : ""},
           { field :" Caribbean", value: field4, colour : ""},
           { field :" South American", value: field5, colour : ""},
           { field :" African", value: field6, colour : ""},
           { field :" Asian", value: field7, colour : ""},
           { field :" Oceania", value: field8, colour : ""}
      ]
      console.log(inputFields)
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          console.log(inputFields[indexo].value);
          var fieldValue = inputFields[indexo].value*100
          if (fieldValue > 90 && fieldValue <=100) {
            inputFields[indexo].colour = "#9e0142";
          }
          else if (fieldValue > 80 && fieldValue<=90)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (fieldValue > 70 && fieldValue<=80) {
            inputFields[indexo].colour = "#f46d43";
          }
          else if (fieldValue > 60 && fieldValue<=70) {
            inputFields[indexo].colour = "#fdae61";
          }
          else if (fieldValue > 50 && fieldValue<=60) {
            inputFields[indexo].colour = "#fee08b";
          }
          else if (fieldValue > 40 && fieldValue<=50) {
            inputFields[indexo].colour = "#e6f598";
          }
          else if (fieldValue > 30 && fieldValue<=40) {
            inputFields[indexo].colour = "#abdda4";
          }
          else if (fieldValue > 20 && fieldValue<=30) {
            inputFields[indexo].colour = "#66c2a5";
          }
          else if (fieldValue > 10 && fieldValue<=20) {
            inputFields[indexo].colour = "#3288bd";
          }
          else if (fieldValue > 0 && fieldValue<=10) {
            inputFields[indexo].colour = "#5e4fa2";
          }
          else {
            continue;
          }
        }
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", indexo * 30);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield =>{
            if (showfield.value == -1){
              scale(0*showfield.value)
            }
            else {
              return 2*scale(showfield.value*100)
            }
          })
          .attr('y', (showfield, i) => i * 27)
        //  .style("overflow-y","scroll")
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == 7)
            {
              scale(0*showfield.value)
            }
            else {
              return  2*scale(showfield.value*100)
            }

          })// set length of the bar
          .attr('x',140)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentEthnic_Origin
        group
          .append('text')
          .attr('x', 140)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == 7)
            {
              return "No Data";
            }
            else {
              return Math.floor(showfield.value*100 * 100)/100+ "%";
            }
          }
      );

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusDivision_Origin"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          popup.setHTML("<b>Census Division ID:</b><br> " + feature.properties.COL0 + "<br>" +
                        "<b>Portion of Population With Asian Origins:</b><br> " + feature.properties.Calc_COL12*100 + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});

//======================Census SubDivision====================
largeMap.on("mouseenter","CensusSubDivision_Origin",function(e){
      largeMap.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
largeMap.on("mouseleave","CensusSubDivision_Origin",function(e){
    largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
  });
largeMap.on("click", "CensusSubDivision_Origin", (e) =>
{
    // if the mouse leaves the province fill layer then do the following:
    largeMap.on("mouseleave","CensusSubDivision_Origin",function(e){
        largeMap.getCanvas().style.cursor = ""; //go back to the null cursor
      });
    // Set variables equal to the current feature's BikeStation name, capacity
    if (e.features.length > 0) {
        d3.selectAll('svg').remove();
        // ==============Create New Graph of the newly selected area ===================
        var field1 = (Math.floor(e.features[0].properties.Calc_COL8 * 100)/100);
        var field2 = (Math.floor(e.features[0].properties.Calc_COL9 * 100)/100);
        var field3 = (Math.floor(e.features[0].properties.Calc_COL10 * 100)/100);
        var field4 = (Math.floor(e.features[0].properties.Calc_COL11 * 100)/100);
        var field5 = (Math.floor(e.features[0].properties.Calc_COL12 * 100)/100);
        var field6 = (Math.floor(e.features[0].properties.Calc_COL13 * 100)/100);
        var field7 = (Math.floor(e.features[0].properties.Calc_COL14 * 100)/100);
        var field8 = (Math.floor(e.features[0].properties.Calc_COL15 * 100)/100);
    //var data = [field1, field2, field3, field4, field5, field6]
      var inputFields = [
          { field :" NA Aboriginal", value: field1, colour : ""},
           { field :" Other N. America", value: field2, colour : ""},
           { field :" European", value: field3, colour : ""},
           { field :" Caribbean", value: field4, colour : ""},
           { field :" South American", value: field5, colour : ""},
           { field :" African", value: field6, colour : ""},
           { field :" Asian", value: field7, colour : ""},
           { field :" Oceania", value: field8, colour : ""}
      ]
      console.log(inputFields)
      var indexo;
      for (i = 0; i<inputFields.length; i++)
      {
          indexo = inputFields.indexOf(inputFields[i])
          console.log(inputFields[indexo].value);
          var fieldValue = inputFields[indexo].value*100
          if (fieldValue > 90 && fieldValue <=100) {
            inputFields[indexo].colour = "#9e0142";
          }
          else if (fieldValue > 80 && fieldValue<=90)
          {
            inputFields[indexo].colour = "#d53e4f";
          }
          else if (fieldValue > 70 && fieldValue<=80) {
            inputFields[indexo].colour = "#f46d43";
          }
          else if (fieldValue > 60 && fieldValue<=70) {
            inputFields[indexo].colour = "#fdae61";
          }
          else if (fieldValue > 50 && fieldValue<=60) {
            inputFields[indexo].colour = "#fee08b";
          }
          else if (fieldValue > 40 && fieldValue<=50) {
            inputFields[indexo].colour = "#e6f598";
          }
          else if (fieldValue > 30 && fieldValue<=40) {
            inputFields[indexo].colour = "#abdda4";
          }
          else if (fieldValue > 20 && fieldValue<=30) {
            inputFields[indexo].colour = "#66c2a5";
          }
          else if (fieldValue > 10 && fieldValue<=20) {
            inputFields[indexo].colour = "#3288bd";
          }
          else if (fieldValue > 0 && fieldValue<=10) {
            inputFields[indexo].colour = "#5e4fa2";
          }
          else {
            continue;
          }
        }
      // Set SVG height and width
        var chart = d3
          .select('.chart')
          .append('svg')
          .style("overflow-y","scroll")
          .style("text-align","left")
          .attr("height", indexo * 30);

          //.attr('height', 1000);
        var group = chart
          .selectAll('g')
          .style("text-align","left")
          .data(inputFields)
          .enter()
          .append('g');
        // Set Stretch scale
        var scale = d3
          .scaleLinear()
          .domain([0, 120])
          .range([0, 100]); // need to change this to be auto resizing
        // Create Bars and Transitions
        group
          .append('rect')
          .attr('width', 0)// set length of the bar
          .attr('height', 27 - 3)//where to start drawing the bars (at __px)
          .attr('x', showfield =>{
            if (showfield.value == -1){
              scale(0*showfield.value)
            }
            else {
              return 2*scale(showfield.value*100)
            }
          })
          .attr('y', (showfield, i) => i * 27)
        //  .style("overflow-y","scroll")
          .transition()
          .duration(1000)
          .attr('width', showfield => {
            if (showfield.value == 7)
            {
              scale(0*showfield.value)
            }
            else {
              return  2*scale(showfield.value*100)
            }

          })// set length of the bar
          .attr('x',140)
          .style('opacity', 0.8)
          .attr("fill", showfield => showfield.colour)

        //show field name
        group
          .append('text')
          .attr('x', 10) //set the x coordinate of the field names text
          .attr('y', (showfield, i) => i * 27 + 18)
          .style('fill', 'black')
          .style('font-size', '14px')
          .style('opacity', 0.5)
          .style('font-weight', 'bold')
        //  .style("overflow-y","scroll")
          .text(showfield => showfield.field);
        //show percentEthnic_Origin
        group
          .append('text')
          .attr('x', 140)
          .attr('y', (showfield, i) => i * 27 + 18)
          .attr('text-anchor', 'start')
          .style('fill', 'black')

          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .text(showfield =>{
              if (showfield.value == 7)
            {
              return "No Data";
            }
            else {
              return Math.floor(showfield.value*100 * 100)/100+ "%";
            }
          }
      );

      var features = largeMap.queryRenderedFeatures(e.point, {
          "layers": ["CensusSubDivision_Origin"]}
      );
      //if there is a feature there, do the following
      if (features.length > 0){
          var feature = features[0]; //store the first element as 'feature'
          popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
          //add stuff to the pop up:
          var att = feature.properties.Calc_COL14;
          if (att == 7)
          {
            att = 0;
          }
          popup.setHTML("<b>Census Sub-Division ID:</b><br> " + feature.properties.COL0 + "<br>" +
                        "<b>Portion of Population With Asian Origins:</b><br> " + att*100 + " %");
          popup.addTo(largeMap); //finally add the pop up to the largeMap
      }
  }
});
