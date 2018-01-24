$(document).ready(function () {
  var apiKey = 'AVxnqMfPACom2FnCptPjufAcGCiKMLkx'
  $("button").click(function () {
    





    var apiAdress =
      'http://dataservice.accuweather.com/forecasts/v1/daily/1day/324505?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&details=true';
    var value = $("#txt_name").val(); // cюди добавлю скріпт для пошуку міст відповідно до того що ввів користувач

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
