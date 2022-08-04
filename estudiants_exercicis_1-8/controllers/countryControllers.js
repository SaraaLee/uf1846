const { CountryModel } = require('../models/country');

const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = async (req, res) => {
    const {country, population, urlFlag} = req.body
    const pais = new CountryModel ({
        name: country,
        flagURL: urlFlag,
        population
    })
    
    
    await pais.save()

    res.send("Dades rebudes:" + JSON.stringify(pais));
}




