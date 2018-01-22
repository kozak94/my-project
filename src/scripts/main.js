
  $(document).ready(function () {
    var apiKey = 'AVxnqMfPACom2FnCptPjufAcGCiKMLkx'
    $("button").click(function () {
      var apiAdress =
        'http://dataservice.accuweather.com/forecasts/v1/daily/1day/324505?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&details=true';
      var value = $("#txt_name").val();// cюди добавлю скріпт для пошуку міст відповідно до того що ввів користувач

      // даємо запит до АРІ по отриманій локації і виводимо значення макс і мін температури тиск і шв.вітру
      $.ajax({
        type: 'GET',
        url: apiAdress,
        dataType: 'json',
        success: function (objData) {
          console.log(objData);// побачили всю відповідь з сервера
          var DailyForecasts=  objData.DailyForecasts;
          console.log(DailyForecasts);// достали блок з температурою
          for (var i in DailyForecasts){
            console.log(DailyForecasts[i].Temperature);// достали Макс і Мін температури
          };
          var Temperature = DailyForecasts[i].Temperature;

            for(var a in Temperature){
              console.log(Temperature[a]); // виводим два обєкта Макс і Мін температури             
            }
          var TemperatureMin = Temperature.Minimum;//забираємо мінімальну температуру.
          console.log(TemperatureMin);
          TemperatureMax = Temperature.Maximum;// забираємо максимальну температуру.
          console.log(TemperatureMax);
          
            var MaxTemperature = TemperatureMax.Value;// передаємо значення(Value) обєктa макс температури 
            console.log(MaxTemperature);
            var MinTemperature = TemperatureMin.Value; // передаємо значення(Value) обєктa макс температури
            console.log(MinTemperature);

            for (var i = MaxTemperature; i <= +MaxTemperature ; i++) {// функція для переводу ференгейти в цельсії
              var MaxTemperatureC = Math.round((i - 32) * (5 / 9));
            }
            for (var i = MinTemperature; i <= +MinTemperature; i++) { // функція для переводу ференгейти в цельсії
              var MinTemperatureC = Math.round((i - 32) * (5 / 9));
            }
          
          // виводимо Швидкість вітру
          for (var i in DailyForecasts) {
            console.log(DailyForecasts[i].Day); // Достали масив обэктів в якому є Вітер
          };

          var Wind = DailyForecasts[i].Day;
          
          var WindSpeedM = Wind.Wind.Speed.Value;// отримали шв вітру в милях
          for (var i = WindSpeedM; i <= +WindSpeedM; i++) { // функція для переводу ференгейти в цельсії

            var WindSpeedKm = Math.round(i / 0.625 );

          }
          console.log(WindSpeedKm);

          console.log(objData.DailyForecasts["0"].Temperature.Maximum.Value);// РІШЕННЯ УСІХ ПРОБЛЕМ!!!


          $('#MaxTemp').text(MaxTemperatureC); // виводимо в Цельсіях температуру.
          $('#MinTemp').text(MinTemperatureC); 
          $('#WindSpeed').text(WindSpeedKm);

     




          // for (var i in objData) {
          //   console.log(i);
          //   var headline = objData[i];
          //   console.log(headline[0]); // як достати з цього масиву значення( температуру і т.д.)
          //   var headlineArr = headline[0];
          //   console.log(headlineArr);

          
          }
        // }

      }).then(function (data) {
        console.log(data);
      });
    });
  });
