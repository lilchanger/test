ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([104.288923, -10.963960, 136.230887, 5.507762]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_GHI_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GHI<br />\
    <img src="styles/legend/GHI_1_0.png" /> 1445,1747<br />\
    <img src="styles/legend/GHI_1_1.png" /> 1684,8385<br />\
    <img src="styles/legend/GHI_1_2.png" /> 1924,5024<br />\
    <img src="styles/legend/GHI_1_3.png" /> 2164,1662<br />\
    <img src="styles/legend/GHI_1_4.png" /> 2403,8300<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GHI_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Elevation_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Elevation<br />\
    <img src="styles/legend/Elevation_2_0.png" /> 0,0000<br />\
    <img src="styles/legend/Elevation_2_1.png" /> 811,9479<br />\
    <img src="styles/legend/Elevation_2_2.png" /> 1623,8958<br />\
    <img src="styles/legend/Elevation_2_3.png" /> 2435,8436<br />\
    <img src="styles/legend/Elevation_2_4.png" /> 3247,7915<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Elevation_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_CoV_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CoV<br />\
    <img src="styles/legend/CoV_3_0.png" /> 1,7206<br />\
    <img src="styles/legend/CoV_3_1.png" /> 3,1149<br />\
    <img src="styles/legend/CoV_3_2.png" /> 4,5092<br />\
    <img src="styles/legend/CoV_3_3.png" /> 5,9035<br />\
    <img src="styles/legend/CoV_3_4.png" /> 7,2977<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CoV_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Temperature_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Temperature<br />\
    <img src="styles/legend/Temperature_4_0.png" /> 9,3021<br />\
    <img src="styles/legend/Temperature_4_1.png" /> 14,1078<br />\
    <img src="styles/legend/Temperature_4_2.png" /> 18,9135<br />\
    <img src="styles/legend/Temperature_4_3.png" /> 23,7192<br />\
    <img src="styles/legend/Temperature_4_4.png" /> 28,5250<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Temperature_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Hydrography_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hydrography<br />\
    <img src="styles/legend/Hydrography_5_0.png" /> 1<br />\
    <img src="styles/legend/Hydrography_5_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hydrography_5.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Slope_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope<br />\
    <img src="styles/legend/Slope_6_0.png" /> 0<br />\
    <img src="styles/legend/Slope_6_1.png" /> 19<br />\
    <img src="styles/legend/Slope_6_2.png" /> 39<br />\
    <img src="styles/legend/Slope_6_3.png" /> 58<br />\
    <img src="styles/legend/Slope_6_4.png" /> 77<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Slope_6.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytoroad_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to road<br />\
    <img src="styles/legend/Proximitytoroad_7_0.png" /> 0,0703<br />\
    <img src="styles/legend/Proximitytoroad_7_1.png" /> 72442,9043<br />\
    <img src="styles/legend/Proximitytoroad_7_2.png" /> 144885,7383<br />\
    <img src="styles/legend/Proximitytoroad_7_3.png" /> 217328,5723<br />\
    <img src="styles/legend/Proximitytoroad_7_4.png" /> 289771,4063<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytoroad_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytogrid_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to grid<br />\
    <img src="styles/legend/Proximitytogrid_8_0.png" /> 0,7390<br />\
    <img src="styles/legend/Proximitytogrid_8_1.png" /> 198332,7886<br />\
    <img src="styles/legend/Proximitytogrid_8_2.png" /> 396664,8382<br />\
    <img src="styles/legend/Proximitytogrid_8_3.png" /> 594996,8879<br />\
    <img src="styles/legend/Proximitytogrid_8_4.png" /> 793328,9375<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytogrid_8.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytosubstation_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to substation<br />\
    <img src="styles/legend/Proximitytosubstation_9_0.png" /> 73,7800<br />\
    <img src="styles/legend/Proximitytosubstation_9_1.png" /> 198387,5694<br />\
    <img src="styles/legend/Proximitytosubstation_9_2.png" /> 396701,3587<br />\
    <img src="styles/legend/Proximitytosubstation_9_3.png" /> 595015,1481<br />\
    <img src="styles/legend/Proximitytosubstation_9_4.png" /> 793328,9375<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytosubstation_9.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Substationutilization_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Substation utilization<br />\
    <img src="styles/legend/Substationutilization_10_0.png" /> 1,3007<br />\
    <img src="styles/legend/Substationutilization_10_1.png" /> 170,4200<br />\
    <img src="styles/legend/Substationutilization_10_2.png" /> 339,5392<br />\
    <img src="styles/legend/Substationutilization_10_3.png" /> 508,6585<br />\
    <img src="styles/legend/Substationutilization_10_4.png" /> 677,7778<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Substationutilization_10.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Residentialarea_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Residential area<br />\
    <img src="styles/legend/Residentialarea_11_0.png" /> 1<br />\
    <img src="styles/legend/Residentialarea_11_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Residentialarea_11.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_TOPSISScore_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPSIS Score<br />\
    <img src="styles/legend/TOPSISScore_12_0.png" /> 0,4176<br />\
    <img src="styles/legend/TOPSISScore_12_1.png" /> 0,5136<br />\
    <img src="styles/legend/TOPSISScore_12_2.png" /> 0,6096<br />\
    <img src="styles/legend/TOPSISScore_12_3.png" /> 0,7056<br />\
    <img src="styles/legend/TOPSISScore_12_4.png" /> 0,8016<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPSISScore_12.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var format_Top100_13 = new ol.format.GeoJSON();
var features_Top100_13 = format_Top100_13.readFeatures(json_Top100_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Top100_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Top100_13.addFeatures(features_Top100_13);
var lyr_Top100_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Top100_13, 
                style: style_Top100_13,
                popuplayertitle: 'Top 100',
                interactive: true,
                title: '<img src="styles/legend/Top100_13.png" /> Top 100'
            });
