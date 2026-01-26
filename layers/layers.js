var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.409000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NeighbouringCountries_1 = new ol.format.GeoJSON();
var features_NeighbouringCountries_1 = format_NeighbouringCountries_1.readFeatures(json_NeighbouringCountries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeighbouringCountries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeighbouringCountries_1.addFeatures(features_NeighbouringCountries_1);
var lyr_NeighbouringCountries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeighbouringCountries_1, 
                style: style_NeighbouringCountries_1,
                popuplayertitle: 'Neighbouring Countries',
                interactive: true,
                title: '<img src="styles/legend/NeighbouringCountries_1.png" /> Neighbouring Countries'
            });
var format_OtherregionsofTanzania_2 = new ol.format.GeoJSON();
var features_OtherregionsofTanzania_2 = format_OtherregionsofTanzania_2.readFeatures(json_OtherregionsofTanzania_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherregionsofTanzania_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherregionsofTanzania_2.addFeatures(features_OtherregionsofTanzania_2);
var lyr_OtherregionsofTanzania_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OtherregionsofTanzania_2, 
                style: style_OtherregionsofTanzania_2,
                popuplayertitle: 'Other regions of Tanzania',
                interactive: false,
                title: '<img src="styles/legend/OtherregionsofTanzania_2.png" /> Other regions of Tanzania'
            });
var format_MajorLakes_3 = new ol.format.GeoJSON();
var features_MajorLakes_3 = format_MajorLakes_3.readFeatures(json_MajorLakes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorLakes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorLakes_3.addFeatures(features_MajorLakes_3);
var lyr_MajorLakes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorLakes_3, 
                style: style_MajorLakes_3,
                popuplayertitle: 'Major Lakes',
                interactive: false,
                title: '<img src="styles/legend/MajorLakes_3.png" /> Major Lakes'
            });
var format_Lakefix_4 = new ol.format.GeoJSON();
var features_Lakefix_4 = format_Lakefix_4.readFeatures(json_Lakefix_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lakefix_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lakefix_4.addFeatures(features_Lakefix_4);
var lyr_Lakefix_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lakefix_4, 
                style: style_Lakefix_4,
                popuplayertitle: 'Lake fix',
                interactive: false,
                title: '<img src="styles/legend/Lakefix_4.png" /> Lake fix'
            });
var format_WBInterventionDistricts_5 = new ol.format.GeoJSON();
var features_WBInterventionDistricts_5 = format_WBInterventionDistricts_5.readFeatures(json_WBInterventionDistricts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBInterventionDistricts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBInterventionDistricts_5.addFeatures(features_WBInterventionDistricts_5);
var lyr_WBInterventionDistricts_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBInterventionDistricts_5, 
                style: style_WBInterventionDistricts_5,
                popuplayertitle: 'WB Intervention Districts',
                interactive: false,
                title: '<img src="styles/legend/WBInterventionDistricts_5.png" /> WB Intervention Districts'
            });
var format_LakeTanganyikaTzside_6 = new ol.format.GeoJSON();
var features_LakeTanganyikaTzside_6 = format_LakeTanganyikaTzside_6.readFeatures(json_LakeTanganyikaTzside_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LakeTanganyikaTzside_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LakeTanganyikaTzside_6.addFeatures(features_LakeTanganyikaTzside_6);
var lyr_LakeTanganyikaTzside_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LakeTanganyikaTzside_6, 
                style: style_LakeTanganyikaTzside_6,
                popuplayertitle: 'Lake Tanganyika Tz side',
                interactive: false,
                title: '<img src="styles/legend/LakeTanganyikaTzside_6.png" /> Lake Tanganyika Tz side'
            });
var format_Waterbodies_7 = new ol.format.GeoJSON();
var features_Waterbodies_7 = format_Waterbodies_7.readFeatures(json_Waterbodies_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_7.addFeatures(features_Waterbodies_7);
var lyr_Waterbodies_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_7, 
                style: style_Waterbodies_7,
                popuplayertitle: 'Water bodies',
                interactive: false,
                title: '<img src="styles/legend/Waterbodies_7.png" /> Water bodies'
            });
