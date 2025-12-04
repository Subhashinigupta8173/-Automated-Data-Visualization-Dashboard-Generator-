const moment = require("moment");

function detectType(values) {
    let numbers = 0, dates = 0, strings = 0;

    values.forEach(v => {
        if (!isNaN(v)) numbers++;
        else if (moment(v, moment.ISO_8601, true).isValid()) dates++;
        else strings++;
    });

    if (numbers === values.length) return "number";
    if (dates === values.length) return "date";
    return "category";
}

module.exports = function inferTypes(data) {
    const columns = Object.keys(data[0]);
    const result = {};

    columns.forEach(col => {
        const values = data.map(row => row[col]);
        result[col] = detectType(values);
    });

    return result;
};