var format_Worst_14 = new ol.format.GeoJSON();
var features_Worst_14 = format_Worst_14.readFeatures(json_Worst_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Worst_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Worst_14.addFeatures(features_Worst_14);
var lyr_Worst_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Worst_14, 
                style: style_Worst_14,
                popuplayertitle: 'Worst',
                interactive: true,
                title: '<img src="styles/legend/Worst_14.png" /> Worst'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GHI_1.setVisible(false);lyr_Elevation_2.setVisible(false);lyr_CoV_3.setVisible(false);lyr_Temperature_4.setVisible(false);lyr_Hydrography_5.setVisible(false);lyr_Slope_6.setVisible(false);lyr_Proximitytoroad_7.setVisible(false);lyr_Proximitytogrid_8.setVisible(false);lyr_Proximitytosubstation_9.setVisible(false);lyr_Substationutilization_10.setVisible(false);lyr_Residentialarea_11.setVisible(false);lyr_TOPSISScore_12.setVisible(true);lyr_Top100_13.setVisible(true);lyr_Worst_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GHI_1,lyr_Elevation_2,lyr_CoV_3,lyr_Temperature_4,lyr_Hydrography_5,lyr_Slope_6,lyr_Proximitytoroad_7,lyr_Proximitytogrid_8,lyr_Proximitytosubstation_9,lyr_Substationutilization_10,lyr_Residentialarea_11,lyr_TOPSISScore_12,lyr_Top100_13,lyr_Worst_14];
lyr_Top100_13.set('fieldAliases', {'Province': 'Province', 'Rank': 'Rank', 'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'GHI': 'GHI', 'Elevation': 'Elevation', 'IAV': 'IAV', 'Prox road': 'Prox road', 'Prox grid': 'Prox grid', 'Prox ss': 'Prox ss', 'Temp': 'Temp', 'Slope': 'Slope', 'Resident': 'Resident', 'Utilizatn': 'Utilizatn', 'Hydro': 'Hydro', });
lyr_Worst_14.set('fieldAliases', {'Province': 'Province', 'lat': 'lat', 'lon': 'lon', });
lyr_Top100_13.set('fieldImages', {'Province': 'TextEdit', 'Rank': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'GHI': 'TextEdit', 'Elevation': 'TextEdit', 'IAV': 'TextEdit', 'Prox road': 'TextEdit', 'Prox grid': 'TextEdit', 'Prox ss': 'TextEdit', 'Temp': 'TextEdit', 'Slope': 'TextEdit', 'Resident': 'TextEdit', 'Utilizatn': 'TextEdit', 'Hydro': 'TextEdit', });
lyr_Worst_14.set('fieldImages', {'Province': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_Top100_13.set('fieldLabels', {'Province': 'inline label - always visible', 'Rank': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'GHI': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'IAV': 'inline label - always visible', 'Prox road': 'inline label - always visible', 'Prox grid': 'inline label - always visible', 'Prox ss': 'inline label - always visible', 'Temp': 'inline label - always visible', 'Slope': 'inline label - always visible', 'Resident': 'inline label - always visible', 'Utilizatn': 'inline label - always visible', 'Hydro': 'inline label - always visible', });
lyr_Worst_14.set('fieldLabels', {'Province': 'inline label - always visible', 'lat': 'inline label - always visible', 'lon': 'inline label - always visible', });
lyr_Worst_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});