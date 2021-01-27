import axios from "axios";

const axiosOrdersInstance = axios.create({
    baseURL: 'https://burger-application-reactguide-default-rtdb.firebaseio.com/'
})

export default axiosOrdersInstance;