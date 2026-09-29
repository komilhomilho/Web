import axios from "axios"
import "dotenv/config"

//https://home.openweathermap.org/api_keys
const app_id = process.env.API_KEY
const log = console.log

const cidade = "Limeira"
const unidade = "metric"
const idioma = "pt_BR"
const qtd_resultados = 10
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&units=${unidade}&appid=${app_id}&lang=${idioma}&cnt=${qtd_resultados}`

// axios
// .get(url)
// .then((res) => {
//     log(res) 
//     return res.data
// })
// .then((res) =>{
//     log("==================================================")
//     log(res)
//     log(res.cnt)
//     log("==================================================")
// })
// .catch((err) => {
//     log(err)
// })

try {
    let res = await axios.get(url)
    let data = res.data
    let lista = data.list
    log(`==============================================
        ${data.cnt}
        ${lista.map(previsao => {
        const dataConvertida = new Date(previsao.dt * 1000).toLocaleString('pt-BR')      
        const minima = `Min: ${previsao.main.temp_min}\u00B0C`
        const maxima = `Max: ${previsao.main.temp_max}\u00B0C`
        const humidade = `Hum: ${previsao.main.humidity}\u00B0C`
        const desc = `Desc: ${previsao.weather[0].description}`
        return `
        ${dataConvertida}
        ${minima}
        ${maxima}
        ${humidade}
        ${desc}
        `
        }).join('\n')}
        ${lista.filter(l => l.main.feels_like >= 30).length} Previsões tem Sensação térmica >= 30\n
==============================================`)
} catch (err) {
    
}