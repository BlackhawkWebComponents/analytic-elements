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
                        {field:'actor2name',op:'equals',value:null}
                    ]
                }
            },
            analytics: [
                {
                    type: 'bigquery',
                    name: 'By Actor 1',
                    chartType: 'Bar',
                    limit: 10,
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
                    query: {
                        select: [{expr:'top(QuadClassDescription, 10)'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'QuadClassDescription',op:'isnotnull'}
                        ]
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Event Type',
                    chartType: 'Pie',
                    showLegend: true,
                    limit: 10,
                    query: {
                        select: [{expr:'top(Event, 10)'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'Event',op:'isnotnull'}
                        ]
                    }
                },
                {
                    type: 'bigquery',
                    name: 'By Location',
                    chartType: 'Doughnut',
                    limit: 10,
                    query: {
                        select: [{expr:'top(ActionGeo_FullName, 10)', as:'location'},{expr:'count(*)',as:'count'}],
                        from: '[gdelt.iraq_events_2014]',
                        where: [
                            {field:'ActionGeo_FullName',op:'isnotnull'}
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
