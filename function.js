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
                vm. model = data.weather[0].icon;
                vm. cTemp = convertToCelcius(vm.fTemp);
                vm. cTempHigh = convertToCelcius(vm.fTempHigh);
                vm. cTempLow = convertToCelcius(vm.fTempLow);
                vm. city = data.name;

                console.log(vm.model);

                switch(vm.model){
          case "01d":
            vm.image = 'https://i.pinimg.com/originals/fe/ee/42/feee42fdf12266d5a2e6e9aabcacfb28.jpg';
            vm.icon = '<i class="wi-day-sunny"></i>';
            break;
          case "01n":
            vm.image = 'http://i.imgur.com/nwqHT3H.jpg';
            vm.icon = '<i class="wi-night-clear"></i>';
            vm.b = 'well'
            break;
          case "03d":
            vm.image = 'http://2.bp.blogspot.com/-xVDyriNbwGM/Tl9Au5dDjpI/AAAAAAAAKJM/bQayN2Yd2Yc/s1600/sunset%2BIMG_9750.jpg';
            vm.icon = '<i class="wi-day-cloudy"></i>';
            break;
          case "03n":
            vm.image = 'https://www.walldevil.com/wallpapers/a82/moon-cloud-night.jpg';
            vm.icon = '<i class="wi-night-alt-cloudy"></i>';
            break;
          case "10d":
            vm.image = 'http://52.24.98.51/wp-content/uploads/2017/03/rain.jpg';
            vm.icon = '<i class="wi-day-sprinkle"></i>';
            break;
          case "10n":
            vm.image = 'https://www.walldevil.com/wallpapers/a82/moon-cloud-night.jpg';
            vm.icon = '<i class="wi-night-alt-showers"></i>';
            break;
          case "13d":
            vm.image = 'https://previews.123rf.com/images/coleong/coleong0801/coleong080100533/2434677-Stock-image-of-a-snowing-winter-at-Boston-Massachusetts-USA-Stock-Photo.jpg';
            vm.icon = '<i class="wi-day-snow"></i>';
            break;
          case "13n":
            vm.image = 'http://allswalls.com/images/snow-winter-night-sky-wallpaper-1.jpg';
            vm.icon = '<i class="wi-night-alt-snow"></i>';
            break;
          case "09d":
            vm.image = 'http://www.bttoronto.ca/wp-content/uploads/sites/2/2016/08/heavyrain-1024x576.jpg';
            vm.icon = '<i class="wi-day-rain"></i>';
            break;
          case "09n":
            vm.image = 'https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg';
            vm.icon = '<i class="wi-night-alt-rain"></i>';
            break;
          case "50d":
            vm.image = 'http://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/9/walkers-486583_1920_1.jpg)';
            vm.icon = '<i class="wi-day-fog"></i>';
            break;
          case "50n":
            vm.image = 'http://2.bp.blogspot.com/-UHSbJrVpwHg/UMmbntniPtI/AAAAAAAAAaA/Sf2vdyq2r2w/s1600/DSC_4290+copy.jpg';
            vm.icon = '<i class="wi-night-fog"></i>';
            break;
          case "02d":
            vm.image = "https://i.ytimg.com/vi/8NTVWJRNvv0/maxresdefault.jpg";
            vm.icon = '<i class="wi-day-sunny-overcast"></i>';
            break;
          case "02n":
            vm.image = 'https://i.ytimg.com/vi/cHcQ6iEIQLI/maxresdefault.jpg';
            vm.icon = '<i class="wi-night-alt-partly-cloudy"></i>';
            break;
          case "04d":
            vm.image = 'https://img13.deviantart.net/fa39/i/2015/052/6/1/broken_clouds_by_leo_6tos-d8ixdlv.jpg';
            vm.icon = '<i class="wi-cloudy"></i>';
            break;
          case "04n":
            vm.image = 'http://gatherfraservalley.ca/wp-content/uploads/2017/05/file8081258144701.jpg';
            vm.icon = '<i class="wi-cloudy"></i>';
            break;
          case "11d":
            vm.image = 'https://23711-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg';
            vm.icon = '<i class="wi-day-storm-showers"></i>';
            break;
          case "11n":
            vm.image = 'http://www.wallpaperup.com/632942/nature_night_sky_lightning_sea_ocean_storm_rain.html';
            vm.icon = '<i class="wi-night-alt-thunderstorm"></i>';
            break;
                      }

            });
        } else {
            console.log("Oops, something's broke");
        }
    });
});