var format_WaterLines_8 = new ol.format.GeoJSON();
var features_WaterLines_8 = format_WaterLines_8.readFeatures(json_WaterLines_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLines_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLines_8.addFeatures(features_WaterLines_8);
var lyr_WaterLines_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterLines_8, 
                style: style_WaterLines_8,
                popuplayertitle: 'Water Lines',
                interactive: false,
                title: '<img src="styles/legend/WaterLines_8.png" /> Water Lines'
            });
var format_KigomaDistricts_9 = new ol.format.GeoJSON();
var features_KigomaDistricts_9 = format_KigomaDistricts_9.readFeatures(json_KigomaDistricts_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KigomaDistricts_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KigomaDistricts_9.addFeatures(features_KigomaDistricts_9);
var lyr_KigomaDistricts_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KigomaDistricts_9, 
                style: style_KigomaDistricts_9,
                popuplayertitle: 'Kigoma Districts',
                interactive: false,
                title: '<img src="styles/legend/KigomaDistricts_9.png" /> Kigoma Districts'
            });
var format_KasuluDC_10 = new ol.format.GeoJSON();
var features_KasuluDC_10 = format_KasuluDC_10.readFeatures(json_KasuluDC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KasuluDC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KasuluDC_10.addFeatures(features_KasuluDC_10);
var lyr_KasuluDC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KasuluDC_10, 
                style: style_KasuluDC_10,
                popuplayertitle: 'Kasulu DC',
                interactive: false,
                title: '<img src="styles/legend/KasuluDC_10.png" /> Kasulu DC'
            });
var format_KigomaRegionBoarder_11 = new ol.format.GeoJSON();
var features_KigomaRegionBoarder_11 = format_KigomaRegionBoarder_11.readFeatures(json_KigomaRegionBoarder_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KigomaRegionBoarder_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KigomaRegionBoarder_11.addFeatures(features_KigomaRegionBoarder_11);
var lyr_KigomaRegionBoarder_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KigomaRegionBoarder_11, 
                style: style_KigomaRegionBoarder_11,
                popuplayertitle: 'Kigoma Region Boarder',
                interactive: false,
                title: '<img src="styles/legend/KigomaRegionBoarder_11.png" /> Kigoma Region Boarder'
            });
var format_MainRoads_12 = new ol.format.GeoJSON();
var features_MainRoads_12 = format_MainRoads_12.readFeatures(json_MainRoads_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRoads_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainRoads_12.addFeatures(features_MainRoads_12);
var lyr_MainRoads_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainRoads_12, 
                style: style_MainRoads_12,
                popuplayertitle: 'Main Roads',
                interactive: false,
                title: '<img src="styles/legend/MainRoads_12.png" /> Main Roads'
            });
var format_Towncentres_13 = new ol.format.GeoJSON();
var features_Towncentres_13 = format_Towncentres_13.readFeatures(json_Towncentres_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Towncentres_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towncentres_13.addFeatures(features_Towncentres_13);
var lyr_Towncentres_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Towncentres_13, 
                style: style_Towncentres_13,
                popuplayertitle: 'Town centres',
                interactive: false,
                title: 'Town centres'
            });
var format_SchoolssupportedbyWB_14 = new ol.format.GeoJSON();
var features_SchoolssupportedbyWB_14 = format_SchoolssupportedbyWB_14.readFeatures(json_SchoolssupportedbyWB_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchoolssupportedbyWB_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolssupportedbyWB_14.addFeatures(features_SchoolssupportedbyWB_14);
var lyr_SchoolssupportedbyWB_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchoolssupportedbyWB_14, 
                style: style_SchoolssupportedbyWB_14,
                popuplayertitle: 'Schools supported by WB',
                interactive: true,
    title: 'Schools supported by WB<br />\
    <img src="styles/legend/SchoolssupportedbyWB_14_0.png" /> Full Support - Hostel+SWASH<br />\
    <img src="styles/legend/SchoolssupportedbyWB_14_1.png" /> Full Support - Hostel+SWASH+D4E<br />\
    <img src="styles/legend/SchoolssupportedbyWB_14_2.png" /> SWASH+D4E<br />\
    <img src="styles/legend/SchoolssupportedbyWB_14_3.png" /> SWASH+Other support<br />' });
