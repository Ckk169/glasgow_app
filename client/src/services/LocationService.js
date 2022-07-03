const baseURL = 'http://localhost:9000/api/locations';

const LocationService = {

    getLocations() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    showLocation (location){
        return fetch(baseURL + location._id)
        .then(res => res.json());

    }
}
export default LocationService;