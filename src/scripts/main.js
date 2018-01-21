
  $(document).ready(function () {
    var apiKey = 'AVxnqMfPACom2FnCptPjufAcGCiKMLkx'
    $("button").click(function () {
      var apiAdress =
        'http://dataservice.accuweather.com/forecasts/v1/daily/1day/324505?apikey=AVxnqMfPACom2FnCptPjufAcGCiKMLkx&details=true';
      var value = $("#txt_name").val();// cюди добавлю скріпт для пошуку міст відповідно до того що ввів користувач
      console.log(value);
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
          TemperatureArr = Temperature[a];// забираємо останій обєкт (максимальну температуру) Питання як забрати першу? 
          console.log(TemperatureArr);
          
            var MaxTemperature = TemperatureArr.Value;// передаємо  зі значенням(Value) обєктa макс температури 
            console.log(MaxTemperature);
          
            for (var i = MaxTemperature; i <= +MaxTemperature ; i++) {// функція для переводу ференгейти в цельсії
              var MaxTemperatureC = Math.round((i - 32) * (5 / 9));
            }


          $('#MaxTemp').text(MaxTemperatureC); // виводимо в Ферингейтах температуру.

     




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
