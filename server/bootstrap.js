// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    //Figures.remove({});
    //Game Figures initialization on server cold start
    if (Figures.find().count() === 0) {
        var data = [
            {
                name: "x1",
                matrixWidth: 3,
                matrixHeight: 3,
                matrix: []
                    .concat("000")
                    .concat("010")
                    .concat("000")
                    .join("")
            },
            {
                name: "x2",
                matrixWidth: 3,
                matrixHeight: 3,
                matrix: []
                    .concat("010")
                    .concat("010")
                    .concat("000")
                    .join("")
            },
            {
                name: "x3",
                matrixWidth: 3,
                matrixHeight: 3,
                matrix: []
                    .concat("010")
                    .concat("010")
                    .concat("010")
                    .join("")
            },
            {
                name: "corner",
                matrixWidth: 3,
                matrixHeight: 3,
                matrix: []
                    .concat("010")
                    .concat("011")
                    .concat("000")
                    .join("")
            },
        ];
        _.each(data, function (figure) {
            Figures.insert(figure);
        });
    }
});
