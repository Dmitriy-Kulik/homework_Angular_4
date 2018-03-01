var app = angular.module('app', []);

app.controller('PeoplesController', function(){

    this.peoples = [
        {
            name: "Mariya ",
            last_name: "Viktorovna",
            avatar: "img/tp-link_tl-wr840n_images_1551541342.jpg",
            gender: 'female'
        },
        {
            name: "Gennady",
            last_name: "Dmitrievich",
            avatar: "",
            gender: 'male'
        },
        {
            name: "Denis ",
            last_name: "Igorevich",
            avatar: "img/tp-link_tl-wr840n_images_1551541342.jpg",
            gender: 'male'
        },{
            name: "Vadim ",
            last_name: "Vadimovich",
            avatar: "img/tp-link_tl-wr840n_images_1551541342.jpg",
            gender: 'male'
        },
        {
            name: "Igor ",
            last_name: "Nikolaevich",
            avatar: "",
            gender: 'male'
        },
        {
            name: "Igor ",
            last_name: "Nikolaevich",
            avatar: "",
            gender: 'male'
        }
    ]
});

app.directive('customerInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '=info'
        },
        templateUrl: 'people.html'
    };
});


