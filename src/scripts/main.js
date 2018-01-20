
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
          console.log(objData);

          for (var i in objData) {
            console.log(i);
            var headline = objData[i];
            console.log(headline[0]); // як достати з цього масиву значення( температуру і т.д.)


            $(document.body).append("<div><p>" + headline + " </p>" + "</div>");
            console.log(i + objData);
          }
        }

      }).then(function (data) {
        console.log(data);
      });
    });
  });
