import axios from "axios";

// You can use your own logic to set your local or production domain
const baseDomain = "https://eklavya-server.herokuapp.com/API";
// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});

// This method gets google link
export const getAccountLink = async ()=>{
    try{
        const data = await axios.get(`${baseDomain}/auth/get-OAuth2-url`)
        return data
    }
    catch(error){
        // console.error(error)
    }
}