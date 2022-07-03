const baseURL = 'http://localhost:9000/api/locations/';

const LocationService = {

    getLocations() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    showSelectedLocation(id){
        return fetch(baseURL + id)
        .then(res => res.json());

    }
}
export default LocationService;