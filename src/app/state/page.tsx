'use client'

import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {getCitiesByState, loadCityData} from "@/app/model/City";
import {formatNumber} from "@/utils/format";

export default function State(
    props: {
        stateName: String
    }
) {
    const searchParams = useSearchParams();
    const stateName = props.stateName;
    const [cities, setCities] = useState([]);

    useEffect(() => {
        console.log("DEBUG", stateName)
        if (!stateName) return;

        async function fetchData() {
            try {
                const data = await loadCityData();
                const citiesInState = getCitiesByState(stateName, data);
                setCities(citiesInState || []);
            } catch (error) {
                console.error("Erro ao carregar os dados das cidades:", error);
                setCities([]);
            }
        }

        fetchData();
    }, [stateName]);

    return (
        <>
            <div className="h-60 rounded-lg overflow-hidden">
                <h1 className="font-DMSans py-3 pl-3 text-3xl text-white bg-red-400 font-bold">
                    Estado: {stateName || "Não encontrado"}
                </h1>
                <img src={`/images/${stateName}.jpg`} alt={`Imagem de algum local referente a prefeitura de ${stateName}`}
                     className="w-full h-full object-cover"/>
            </div>
            {cities.length > 0 ? (
                cities.map((city) => (
                    <div key={city}> {/* Adicionando uma chave única */}
                        <div className="mt-5">
                            <div className="subtitle">
                                <span className="headline">Cidade principal: </span> {city.cidade}
                            </div>
                            <div className="subtitle">
                                <span className="headline">População: </span> {formatNumber(city.populacao)} pessoas
                            </div>
                            <div className="subtitle">
                                <span className="headline">Área: </span> {formatNumber(city.area)} km²
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="subtitle">
                                <span className="headline">Descrição geográfica/paisagística</span>
                            </div>
                            <p className="text-justify">
                                {city.descricao}
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="subtitle">
                                <span className="headline">Clima</span>
                            </div>
                            <p className="text-justify">
                                {city.clima}
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="subtitle">
                                <span className="headline">História recente, cultura</span>
                            </div>
                            <p className="text-justify">
                                {city.cultura}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nenhuma cidade encontrada para este estado.</p>
            )}
        </>
    );
}