var format_Bridges_15 = new ol.format.GeoJSON();
var features_Bridges_15 = format_Bridges_15.readFeatures(json_Bridges_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bridges_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridges_15.addFeatures(features_Bridges_15);
var lyr_Bridges_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bridges_15, 
                style: style_Bridges_15,
                popuplayertitle: 'Bridges',
                interactive: true,
                title: '<img src="styles/legend/Bridges_15.png" /> Bridges'
            });
var format_TVETCentres_16 = new ol.format.GeoJSON();
var features_TVETCentres_16 = format_TVETCentres_16.readFeatures(json_TVETCentres_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TVETCentres_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TVETCentres_16.addFeatures(features_TVETCentres_16);
var lyr_TVETCentres_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TVETCentres_16, 
                style: style_TVETCentres_16,
                popuplayertitle: 'TVET Centres',
                interactive: true,
                title: '<img src="styles/legend/TVETCentres_16.png" /> TVET Centres'
            });
var format_RoadsideMarkets_17 = new ol.format.GeoJSON();
var features_RoadsideMarkets_17 = format_RoadsideMarkets_17.readFeatures(json_RoadsideMarkets_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsideMarkets_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsideMarkets_17.addFeatures(features_RoadsideMarkets_17);
var lyr_RoadsideMarkets_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsideMarkets_17, 
                style: style_RoadsideMarkets_17,
                popuplayertitle: 'Roadside Markets',
                interactive: true,
                title: '<img src="styles/legend/RoadsideMarkets_17.png" /> Roadside Markets'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_NeighbouringCountries_1.setVisible(true);lyr_OtherregionsofTanzania_2.setVisible(true);lyr_MajorLakes_3.setVisible(true);lyr_Lakefix_4.setVisible(true);lyr_WBInterventionDistricts_5.setVisible(true);lyr_LakeTanganyikaTzside_6.setVisible(true);lyr_Waterbodies_7.setVisible(true);lyr_WaterLines_8.setVisible(true);lyr_KigomaDistricts_9.setVisible(true);lyr_KasuluDC_10.setVisible(true);lyr_KigomaRegionBoarder_11.setVisible(true);lyr_MainRoads_12.setVisible(true);lyr_Towncentres_13.setVisible(true);lyr_SchoolssupportedbyWB_14.setVisible(true);lyr_Bridges_15.setVisible(true);lyr_TVETCentres_16.setVisible(true);lyr_RoadsideMarkets_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NeighbouringCountries_1,lyr_OtherregionsofTanzania_2,lyr_MajorLakes_3,lyr_Lakefix_4,lyr_WBInterventionDistricts_5,lyr_LakeTanganyikaTzside_6,lyr_Waterbodies_7,lyr_WaterLines_8,lyr_KigomaDistricts_9,lyr_KasuluDC_10,lyr_KigomaRegionBoarder_11,lyr_MainRoads_12,lyr_Towncentres_13,lyr_SchoolssupportedbyWB_14,lyr_Bridges_15,lyr_TVETCentres_16,lyr_RoadsideMarkets_17];
