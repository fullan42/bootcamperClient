"use client";
import React, { useState, useEffect } from 'react';
import Card from "@/pages/cardBootcamp";
import { ApiService } from "@/service/Service";

const CardList = () => {
        console.log("Rendering CardList"); // Bileşenin render edildiğini kontrol et

    const [patikaBootcamps, setPatikaBootcamps] = useState([]);
    const apiUrl = "http://127.0.0.1:8000/patika";
    const apiService = new ApiService(apiUrl);

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                await apiService.fetchData();
                const bootcamps = apiService.getPatikaBootcamps();
                setPatikaBootcamps(bootcamps);
            } catch (error) {
                console.error("API'den veri alınamadı. Hata:", error);
            }
        };

        fetchDataAndSetState();
    }, []); // Boş dependency array, sadece bir kere çağrılmasını sağlar.

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-4 mx-10">
            {patikaBootcamps.map((bootcamp, index) => (
                <Card key={index} {...bootcamp} />
            ))}
        </div>
    );
};

export default CardList;
