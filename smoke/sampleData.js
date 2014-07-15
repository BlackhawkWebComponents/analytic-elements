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
                        {field:'monthyear',op:'equals',value:null,type:'integer'}
                    ]
                }
            },
            analytics: [
                {
                    type: 'bigquery',
                    name: 'By Actor 1',
                    chartType: 'Bar',
                    limit: 10,
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
                    limit: 10,
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
                    limit: 10,
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
                        groupBy: ['monthyear']
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Location',
                    chartType: 'Doughnut',
                    limit: 10,
                    target: 'actiongeo_fullname',
                    query: {
                        select: [{expr:'top(actiongeo_fullname, 10)', as:'location'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'actiongeo_fullname',op:'isnotnull'}
                        ]
                    }
                }
            ]
        },
        {
            name: 'Dashboard 2',
            id: 'history',
            theme: "blue",
            analytics: []
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
