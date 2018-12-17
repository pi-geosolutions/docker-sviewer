customConfig = {
    title: 'geOrchestra mobile',

    /**
     * force default language, see etc/i18n.js
     */
    // lang: 'fr',

    /**
     * base url of the geOrchetra SDI. Layers coming from this SDI
     * will have enhanced features.
     * DOCKERCONF_* are placeholders for environment variables
     */
    geOrchestraBaseUrl: 'DOCKERCONF_DNAME',

    /**
     * projection
     */
    projcode: 'EPSG:3857',

    /**
     * map bounds
     */
    initialExtent: [DOCKERCONF_INITIALEXTENT],
    maxExtent: [DOCKERCONF_MAXEXTENT],
    restrictedExtent: [DOCKERCONF_RESTRICTEDEXTENT],

    /**
     * getFeatureInfo control
     */
    maxFeatures: DOCKERCONF_MAXFEATURES,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',

    /**
     * openLS control
     */
    //openLSGeocodeUrl: "http://gpp3-wxs.ign.fr/[CLEF GEOPORTAIL]/geoportail/ols?",

    /**
     * background layers (EPSG:3857)
     */
    layersBackground: [
        new ol.layer.Tile({
              source: new ol.source.OSM()
        })
    ],

    /**
     * social media links (prefixes)
     */
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};
