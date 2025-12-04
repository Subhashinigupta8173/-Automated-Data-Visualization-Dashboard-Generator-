export default function recommendCharts(types) {
    const charts = [];

    Object.entries(types).forEach(([col, type]) => {
        if (type === "number") {
            charts.push({
                column: col,
                chart: "bar/line",
                reason: "Number column suitable for trends or comparisons"
            });
        }
        if (type === "category") {
            charts.push({
                column: col,
                chart: "bar/pie",
                reason: "Categories best shown as bar or pie"
            });
        }
        if (type === "date") {
            charts.push({
                column: col,
                chart: "line",
                reason: "Date column ideal for trend analysis"
            });
        }
    });

    return charts;
}