$(document).ready(function () {
  var apiKey = 'AVxnqMfPACom2FnCptPjufAcGCiKMLkx'
  $("button").click(function () {
    var CityInput = $('#City').val();
    console.log(CityInput);
    var url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&q="
    var APIurl = url + CityInput ;
    console.log(APIurl);
    var CityKey = 0
    $.ajax({
      async: false,// танці з бубном для передачі значеннян локальної зміної CityKey в глобальну
      type: 'GET',
      url: url + CityInput,
      dataType: 'json',
      success: function (CityData) {
        console.log(CityData);
        CityKey = CityData['0'].Key;
        console.log(CityKey);
 
      }
      
    })
    console.log(CityKey);
    





    var apiAdress =
      'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' +CityKey +'?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&details=true';
    console.log(apiAdress);

    // даємо запит до АРІ по отриманій локації і виводимо значення макс і мін температури тиск і шв.вітру
    $.ajax({
      type: 'GET',
      url: apiAdress,
      dataType: 'json',
      success: function (objData) {
        console.log(objData); 
        var MaxTemperature = objData.DailyForecasts["0"].Temperature.Maximum.Value;
        for (var i = MaxTemperature; i <= +MaxTemperature; i++) { // функція для переводу ференгейти в цельсії
          var MaxTemperatureC = Math.round((i - 32) * (5 / 9));
        }
        $('#MaxTemp').text(MaxTemperatureC + '	C');
        var MinTemperature = objData.DailyForecasts["0"].Temperature.Minimum.Value;
        for (var i = MinTemperature; i <= +MinTemperature; i++) { // функція для переводу ференгейти в цельсії
          var MinTemperatureC = Math.round((i - 32) * (5 / 9));
        }
        $('#MinTemp').text(MinTemperatureC +'	C');

        
        var WindSpeedM = objData.DailyForecasts["0"].Day.Wind.Speed.Value; // отримали шв вітру в милях
        for (var i = WindSpeedM; i <= +WindSpeedM; i++) { // функція для переводу миль\год в км\год
          var WindSpeedKm = Math.round(i / 0.625);
          console.log(WindSpeedKm);
        }
        $('#WindSpeed').text(WindSpeedKm + ' km/h');
          
      }
      

    }).then(function (data) {
      console.log(data);
    });
  });
});
