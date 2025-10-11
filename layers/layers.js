var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_plot_mrun__plot_1 = new ol.format.GeoJSON();
var features_plot_mrun__plot_1 = format_plot_mrun__plot_1.readFeatures(json_plot_mrun__plot_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot_mrun__plot_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot_mrun__plot_1.addFeatures(features_plot_mrun__plot_1);
var lyr_plot_mrun__plot_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plot_mrun__plot_1, 
                style: style_plot_mrun__plot_1,
                popuplayertitle: 'plot_mrun__plot',
                interactive: true,
                title: '<img src="styles/legend/plot_mrun__plot_1.png" /> plot_mrun__plot'
            });
var format_vegmrun_veg__openspace__open_2 = new ol.format.GeoJSON();
var features_vegmrun_veg__openspace__open_2 = format_vegmrun_veg__openspace__open_2.readFeatures(json_vegmrun_veg__openspace__open_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vegmrun_veg__openspace__open_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vegmrun_veg__openspace__open_2.addFeatures(features_vegmrun_veg__openspace__open_2);
var lyr_vegmrun_veg__openspace__open_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vegmrun_veg__openspace__open_2, 
                style: style_vegmrun_veg__openspace__open_2,
                popuplayertitle: 'veg — mrun_veg__openspace__open',
                interactive: true,
                title: '<img src="styles/legend/vegmrun_veg__openspace__open_2.png" /> veg — mrun_veg__openspace__open'
            });
var format_built__hot_building__mearg_3 = new ol.format.GeoJSON();
var features_built__hot_building__mearg_3 = format_built__hot_building__mearg_3.readFeatures(json_built__hot_building__mearg_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_built__hot_building__mearg_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_built__hot_building__mearg_3.addFeatures(features_built__hot_building__mearg_3);
var lyr_built__hot_building__mearg_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_built__hot_building__mearg_3, 
                style: style_built__hot_building__mearg_3,
                popuplayertitle: 'built__hot_building__mearg',
                interactive: true,
                title: '<img src="styles/legend/built__hot_building__mearg_3.png" /> built__hot_building__mearg'
            });
var format_neighbourhoodmrun_neighbourhood__neighbourhood_4 = new ol.format.GeoJSON();
var features_neighbourhoodmrun_neighbourhood__neighbourhood_4 = format_neighbourhoodmrun_neighbourhood__neighbourhood_4.readFeatures(json_neighbourhoodmrun_neighbourhood__neighbourhood_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_neighbourhoodmrun_neighbourhood__neighbourhood_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_neighbourhoodmrun_neighbourhood__neighbourhood_4.addFeatures(features_neighbourhoodmrun_neighbourhood__neighbourhood_4);
var lyr_neighbourhoodmrun_neighbourhood__neighbourhood_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_neighbourhoodmrun_neighbourhood__neighbourhood_4, 
                style: style_neighbourhoodmrun_neighbourhood__neighbourhood_4,
                popuplayertitle: 'neighbourhood — mrun_neighbourhood__neighbourhood',
                interactive: true,
                title: '<img src="styles/legend/neighbourhoodmrun_neighbourhood__neighbourhood_4.png" /> neighbourhood — mrun_neighbourhood__neighbourhood'
            });
var format_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5 = new ol.format.GeoJSON();
var features_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5 = format_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5.readFeatures(json_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5.addFeatures(features_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5);
var lyr_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5, 
                style: style_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5,
                popuplayertitle: 'open — mrun_op20250722t090825z1001__mrun_opmrun_veggpkg',
                interactive: true,
                title: '<img src="styles/legend/openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5.png" /> open — mrun_op20250722t090825z1001__mrun_opmrun_veggpkg'
            });
var format_roadmrun_road__roads_6 = new ol.format.GeoJSON();
var features_roadmrun_road__roads_6 = format_roadmrun_road__roads_6.readFeatures(json_roadmrun_road__roads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadmrun_road__roads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadmrun_road__roads_6.addFeatures(features_roadmrun_road__roads_6);
var lyr_roadmrun_road__roads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadmrun_road__roads_6, 
                style: style_roadmrun_road__roads_6,
                popuplayertitle: 'road — mrun_road__roads',
                interactive: true,
                title: '<img src="styles/legend/roadmrun_road__roads_6.png" /> road — mrun_road__roads'
            });
var format_vegetation__mrun_vegetation_7 = new ol.format.GeoJSON();
var features_vegetation__mrun_vegetation_7 = format_vegetation__mrun_vegetation_7.readFeatures(json_vegetation__mrun_vegetation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vegetation__mrun_vegetation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vegetation__mrun_vegetation_7.addFeatures(features_vegetation__mrun_vegetation_7);
var lyr_vegetation__mrun_vegetation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vegetation__mrun_vegetation_7, 
                style: style_vegetation__mrun_vegetation_7,
                popuplayertitle: 'vegetation__mrun_vegetation',
                interactive: true,
                title: '<img src="styles/legend/vegetation__mrun_vegetation_7.png" /> vegetation__mrun_vegetation'
            });

