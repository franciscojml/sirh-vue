module.exports = app => {

    const getPhotoProfile = (req, res) => {
        console.log('1')
        res.json({ data: getURLPhotoProfile() })
    }

    const getURLPhotoProfile = () => {
        console.log('2')
        const url = 'https://embrapa.br/api/jsonws/web-service-empregado-portlet.empregado/get-url-foto?matricula=333709'
        app.get(url, function (req, res) {
            console.log('teste')
            return res.data
        });
    }

    return { getPhotoProfile }
}