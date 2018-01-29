$(document).ready(function () {
  var apiKey = 'AVxnqMfPACom2FnCptPjufAcGCiKMLkx'
  $("#button").click(function () {
    var CityInput = $('#City').val();
    console.log(CityInput);
    var url = "https://dataservice.accuweather.com/locations/v1/cities/search?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&q="
    var APIurl = url + CityInput;
    console.log(APIurl);
    // var CityKey = 0;
    // var CityName = 0;
    $.ajax({
      async: false, // танці з бубном для передачі значеннян локальної зміної CityKey в глобальну
      type: 'GET',
      url: url + CityInput,
      dataType: 'json',
      success: function (CityData) {
        console.log(CityData);
        CityKey = CityData['0'].Key;
        console.log(CityKey);
        CityName = CityData['0'].EnglishName;
        console.log(CityName);
        $('#City').text(CityName);

      }

    })
    console.log(CityKey);
    console.log(CityName);
    $('#City').text(CityName);
    var apiAdress =
      'https://dataservice.accuweather.com/currentconditions/v1/' + CityKey + '?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&details=true';
    console.log(apiAdress);

    // даємо запит до АРІ по отриманій локації і виводимо значення макс і мін температури тиск і шв.вітру
    $.ajax({
      type: 'GET',
      url: apiAdress,
      dataType: 'json',
      success: function (objData) {
        console.log(objData);

        var NowTemp = objData["0"].ApparentTemperature.Metric.Value
        $('#NowTemp').text(NowTemp + ' C');
        console.log(NowTemp);

        var WindSpeed = objData["0"].Wind.Speed.Metric.Value;
        console.log(WindSpeed);
        $('#WindSpeed').text(WindSpeed + ' km/h');

        var Pressure = objData["0"].Pressure.Metric.Value;
        console.log(WindSpeed);
        $('#Pressure').text(Pressure + ' мм. рт. ст.');

        var MaxTemperature = objData["0"].TemperatureSummary.Past24HourRange.Maximum.Metric.Value;
        $('#MaxTemp').text(MaxTemperature + '	C');

        var MinTemperature = objData["0"].TemperatureSummary.Past24HourRange.Minimum.Metric.Value;
        $('#MinTemp').text(MinTemperature + '	C');

        $('.MinTemp').text(MinTemperature + ' c');
        $('.MaxTemp').text(MaxTemperature + ' c');
        $('.NowTemp').text(NowTemp + ' c');
        $('.Pressure').text(Pressure + ' мм. рт. ст.');
        $('.WindSpeed').text(WindSpeed + ' км/год');







      }


    }).then(function (data) {
      console.log(data);
    });
    var GoogleApiAdress = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDVdtwUAOqbtpbKDAB0OA-9iCkAAcsZJCc"
    // $.ajax({
    //     type: 'POST',
    //     url: GoogleApiAdress,
    //     dataType: 'json',
    //     success: function (GeoData) {
    //         console.log(GeoData);
    //     }
    // });
  });

  $('#ShowMap').click(function () {
    $('.map').toggleClass("show");
  });


  $(document).ready(function initMap() {
    var uluru = {
      lat: 50.456,
      lng: 30.520
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      draggable: true,
      title: "Drag me!"

    });
    google.maps.event.addListener(marker, 'dragend', function (event) {
      var lat = marker.getPosition().lat();
      var lng = marker.getPosition().lng();
      console.log(lat + ',' + lng); //выводим в консоль браузера нові координаты
      var urlapi = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&q=" + lat + "%2C" + lng + '&toplevel=true';
      console.log(urlapi);
      $.ajax({
        async: false,
        type: 'GET',
        url: urlapi,
        dataType: 'json',
        success: function (data) {
          console.log(data);
          CityKey = data.Key;
          console.log(CityKey);
        }
      });
      var apiAdress =
        'https://dataservice.accuweather.com/currentconditions/v1/' + CityKey + '?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&details=true';
      console.log(apiAdress);

      // даємо запит до АРІ по отриманій локації і виводимо значення макс і мін температури тиск і шв.вітру
      $.ajax({
        type: 'GET',
        url: apiAdress,
        dataType: 'json',
        success: function (objData) {
          console.log(objData);

          var NowTemp = objData["0"].ApparentTemperature.Metric.Value
          $('#NowTemp').text(NowTemp + ' C');
          console.log(NowTemp);

          var WindSpeed = objData["0"].Wind.Speed.Metric.Value;
          console.log(WindSpeed);
          $('#WindSpeed').text(WindSpeed + ' km/h');

          var Pressure = objData["0"].Pressure.Metric.Value;
          console.log(WindSpeed);
          $('#Pressure').text(Pressure + ' мм. рт. ст.');

          var MaxTemperature = objData["0"].TemperatureSummary.Past24HourRange.Maximum.Metric.Value;
          $('#MaxTemp').text(MaxTemperature + '	C');

          var MinTemperature = objData["0"].TemperatureSummary.Past24HourRange.Minimum.Metric.Value;
          $('#MinTemp').text(MinTemperature + '	C');

          $('.MinTemp').text(MinTemperature + ' c');
          $('.MaxTemp').text(MaxTemperature + ' c');
          $('.NowTemp').text(NowTemp + ' c');
          $('.Pressure').text(Pressure + ' мм. рт. ст.');
          $('.WindSpeed').text(WindSpeed + ' км/год');

        }


      })
    });




  });
  $('#Subs').click(function () {
    $('#SubForm').load('regform.html');

  })
  $('.slick-slider').slick();

});
