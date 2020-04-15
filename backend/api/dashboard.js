const fetch = require('node-fetch');

module.exports = app => {

    const getUrlPhotoProfile = (req, res) => {
        const id = req.query.id

        var url = `https://embrapa.br/api/jsonws/web-service-empregado-portlet.empregado/get-url-foto?matricula=${id}`

        fetch(url)
            .then(res => res.json())
            .then(url => {
                res.send({ url });
            })
            .catch(err => {
                res.send(err);
            });
    }

    return { getUrlPhotoProfile }
}