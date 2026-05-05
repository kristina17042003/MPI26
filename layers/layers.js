var wms_layers = [];


        var lyr_ORTOfreemap_0 = new ol.layer.Tile({
            'title': 'ORTO - freemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ofmozaika.tiles.freemap.sk/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Kraj_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_administrativne_hranice_wms_featureinfo/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Kraj',
                            popuplayertitle: 'Kraj',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kraj_2, 0]);
var format_2020_3 = new ol.format.GeoJSON();
var features_2020_3 = format_2020_3.readFeatures(json_2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_3.addFeatures(features_2020_3);
var lyr_2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_3, 
                style: style_2020_3,
                popuplayertitle: '2020',
                interactive: true,
    title: '2020<br />\
    <img src="styles/legend/2020_3_0.png" /> bočná<br />\
    <img src="styles/legend/2020_3_1.png" /> čelná<br />\
    <img src="styles/legend/2020_3_2.png" /> Havária<br />\
    <img src="styles/legend/2020_3_3.png" /> Iný druh nehody<br />\
    <img src="styles/legend/2020_3_4.png" /> nejde o zrážku idúcich vozidiel<br />\
    <img src="styles/legend/2020_3_5.png" /> nie<br />\
    <img src="styles/legend/2020_3_6.png" /> zboku (v kolmom nebo šikmom smere)<br />\
    <img src="styles/legend/2020_3_7.png" /> zozadu<br />\
    <img src="styles/legend/2020_3_8.png" /> Zrážka s domácim zvieraťom<br />\
    <img src="styles/legend/2020_3_9.png" /> Zrážka s chodcom<br />\
    <img src="styles/legend/2020_3_10.png" /> Zrážka s idúcim nekoľajovým vozidlom<br />\
    <img src="styles/legend/2020_3_11.png" /> Zrážka s lesnou zverou<br />\
    <img src="styles/legend/2020_3_12.png" /> Zrážka s pevnou prekážkou<br />\
    <img src="styles/legend/2020_3_13.png" /> Zrážka s vlakom<br />\
    <img src="styles/legend/2020_3_14.png" /> Zrážka so zaparkovaným, odstaveným vozidlom<br />\
    <img src="styles/legend/2020_3_15.png" /> <br />' });
var group_NEHODY = new ol.layer.Group({
                                layers: [lyr_2020_3,],
                                fold: 'open',
                                title: 'NEHODY'});
var group_HRANICE = new ol.layer.Group({
                                layers: [lyr_Kraj_2,],
                                fold: 'open',
                                title: 'HRANICE'});
var group_Podklad = new ol.layer.Group({
                                layers: [lyr_ORTOfreemap_0,lyr_OpenStreetMap_1,],
                                fold: 'open',
                                title: 'Podklad'});

lyr_ORTOfreemap_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_Kraj_2.setVisible(true);lyr_2020_3.setVisible(true);
var layersList = [group_Podklad,group_HRANICE,group_NEHODY];
lyr_2020_3.set('fieldAliases', {'Dátum': 'Dátum', 'Kód.dopravnej.nehody': 'Kód.dopravnej.nehody', 'Rok': 'Rok', 'Čas': 'Čas', 'Okres': 'Okres', 'Číslo.cesty': 'Číslo.cesty', 'Lokalita.dopravnej.nehody': 'Lokalita.dopravnej.nehody', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'Kilometrovníkové.staničenie.dopravnej.nehody', 'Smerové.pomery': 'Smerové.pomery', 'Druh.nehody': 'Druh.nehody', 'Zrážka.vozidiel': 'Zrážka.vozidiel', 'Zavinenie.nehody': 'Zavinenie.nehody', 'Prítomnosť.alkoholu': 'Prítomnosť.alkoholu', 'Počet.zúčastnených.vozidiel': 'Počet.zúčastnených.vozidiel', 'Hlavná.príčina.nehody': 'Hlavná.príčina.nehody', 'Usmrtení': 'Usmrtení', 'Ťažko.zranení': 'Ťažko.zranení', 'Ľahko.zranení': 'Ľahko.zranení', 'Celková.hmotná.škoda': 'Celková.hmotná.škoda', 'Zemepisná.dĺžka': 'Zemepisná.dĺžka', 'Zemepisná.šírka': 'Zemepisná.šírka', });
lyr_2020_3.set('fieldImages', {'Dátum': 'TextEdit', 'Kód.dopravnej.nehody': 'TextEdit', 'Rok': 'Range', 'Čas': 'DateTime', 'Okres': 'TextEdit', 'Číslo.cesty': 'TextEdit', 'Lokalita.dopravnej.nehody': 'TextEdit', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'TextEdit', 'Smerové.pomery': 'TextEdit', 'Druh.nehody': 'TextEdit', 'Zrážka.vozidiel': 'TextEdit', 'Zavinenie.nehody': 'TextEdit', 'Prítomnosť.alkoholu': 'TextEdit', 'Počet.zúčastnených.vozidiel': 'Range', 'Hlavná.príčina.nehody': 'TextEdit', 'Usmrtení': 'TextEdit', 'Ťažko.zranení': 'TextEdit', 'Ľahko.zranení': 'TextEdit', 'Celková.hmotná.škoda': 'TextEdit', 'Zemepisná.dĺžka': 'TextEdit', 'Zemepisná.šírka': 'TextEdit', });
lyr_2020_3.set('fieldLabels', {'Dátum': 'no label', 'Kód.dopravnej.nehody': 'no label', 'Rok': 'no label', 'Čas': 'no label', 'Okres': 'no label', 'Číslo.cesty': 'no label', 'Lokalita.dopravnej.nehody': 'no label', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'no label', 'Smerové.pomery': 'no label', 'Druh.nehody': 'inline label - always visible', 'Zrážka.vozidiel': 'no label', 'Zavinenie.nehody': 'no label', 'Prítomnosť.alkoholu': 'no label', 'Počet.zúčastnených.vozidiel': 'no label', 'Hlavná.príčina.nehody': 'no label', 'Usmrtení': 'no label', 'Ťažko.zranení': 'no label', 'Ľahko.zranení': 'no label', 'Celková.hmotná.škoda': 'no label', 'Zemepisná.dĺžka': 'no label', 'Zemepisná.šírka': 'no label', });
lyr_2020_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});