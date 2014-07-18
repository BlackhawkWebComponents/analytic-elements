(function () {

    window.dashboards = [
        {
            name: 'Solr Dashboard',
            id: 'food',
            theme: 'green',
            global: {
                dateSelector: {
                    field:'manufacturedate_dt', op:'range', startDate: '2004-01-01', endDate: 'today'
                },
                query: {
                    where: [
                        {field:'cat',op:'equals',value:null},
                        {field:'manu_id_s',op:'equals',value:null}
                    ]
                }
            },
            analytics: [
                {
                    type: 'solr',
                    name: 'By Category',
                    chartType: 'Bar',
                    limit: 8,
                    target:'cat',
                    query: {
                        select: [{expr:'cat'}],
                        from: 'collection1'
                    }
                },
                {
                    type: 'solr',
                    name: 'By Manufacturer',
                    chartType: 'Doughnut',
                    limit: 8,
                    target:'manu_id_s',
                    query: {
                        select: [{expr:'manu_id_s'}],
                        from: 'collection1'
                    }
                },
                {
                    type: 'solr',
                    name: 'By Category',
                    chartType: 'Line',
                    limit: 8,
                    target:'cat',
                    query: {
                        select: [{expr:'cat'}],
                        from: 'collection1'
                    }
                }
            ]
        },
        {
            name: 'Iraq Events 2014',
            id: 'knowledge',
            theme: 'lightgrey',
            googleSignin: true,
            global: {
                query: {
                    where: [
                        {field:'actor1name',op:'equals',value:null},
                        {field:'quadclassdescription',op:'equals',value:null},
                        {field:'event',op:'equals',value:null},
                        {field:'actiongeo_fullname',op:'equals',value:null},
                        {field:'monthyear',op:'equals',value:null,type:'integer'},
                        {field:'actor1knowngroup',op:'equals',value:null},
                        {field:'actor1ethnic',op:'equals',value:null},
                        {field:'actor2name',op:'equals',value:null}
                    ]
                }
            },
            analytics: [
                {
                    type: 'bigquery',
                    name: 'By Actor 1',
                    chartType: 'Bar',
                    target:'actor1name',
                    query: {
                        select: [{expr:'top(actor1name, 10)', as:'actor1'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'actor1name',op:'isnotnull'}
                        ]
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Quad Class',
                    chartType: 'PolarArea',
                    showLegend: true,
                    target:'quadclassdescription',
                    query: {
                        select: [{expr:'top(quadclassdescription, 10)'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'quadclassdescription',op:'isnotnull'}
                        ]
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Event Type',
                    chartType: 'Pie',
                    showLegend: true,
                    target: 'event',
                    query: {
                        select: [{expr:'top(event, 10)'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'event',op:'isnotnull'}
                        ]
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Month',
                    chartType: 'Line',
                    target: 'monthyear',
                    query: {
                        select: [{expr:'monthyear'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'monthyear',op:'isnotnull'}
                        ],
                        groupBy: ['monthyear'],
                        orderBy: ['monthyear']
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Location',
                    chartType: 'Map',
                    limit: 25000,
                    query: {
                        select: [{expr:'actiongeo_lat', as:'lat'}, {expr:'actiongeo_long',as:'lon'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'actiongeo_lat',op:'isnotnull'},
                            {field:'actiongeo_long',op:'isnotnull'}
                        ]
                    },
                    map: {
                        lat:33.2193,
                        lon:43.6842,
                        zoom:5,
                        minZoom:5,
                        maxZoom:13,
                        mapTileUrl:"http://{s}.tiles.mapbox.com/v3/mapbox.iraq/{z}/{x}/{y}.png",
                        mapSourceUrl:"http://www.mapbox.com/about/maps/",
                        mapSource:"Terms &amp; Conditions",
                        heatmapMax:0.6
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Actor 1 Known Group',
                    chartType: 'Pie',
                    target:'actor1knowngroup',
                    showLegend: true,
                    query: {
                        select: [{expr:'top(actor1knowngroup, 10)'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'actor1knowngroup',op:'isnotnull'}
                        ]
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Actor 1 Ethnic',
                    chartType: 'Radar',
                    target:'actor1ethnic',
                    showLegend: true,
                    query: {
                        select: [{expr:'top(actor1ethnic, 10)'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'actor1ethnic',op:'isnotnull'}
                        ]
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Actor 2',
                    chartType: 'Bar',
                    target:'actor2name',
                    query: {
                        select: [{expr:'top(actor2name, 10)'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'actor2name',op:'isnotnull'}
                        ]
                    }
                }
            ]
        },
        {
            name: 'Test',
            id: 'history',
            theme: "blue",
            googleSignin: true,
            analytics: [{
                type: 'bigquery',
                name: 'By Location',
                chartType: 'Map',
                limit: 5000,
                query: {
                    select: [{expr:'actiongeo_lat', as:'lat'}, {expr:'actiongeo_long',as:'lon'}],
                    from: '[gdelt.iraq_events_2014]',
                    where: [
                        {field:'actiongeo_lat',op:'isnotnull'},
                        {field:'actiongeo_long',op:'isnotnull'}
                    ]
                }
            }]
        },
        {
            name: 'Dashboard 3',
            id: "geography",
            theme: "grey",
            analytics: []
        },
        {
            name: 'Dashboard 4',
            id: "science",
            theme: "green",
            analytics: []
        },
        {
            name: 'Dashboard 5',
            id: "tvmovies",
            theme: "grey",
            analytics: []
        },
        {
            name: 'Dashboard 6',
            id: "music",
            theme: "blue",
            analytics: []
        },
        {
            name: 'Dashboard 7',
            id: "entertainment",
            theme: "grey",
            analytics: []
        },
        {
            name: 'Dashboard Z',
            id: "sports",
            theme: "blue",
            analytics: []
        }
    ];

})();
