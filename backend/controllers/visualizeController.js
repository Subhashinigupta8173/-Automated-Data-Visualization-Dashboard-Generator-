const visualizeService = require("../services/visualizeService");

exports.generateCharts = (req, res) => {
    const { data, columnTypes } = req.body;

    const charts = visualizeService(columnTypes, data);

    res.json({
        charts,
    });
};
