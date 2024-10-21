ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32630").setExtent([157713.969180, 1018928.252443, 909176.178679, 1458737.530096]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_BF_Region_1 = new ol.format.GeoJSON();
var features_BF_Region_1 = format_BF_Region_1.readFeatures(json_BF_Region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_BF_Region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BF_Region_1.addFeatures(features_BF_Region_1);
var lyr_BF_Region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BF_Region_1, 
                style: style_BF_Region_1,
                popuplayertitle: "BF_Region",
                interactive: true,
                title: '<img src="styles/legend/BF_Region_1.png" /> BF_Region'
            });
var format_Chef_Lieu_Region_2 = new ol.format.GeoJSON();
var features_Chef_Lieu_Region_2 = format_Chef_Lieu_Region_2.readFeatures(json_Chef_Lieu_Region_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Chef_Lieu_Region_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chef_Lieu_Region_2.addFeatures(features_Chef_Lieu_Region_2);cluster_Chef_Lieu_Region_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Chef_Lieu_Region_2
});
var lyr_Chef_Lieu_Region_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Chef_Lieu_Region_2, 
                style: style_Chef_Lieu_Region_2,
                popuplayertitle: "Chef_Lieu_Region",
                interactive: true,
                title: '<img src="styles/legend/Chef_Lieu_Region_2.png" /> Chef_Lieu_Region'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_BF_Region_1.setVisible(true);lyr_Chef_Lieu_Region_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_BF_Region_1,lyr_Chef_Lieu_Region_2];
lyr_BF_Region_1.set('fieldAliases', {'Nom': 'Nom', });
lyr_Chef_Lieu_Region_2.set('fieldAliases', {'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', });
lyr_BF_Region_1.set('fieldImages', {'Nom': 'TextEdit', });
lyr_Chef_Lieu_Region_2.set('fieldImages', {'A': 'TextEdit', 'B': 'TextEdit', 'C': 'TextEdit', 'D': 'TextEdit', });
lyr_BF_Region_1.set('fieldLabels', {'Nom': 'no label', });
lyr_Chef_Lieu_Region_2.set('fieldLabels', {'A': 'no label', 'B': 'no label', 'C': 'no label', 'D': 'inline label - always visible', });
lyr_Chef_Lieu_Region_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});