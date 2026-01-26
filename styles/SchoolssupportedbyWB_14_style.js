var size = 0;
var placement = 'point';
function categories_SchoolssupportedbyWB_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Full Support - Hostel+SWASH':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [2035, 2016],
                  scale: 0.007371007371007371,
                  anchor: [1017.5, 1008.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/school 2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Full Support - Hostel+SWASH+D4E':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [2035, 2016],
                  scale: 0.007371007371007371,
                  anchor: [1017.5, 1008.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/school 2_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SWASH+D4E':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [2035, 2016],
                  scale: 0.007371007371007371,
                  anchor: [1017.5, 1008.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/school.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SWASH+Other support':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [2035, 2016],
                  scale: 0.007371007371007371,
                  anchor: [1017.5, 1008.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/school_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SchoolssupportedbyWB_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Supported");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_SchoolssupportedbyWB_14(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
