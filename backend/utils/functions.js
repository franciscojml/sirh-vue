module.exports = app => {
    var isNumeric = function (value) {
        return /^\d+(?:\.\d+)?$/.test(value);
    };

    String.prototype.isNumeric = function () {
        return isNumeric(this);
    };

    let isEmpty = (val) => {
        let typeOfVal = typeof val;
        switch (typeOfVal) {
            case 'object':
                return (val == null) || (val.length == 0) || !Object.keys(val).length;
                break;
            case 'string':
                let str = val.trim();
                return str == '' || str == undefined;
                break;
            case 'number':
                return val == '';
                break;
            default:
                return val == '' || val == undefined;
        }
    };

    return { isNumeric, isEmpty }
}