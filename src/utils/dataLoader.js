import Papa from "papaparse";

export async function loadCSVData(onComplete) {
    const response = await fetch("/ev-data.csv");
    const csvText = await response.text();

    Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
            onComplete(results.data);
        },
    });
}