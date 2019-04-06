const { get } = require('axios')

const URL = 'http://apiadvisor.climatempo.com.br/api/'

async function getClimate(idCity, tokenAPI)
{
    const _urlBase = `${URL}v1/forecast/locale/${idCity}/days/15?token=${tokenAPI}`;
    const result = await get(_urlBase)
    return result.data.data
}

module.exports = { getClimate }
