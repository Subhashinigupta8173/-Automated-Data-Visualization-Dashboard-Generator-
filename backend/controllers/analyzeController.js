const typeInference = require("../services/typeInference");
const dataValidation = require("../services/dataValidation");
const chartRecommender = require("../services/chartRecommender");

exports.analyzeData = (req, res) => {
    const jsonData = req.body.data;

    const types = typeInference(jsonData);
    const validation = dataValidation(jsonData);
    const charts = chartRecommender(types);

    res.json({
        columnTypes: types,
        validationReport: validation,
        recommendedCharts: charts
    });
};