lyr_NeighbouringCountries_1.set('fieldAliases', {'ADM0_CODE': 'ADM0_CODE', 'ADM0_NAME': 'Country Name', 'ISO3': 'ISO Code', });
lyr_OtherregionsofTanzania_2.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_MajorLakes_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Lakefix_4.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_WBInterventionDistricts_5.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_LakeTanganyikaTzside_6.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Waterbodies_7.set('fieldAliases', {'osm_id': 'osm_id', 'width': 'width', 'depth': 'depth', 'water': 'water', 'source': 'source', 'tunnel': 'tunnel', 'natural': 'natural', 'layer': 'layer', 'covered': 'covered', 'name': 'name', 'waterway': 'waterway', 'blockage': 'blockage', });
lyr_WaterLines_8.set('fieldAliases', {'osm_id': 'osm_id', 'width': 'width', 'depth': 'depth', 'water': 'water', 'source': 'source', 'tunnel': 'tunnel', 'natural': 'natural', 'layer': 'layer', 'covered': 'covered', 'name': 'name', 'waterway': 'waterway', 'blockage': 'blockage', });
lyr_KigomaDistricts_9.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KasuluDC_10.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KigomaRegionBoarder_11.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_MainRoads_12.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'maxspeed': 'maxspeed', });
lyr_Towncentres_13.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'population': 'population', });
lyr_SchoolssupportedbyWB_14.set('fieldAliases', {'FID': 'FID', 'Name': 'Name', 'Name_': 'Name_', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Female_Stu': 'Female Students', 'Male_Stude': 'Male Students', 'Female_Tea': 'Female_Tea', 'Male_Tea': 'Male_Tea', 'Region_Nam': 'Region', 'District': 'District', 'Ward': 'Ward', 'Division': 'Division', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Supported': 'Support', 'Support_scope': 'Support Level', 'Students': 'Students', 'Construction': 'Construction', 'SWASH': 'SWASH', 'Overall': 'Overall', 'done': 'done', 'not_done': 'not_done', });
lyr_Bridges_15.set('fieldAliases', {'Wad Name': 'Ward', 'District': 'District', '10.Location of school': 'Location', 'Location of bridge_latitude': 'Location of bridge_latitude', 'Location of bridge_longitude': 'Location of bridge_longitude', 'Location of bridge_altitude': 'Location of bridge_altitude', 'Location of bridge_precision': 'Location of bridge_precision', });
lyr_TVETCentres_16.set('fieldAliases', {'FID': 'FID', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Female_Stu': 'Female_Stu', 'Male_Stude': 'Male_Stude', 'Female_Tea': 'Female_Tea', 'Male_Tea': 'Male_Tea', 'Region_Nam': 'Region', 'District_N': 'District', 'Ward_Name': 'Ward', 'Division': 'Division', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RoadsideMarkets_17.set('fieldAliases', {'S/N': 'S/N', 'Name': 'Name:', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'No of buildings': 'No of buildings', '# Toilets': '# Toilets', 'No of section': 'No of section', '# of ppl per section': '# of ppl per section', 'No users': 'No users', });
lyr_NeighbouringCountries_1.set('fieldImages', {'ADM0_CODE': 'Hidden', 'ADM0_NAME': 'TextEdit', 'ISO3': 'TextEdit', });
lyr_OtherregionsofTanzania_2.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_MajorLakes_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Lakefix_4.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_WBInterventionDistricts_5.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_LakeTanganyikaTzside_6.set('fieldImages', {'GID_2': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'NAME_2': '', 'VARNAME_2': '', 'NL_NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'CC_2': '', 'HASC_2': '', });
lyr_Waterbodies_7.set('fieldImages', {'osm_id': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'layer': 'TextEdit', 'covered': 'TextEdit', 'name': 'TextEdit', 'waterway': 'TextEdit', 'blockage': 'TextEdit', });
lyr_WaterLines_8.set('fieldImages', {'osm_id': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'layer': 'TextEdit', 'covered': 'TextEdit', 'name': 'TextEdit', 'waterway': 'TextEdit', 'blockage': 'TextEdit', });
lyr_KigomaDistricts_9.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KasuluDC_10.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KigomaRegionBoarder_11.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_MainRoads_12.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'tunnel': 'Range', 'maxspeed': 'Range', });
lyr_Towncentres_13.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'population': 'TextEdit', });
lyr_SchoolssupportedbyWB_14.set('fieldImages', {'FID': 'Hidden', 'Name': 'TextEdit', 'Name_': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Female_Stu': 'TextEdit', 'Male_Stude': 'TextEdit', 'Female_Tea': 'Hidden', 'Male_Tea': 'Hidden', 'Region_Nam': 'TextEdit', 'District': 'TextEdit', 'Ward': 'TextEdit', 'Division': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Supported': 'TextEdit', 'Support_scope': 'Range', 'Students': 'Range', 'Construction': 'TextEdit', 'SWASH': 'TextEdit', 'Overall': 'TextEdit', 'done': 'Hidden', 'not_done': 'Hidden', });
lyr_Bridges_15.set('fieldImages', {'Wad Name': 'TextEdit', 'District': 'TextEdit', '10.Location of school': 'TextEdit', 'Location of bridge_latitude': 'Hidden', 'Location of bridge_longitude': 'Hidden', 'Location of bridge_altitude': 'Hidden', 'Location of bridge_precision': 'Hidden', });
lyr_TVETCentres_16.set('fieldImages', {'FID': 'Hidden', 'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Female_Stu': 'Hidden', 'Male_Stude': 'Hidden', 'Female_Tea': 'Hidden', 'Male_Tea': 'Hidden', 'Region_Nam': 'TextEdit', 'District_N': 'TextEdit', 'Ward_Name': 'TextEdit', 'Division': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_RoadsideMarkets_17.set('fieldImages', {'S/N': 'Hidden', 'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'No of buildings': 'Range', '# Toilets': 'Hidden', 'No of section': 'Range', '# of ppl per section': 'Hidden', 'No users': 'Range', });
lyr_NeighbouringCountries_1.set('fieldLabels', {'ADM0_NAME': 'inline label - always visible', 'ISO3': 'inline label - always visible', });
lyr_OtherregionsofTanzania_2.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_MajorLakes_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Lakefix_4.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_WBInterventionDistricts_5.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_LakeTanganyikaTzside_6.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Waterbodies_7.set('fieldLabels', {'osm_id': 'no label', 'width': 'no label', 'depth': 'no label', 'water': 'no label', 'source': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'layer': 'no label', 'covered': 'no label', 'name': 'no label', 'waterway': 'no label', 'blockage': 'no label', });
lyr_WaterLines_8.set('fieldLabels', {'osm_id': 'no label', 'width': 'no label', 'depth': 'no label', 'water': 'no label', 'source': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'layer': 'no label', 'covered': 'no label', 'name': 'no label', 'waterway': 'no label', 'blockage': 'no label', });
lyr_KigomaDistricts_9.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KasuluDC_10.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KigomaRegionBoarder_11.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_MainRoads_12.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'maxspeed': 'no label', });
lyr_Towncentres_13.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'population': 'no label', });
lyr_SchoolssupportedbyWB_14.set('fieldLabels', {'Name': 'inline label - always visible', 'Female_Stu': 'inline label - always visible', 'Male_Stude': 'inline label - always visible', 'Region_Nam': 'inline label - always visible', 'District': 'inline label - always visible', 'Ward': 'inline label - always visible', 'Supported': 'inline label - always visible', 'Support_scope': 'inline label - always visible', 'Students': 'inline label - always visible', 'Construction': 'inline label - always visible', 'SWASH': 'inline label - always visible', 'Overall': 'inline label - always visible', });
lyr_Bridges_15.set('fieldLabels', {'Wad Name': 'inline label - always visible', 'District': 'inline label - always visible', '10.Location of school': 'inline label - always visible', });
lyr_TVETCentres_16.set('fieldLabels', {'Name': 'inline label - always visible', 'Region_Nam': 'inline label - always visible', 'District_N': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', });
lyr_RoadsideMarkets_17.set('fieldLabels', {'Name': 'inline label - always visible', 'No of buildings': 'inline label - always visible', 'No of section': 'inline label - always visible', 'No users': 'inline label - always visible', });
lyr_RoadsideMarkets_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});