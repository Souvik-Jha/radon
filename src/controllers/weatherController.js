let axios = require("axios");

const getWeather =async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=e1a2e7ad1a2d708c079f515dce273d48`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })


    }
}


const getTempLondon =async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=e1a2e7ad1a2d708c079f515dce273d48`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
}
}




const sortByTemp =async function (req, res) {
    try {
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityTemp=[]
        for(let i = 0; i<cities.length; i++){
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e1a2e7ad1a2d708c079f515dce273d48`
            }
            let result = await axios(options)
            let obj = {}
            obj.city = cities[i]
            obj.temp = result.data.main.temp
            
            cityTemp.push(obj)
        }
        let sortCity = cityTemp.sort(function(a,b){
            return a.temp - b.temp
        })
            res.status(200).send({ msg: sortCity, status: true })
        

    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getWeather = getWeather
module.exports.TempLondon = getTempLondon
module.exports.sortByTemp = sortByTemp
