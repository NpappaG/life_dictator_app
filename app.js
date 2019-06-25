$(document).ready(function(){
    console.log("loaded up")
    $('.btn').click(function() {

        let zip = $('.input').val()
        let key = "fea955432d2e24e29a03474538cb52ef"
        let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`
        
        $.get(url)
        .done(function(data) {
            console.log(data);
        let kelvin = data.main.temp
        let weather = data.weather[0].main
        let celsius = kelvin - 273
        let normaldegrees = Math.floor(celsius * (9/5) + 32)
        let city = data.name
        $('.response').html("The weather in "+city+" is "+ weather.toLowerCase() + " and the temp is "+normaldegrees)
        });
    })
})