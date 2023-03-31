var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_Parcours_1 = new ol.format.GeoJSON();
var features_Parcours_1 = format_Parcours_1.readFeatures(json_Parcours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcours_1.addFeatures(features_Parcours_1);
var lyr_Parcours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcours_1, 
                style: style_Parcours_1,
                interactive: true,
                title: '<img src="styles/legend/Parcours_1.png" /> Parcours'
            });
var format_nom_oiseaux_RomainGillet_MorganCanovas_2 = new ol.format.GeoJSON();
var features_nom_oiseaux_RomainGillet_MorganCanovas_2 = format_nom_oiseaux_RomainGillet_MorganCanovas_2.readFeatures(json_nom_oiseaux_RomainGillet_MorganCanovas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseaux_RomainGillet_MorganCanovas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseaux_RomainGillet_MorganCanovas_2.addFeatures(features_nom_oiseaux_RomainGillet_MorganCanovas_2);
var lyr_nom_oiseaux_RomainGillet_MorganCanovas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseaux_RomainGillet_MorganCanovas_2, 
                style: style_nom_oiseaux_RomainGillet_MorganCanovas_2,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseaux_RomainGillet_MorganCanovas_2.png" /> nom_oiseaux_RomainGillet_MorganCanovas'
            });
var format_points_ecoute_3 = new ol.format.GeoJSON();
var features_points_ecoute_3 = format_points_ecoute_3.readFeatures(json_points_ecoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_ecoute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_ecoute_3.addFeatures(features_points_ecoute_3);
var lyr_points_ecoute_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_ecoute_3, 
                style: style_points_ecoute_3,
                interactive: true,
                title: '<img src="styles/legend/points_ecoute_3.png" /> points_ecoute'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_Parcours_1.setVisible(true);lyr_nom_oiseaux_RomainGillet_MorganCanovas_2.setVisible(true);lyr_points_ecoute_3.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_Parcours_1,lyr_nom_oiseaux_RomainGillet_MorganCanovas_2,lyr_points_ecoute_3];
lyr_Parcours_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_nom_oiseaux_RomainGillet_MorganCanovas_2.set('fieldAliases', {'nom_oiseau': 'nom_oiseau', 'nb_oiseau': 'nb_oiseau', 'contact': 'contact', });
lyr_points_ecoute_3.set('fieldAliases', {'Num_point': 'Num_point', });
lyr_Parcours_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_nom_oiseaux_RomainGillet_MorganCanovas_2.set('fieldImages', {'nom_oiseau': 'TextEdit', 'nb_oiseau': 'TextEdit', 'contact': 'TextEdit', });
lyr_points_ecoute_3.set('fieldImages', {'Num_point': 'Range', });
lyr_Parcours_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_nom_oiseaux_RomainGillet_MorganCanovas_2.set('fieldLabels', {'nom_oiseau': 'header label', 'nb_oiseau': 'header label', 'contact': 'header label', });
lyr_points_ecoute_3.set('fieldLabels', {'Num_point': 'header label', });
lyr_points_ecoute_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});