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

export const verifyAndLoginOAuth2Code = async (oauth2_code) => {
  try {
    const res = await axios.post(`${baseDomain}/auth/oauth/google`, {
      oauth_code: oauth2_code, // This is the body part
    });
    localStorage.setItem('token',res.data.token)
    this.$store.commit('setToken',res.data.token)
    return res.data;
  } catch (error) {
    localStorage.removeItem('token')
    
    console.error(error)
  }
};