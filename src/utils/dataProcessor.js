export function groupByModelYear(data) {
    const yearMap = {};

    data.forEach((item) => {
        const year = item["Model Year"];
        if (!year) return;

        yearMap[year] = (yearMap[year] || 0) + 1;
    });

    return Object.keys(yearMap)
        .map((year) => ({
            year: Number(year),
            count: yearMap[year],
        }))
        .sort((a, b) => a.year - b.year);
};

export function groupByMake(data, limit = 10) {
    const makeMap = {};

    data.forEach((item) => {
        const make = item["Make"];
        if (!make) return;

        makeMap[make] = (makeMap[make] || 0) + 1;
    })

    return Object.keys(makeMap)
        .map((make) => ({
            make,
            count: makeMap[make],
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
};

export function groupByEVType(data) {
    const typeMap = {};

    data.forEach((item) => {
        const type = item["Electric Vehicle Type"];
        if (!type) return;

        typeMap[type] = (typeMap[type] || 0) + 1;
    });

    return Object.keys(typeMap).map((type) => ({
        type,
        count: typeMap[type],
    }));
};