lyr_Positronretina_0.setVisible(true);lyr_plot_mrun__plot_1.setVisible(true);lyr_vegmrun_veg__openspace__open_2.setVisible(true);lyr_built__hot_building__mearg_3.setVisible(true);lyr_neighbourhoodmrun_neighbourhood__neighbourhood_4.setVisible(true);lyr_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5.setVisible(true);lyr_roadmrun_road__roads_6.setVisible(true);lyr_vegetation__mrun_vegetation_7.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_plot_mrun__plot_1,lyr_vegmrun_veg__openspace__open_2,lyr_built__hot_building__mearg_3,lyr_neighbourhoodmrun_neighbourhood__neighbourhood_4,lyr_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5,lyr_roadmrun_road__roads_6,lyr_vegetation__mrun_vegetation_7];
lyr_plot_mrun__plot_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'survey_no': 'survey_no', 'land_use': 'land_use', 'area': 'area', 'fsi': 'fsi', 'con_site': 'con_site', 'id_0': 'id_0', });
lyr_vegmrun_veg__openspace__open_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'plot_no': 'plot_no', 'area': 'area', 'type': 'type', });
lyr_built__hot_building__mearg_3.set('fieldAliases', {'fid': 'fid', 'bldg_use': 'bldg_use', 'bldg_area': 'bldg_area', 'bldg_clr': 'bldg_clr', 'wall_ml': 'wall_ml', 'cool_sys': 'cool_sys', 'roof_ml': 'roof_ml', 'bldg_fp': 'bldg_fp', 'bldg_ht': 'bldg_ht', 'bldg_flr': 'bldg_flr', 'layer': 'layer', 'path': 'path', 'no_hh': 'no_hh', 'bldg_cond': 'bldg_cond', });
lyr_neighbourhoodmrun_neighbourhood__neighbourhood_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'typo': 'typo', 'area': 'area', 'no_bldg': 'no_bldg', 'pop': 'pop', 'density': 'density', 'id': 'id', });
lyr_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'plot_no': 'plot_no', 'area': 'area', 'type': 'type', });
lyr_roadmrun_road__roads_6.set('fieldAliases', {'fid': 'fid', 'ro_ml': 'ro_ml', 'ro_width': 'ro_width', });
lyr_vegetation__mrun_vegetation_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'species': 'species', 'girth_rad': 'girth_rad', 'crown_rad': 'crown_rad', 'flaura_typ': 'flaura_typ', });
lyr_plot_mrun__plot_1.set('fieldImages', {'fid': '', 'id': '', 'survey_no': '', 'land_use': '', 'area': '', 'fsi': '', 'con_site': '', 'id_0': '', });
lyr_vegmrun_veg__openspace__open_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'plot_no': 'TextEdit', 'area': 'TextEdit', 'type': 'TextEdit', });
lyr_built__hot_building__mearg_3.set('fieldImages', {'fid': 'TextEdit', 'bldg_use': 'TextEdit', 'bldg_area': 'TextEdit', 'bldg_clr': 'TextEdit', 'wall_ml': 'TextEdit', 'cool_sys': 'TextEdit', 'roof_ml': 'TextEdit', 'bldg_fp': 'TextEdit', 'bldg_ht': 'Range', 'bldg_flr': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'no_hh': 'TextEdit', 'bldg_cond': 'TextEdit', });
lyr_neighbourhoodmrun_neighbourhood__neighbourhood_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'typo': 'TextEdit', 'area': 'TextEdit', 'no_bldg': 'TextEdit', 'pop': 'TextEdit', 'density': 'TextEdit', 'id': 'TextEdit', });
lyr_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'plot_no': 'TextEdit', 'area': 'TextEdit', 'type': 'TextEdit', });
lyr_roadmrun_road__roads_6.set('fieldImages', {'fid': '', 'ro_ml': '', 'ro_width': '', });
lyr_vegetation__mrun_vegetation_7.set('fieldImages', {'fid': '', 'id': '', 'osm_id': '', 'name': '', 'species': '', 'girth_rad': '', 'crown_rad': '', 'flaura_typ': '', });
lyr_plot_mrun__plot_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'survey_no': 'no label', 'land_use': 'no label', 'area': 'no label', 'fsi': 'no label', 'con_site': 'no label', 'id_0': 'no label', });
lyr_vegmrun_veg__openspace__open_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'plot_no': 'no label', 'area': 'no label', 'type': 'no label', });
lyr_built__hot_building__mearg_3.set('fieldLabels', {'fid': 'no label', 'bldg_use': 'no label', 'bldg_area': 'no label', 'bldg_clr': 'no label', 'wall_ml': 'no label', 'cool_sys': 'no label', 'roof_ml': 'no label', 'bldg_fp': 'no label', 'bldg_ht': 'no label', 'bldg_flr': 'no label', 'layer': 'no label', 'path': 'no label', 'no_hh': 'no label', 'bldg_cond': 'no label', });
lyr_neighbourhoodmrun_neighbourhood__neighbourhood_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'typo': 'no label', 'area': 'no label', 'no_bldg': 'no label', 'pop': 'no label', 'density': 'no label', 'id': 'no label', });
lyr_openmrun_op20250722t090825z1001__mrun_opmrun_veggpkg_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'plot_no': 'no label', 'area': 'no label', 'type': 'no label', });
lyr_roadmrun_road__roads_6.set('fieldLabels', {'fid': 'no label', 'ro_ml': 'no label', 'ro_width': 'no label', });
lyr_vegetation__mrun_vegetation_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'species': 'no label', 'girth_rad': 'no label', 'crown_rad': 'no label', 'flaura_typ': 'no label', });
lyr_vegetation__mrun_vegetation_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});