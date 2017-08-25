var weatherApp = angular.module('weatherApp', [])

function convertToCelcius(temp){
    return ((temp-32)*5/9).toFixed(1);
}

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
        //vm. city = data.city;

        if(lat && lon){
            var key = 'ef075e4553ed06dad03e13d66e6e93a0'
            var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+key+'&units=imperial';
            console.log(url);
            $http.get(url)
            .success(function(data){
                vm. fTemp = (data.main.temp).toFixed(1);
                vm. fTempHigh=data.main.temp_max;
                vm. fTempLow=data.main.temp_min;
                vm. humidity = data.main.humidity;
                vm. description = data.weather[0].description;
                vm. summary = data.weather[0].main;
                vm. icon = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
                vm. cTemp = convertToCelcius(vm.fTemp);
                vm. cTempHigh = convertToCelcius(vm.fTempHigh);
                vm. cTempLow = convertToCelcius(vm.fTempLow);
                vm. city = data.name;

                console.log(data.weather[0].main);

                switch(vm.description){
          case "clear day":
            vm.image = 'https://i.pinimg.com/originals/fe/ee/42/feee42fdf12266d5a2e6e9aabcacfb28.jpg';
            vm.color = 'black';
            break;
          case "scattered clouds":
            vm.image = 'http://2.bp.blogspot.com/-xVDyriNbwGM/Tl9Au5dDjpI/AAAAAAAAKJM/bQayN2Yd2Yc/s1600/sunset%2BIMG_9750.jpg';
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
          case "shower rain":
            vm.image = 'http://www.bttoronto.ca/wp-content/uploads/sites/2/2016/08/heavyrain-1024x576.jpg';
            vm.color = 'black';
            break;
          case "mist":
            vm.image = 'http://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/9/walkers-486583_1920_1.jpg)';
            vm.color = 'black';
            break;
          case "few clouds":
            vm.image = "https://i.ytimg.com/vi/8NTVWJRNvv0/maxresdefault.jpg";
            vm.color = 'black';
            break;
          case "broken clouds":
            vm.image = 'https://img13.deviantart.net/fa39/i/2015/052/6/1/broken_clouds_by_leo_6tos-d8ixdlv.jpg';
            vm.color = 'black';
            break;
          case "thunderstorm":
            vm.image = 'https://23711-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg';
            vm.color = 'white';
            break;
                      }

            });
        } else {
            console.log("Oops, something's broke");
        }
    });
});
