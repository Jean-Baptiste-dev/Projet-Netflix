import axios from "axios";
/** Une url de base pour effectuer des requetes vers les donnees dans la base de donnée */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;