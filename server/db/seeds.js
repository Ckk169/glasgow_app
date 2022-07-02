use locations_hub;
db.dropDatabase();

db.locations.insertMany([
    {
        name: "Rotunda",
        gps: {
            lat: 55.8636,
            long: -4.2825
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "This is the Location Detail title"
        },
        info: "Rotunda text goes here"
    },
    {
        name: "Grahamston",
        gps: {
            lat: 55.8591,
            long: -4.2581
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "This is the Location Detail title"
        },
        info: "Grahamston text goes here"
    },
    {
        name: "Botanic Gardens Railway Station",
        gps: {
            lat: 55.8797,
            long: -4.2912
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "This is the Location Detail title"
        },
        info: "Botanics text goes here"
    },
    {
        name: "Gallery of Modern Art",
        gps: {
            lat: 55.8602,
            long: -4.2525
        },
        title: {
            markerTitle: "This is the marker title",
            locationDetail: "This is the Location Detail title"
        },
        info: "Goma dodgy past text goes here"
    },
]);
