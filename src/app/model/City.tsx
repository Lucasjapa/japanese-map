'use client';

import { csvParse } from "d3-dsv";

export interface CityData {
    prefeitura: string;
    cidade: string;
    populacao: string;
    area: string;
    descricao: string;
    clima: string;
    cultura: string;
}

export async function loadCityData(): Promise<CityData[]> {
    const response = await fetch('/statesCSV.csv');
    const csvText = await response.text();
    // Parseando CSV para JSON
    const parsedData = csvParse(csvText, (d) => ({
        prefeitura: d.prefeitura,
        cidade: d.cidade,
        populacao: Number(d.populacao),
        area: Number(d.area),
        descricao: d.descricao,
        clima: d.clima,
        cultura: d.cultura,
    }));

    return parsedData as CityData[];
}

// Filtra as cidades pelo estado
export function getCitiesByState(state: string | null, cityData: CityData[]): CityData[] {
    return cityData.filter(city => city.prefeitura === state);
}
