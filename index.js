const map = document.getElementById("map")

var result = await fetch(
    "https://overpass-api.de/api/interpreter",
    {
        method: "GET",
        // The body contains the query
        body: "data="+ encodeURIComponent(`
            [bbox:30.618338,-96.323712,30.591028,-96.330826]
            [out:json]
            [timeout:90]
            ;
            (
                way
                    (
                         30.626917110746,
                         -96.348809105664,
                         30.634468750236,
                         -96.339893442898
                     );
            );
            out geom;
        `)
    },
).then(
    (data)=>data.json()
)

console.log(JSON.stringify(result , null, 2))