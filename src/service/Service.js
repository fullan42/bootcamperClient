export class ApiService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.patikaBootcamps = []; // İlk başta boş bir dizi ile başlatıyoruz
    }

    fetchData() {
        return fetch(this.apiUrl,this.patikaBootcamps)
            .then(response => response.json())
            .then(data => {
                this.patikaBootcamps = data.patikaDev || []; // patikaDev özelliğini kontrol et
                return this.patikaBootcamps;
            })
            .catch(error => {
                console.error("API Hatası:", error);
                throw error;
            });
    }

    getPatikaBootcamps() {
        return this.patikaBootcamps;
    }

}

