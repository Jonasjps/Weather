const cityForm = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const cityNameContainers = document.querySelector('[data-js="city-name"]')
const cityWeatherContainers = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainers = document.querySelector('[data-js="city-temperature"]')
const timeIcon = document.querySelector('[data-js="time"]')
const WetherIconIcon = document.querySelector('[data-js="time-icon"]')
const img = document.createElement('img')
const checkingClass = () => {
    if(cityCard.classList.contains('d-none')){
        cityCard.classList.remove('d-none')
    }
}

const manipulandoDOM = async inputValue => {
    
    const [{Key, LocalizedName}] = await getCityData(inputValue) 
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)
    img.setAttribute('src',`./src/icons/${WeatherIcon}.svg`)
    WetherIconIcon.insertAdjacentElement('afterbegin',img)

    IsDayTime
        ? timeIcon.src = './src/day.svg'
        : timeIcon.src = './src/night.svg'

    cityNameContainers.textContent = LocalizedName
    cityWeatherContainers.textContent = WeatherText
    cityTemperatureContainers.textContent = Temperature.Metric.Value

}

cityForm.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    checkingClass()
    manipulandoDOM(inputValue)
    
    cityForm.reset()
}) 
