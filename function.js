var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function($scope, $http){
    var vm = $scope;
    vm. info = {
    heading: "Austin's Crappy Weather",
    port: "Check out my GitHub",
    link: "https://github.com/austindoesstuff"
    };

    $http.get("https://ipapi.co/json")
    .success(function(data){
        var lat = data.latitude;
        var lon = data.longitude;
        vm. city = data.city;

        if(lat && lon){
            var url = 'https://api.darksky.net/forecast/16b26ca8837563ce04f91d86146e6f9a/'+lat+','+lon;
            console.log(url);
            $http.get(url)
            .success(function(data){
                vm. fTemp = data.currently.temperature;
                vm. fRealFeel = data.currently.apparentTemperature;
                vm. summary = data.currently.summary;
                vm. icon = data.currently.icon;
                vm. cTemp = ((vm.fTemp-32)*5/9).toFixed(2);
                vm. cRealFeel = ((vm.fRealFeel-32)*5/9).toFixed(2);

                switch(vm.icon){
          case "clear-day":
            vm.image = 'http://img02.deviantart.net/d2c2/i/2005/028/b/6/clear_day_by_juanchis.jpg';
            vm.color = 'black';
            break;
          case "clear-night":
            vm.image = 'http://clear-night.com/img/clear-night-placeholder.jpg';
            vm.color = 'white';
            break;
          case "rain":
            vm.image = 'http://52.24.98.51/wp-content/uploads/2017/03/rain.jpg';
            vm.color = 'black';
            break;
          case "snow":
            vm.image = 'https://previews.123rf.com/images/coleong/coleong0801/coleong080100533/2434677-Stock-image-of-a-snowing-winter-at-Boston-Massachusetts-USA-Stock-Photo.jpg';
            vm.color = 'black';
            break;
          case "sleet":
            vm.image = 'https://fortymilestocanada.files.wordpress.com/2011/10/img_3189.jpg';
            vm.color = 'black';
            break;
          case "wind":
            vm.image = 'https://media.mnn.com/assets/images/2016/05/01-windydog-carloscherer.jpg.838x0_q80.jpg';
            vm.color = 'black';
            break;
          case "fog":
            vm.image = 'http://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/9/walkers-486583_1920_1.jpg)';
            vm.color = 'black';
            break;
          case "cloudy":
            vm.image = "https://upload.wikimedia.org/wikipedia/commons/5/54/Cloudy_hills_in_Elis%2C_Greece_2.jpg";
            vm.color = 'black';
            break;
          case "partly-cloudy-day":
            vm.image = 'http://ekonomski.mk/wp-content/uploads/2015/02/stabilno-vreme-so-umerena-oblachnost-184186.jpg';
            vm.color = 'black';
            break;
          case "partly-cloudy-night":
            vm.image = 'https://ak6.picdn.net/shutterstock/videos/2303816/thumb/2.jpg';
            vm.color = 'white';
            break;
                      }

            });
        } else {
            console.log("Oops, something's broke");
        }
    });
});
