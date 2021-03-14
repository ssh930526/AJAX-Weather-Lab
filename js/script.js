const $title = $('#title');
const $weatherFor = $('#weatherFor');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $cityName = $('#cityName');
const $input = $('input[type="text"]');

$('form').on('submit',handleGetWeather)
function handleGetWeather(event) {
    event.preventDefault()
    const userInput = $input.val()
    console.log('userInput', userInput)

    $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=ba416870d65b07d4269e8e0b32e6f5a7'
    }).then(
        (data) => {
            console.log('data', data);
            render(data);
        },
        (error) => {
            console.log('error', error)
        }
    )
}

function render (data) {

    // $weatherFor.text(data.weather.valus)
    $weatherFor.text('Weather for: ' + data.name);
    $temperature.text('Temperature: ' + data.main.temp);
    $feelsLike.text('Feels Like: ' + data.main.feels_like);
    $weather.text('Weather: ' + data.weather[0].main);
}

console.log('after promise');