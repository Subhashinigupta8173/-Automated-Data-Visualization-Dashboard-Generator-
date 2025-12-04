module.exports = function validate(data) {
    const report = [];

    const totalRows = data.length;

    // Missing value detection
    let missingCount = 0;
    data.forEach(row => {
        Object.values(row).forEach(v => {
            if (v === "" || v === null) missingCount++;
        });
    });
    if (missingCount > 0) report.push(`${missingCount} missing values found`);

    // Duplicate detection
    const rowStrings = data.map(r => JSON.stringify(r));
    const unique = new Set(rowStrings);

    if (unique.size !== totalRows)
        report.push("Duplicate rows found");

    // Negative number detection
    data.forEach(row => {
        Object.entries(row).forEach(([key, value]) => {
            if (!isNaN(value) && Number(value) < 0) {
                report.push(`Negative values found in column '${key}'`);
            }
        });
    });

    return report;
}
