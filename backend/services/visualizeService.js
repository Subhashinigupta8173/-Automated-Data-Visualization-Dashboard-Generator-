module.exports = function visualize(columnTypes, data) {
    const charts = [];

    const columns = Object.keys(columnTypes);

    // Loop through all combinations
    columns.forEach(xCol => {
        columns.forEach(yCol => {

            // Line Chart: date + number
            if (columnTypes[xCol] === "date" && columnTypes[yCol] === "number") {
                charts.push({
                    chartType: "line",
                    x: xCol,
                    y: yCol,
                    aggregation: "sum",
                    title: `${yCol} over ${xCol}`
                });
            }

            // Bar Chart: category + number
            if (columnTypes[xCol] === "category" && columnTypes[yCol] === "number") {
                charts.push({
                    chartType: "bar",
                    x: xCol,
                    y: yCol,
                    aggregation: "sum",
                    title: `${yCol} by ${xCol}`
                });
            }

            // Pie Chart: only category (small unique)
            if (columnTypes[xCol] === "category") {
                const unique = [...new Set(data.map(row => row[xCol]))];
                if (unique.length <= 6) {
                    charts.push({
                        chartType: "pie",
                        label: xCol,
                        value: yCol,
                        title: `${xCol} distribution`
                    });
                }
            }

        });
    });

    // KPI Cards for number-only columns
    columns.forEach(col => {
        if (columnTypes[col] === "number") {
            const values = data.map(x => Number(x[col]) || 0);
            charts.push({
                chartType: "kpi",
                column: col,
                sum: values.reduce((a, b) => a + b, 0),
                avg: (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2),
                title: `Summary of ${col}`
            });
        }
    });

    return charts;
};
