(function () {

    window.dashboards = [
        {
            name: 'Solr Dashboard',
            id: 'food',
            theme: 'green',
            global: {
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
                    baseUrl: 'http://localhost:8983/solr/',
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
                    baseUrl: 'http://localhost:8983/solr/',
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
            name: 'BigQuery Dashboard',
            id: 'knowledge',
            theme: 'lightgrey',
            analytics: [
                {
                    type: 'bigquery',
                    name: 'Iraq - Actor1 Groups June 2014',
                    projectId: 'blackhawk-website',
                    chartType: 'Bar',
                    limit: 8,
                    query: {
                        select: [{expr:'actor1knowngroupcode'},{expr:'count(*)',as:'actor1_knowngroup_count'}],
                        from: '[gdelt-bq:full.events]',
                        where: [
                            {field:'actor1knowngroupcode',op:'isnotnull'},
                            {field:'actiongeo_countrycode',op:'equals',value:"'IZ'"},
                            {field:'monthyear',op:'equals',value:'201406'}
                        ],
                        groupBy: "['actor1knowngroupcode']"
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
