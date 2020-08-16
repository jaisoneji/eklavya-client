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

export const verifyAndLoginOAuth2Code =  (oauth2_code) => {
  console.log(oauth2_code)
  // var data=JSON.stringify({
  //    // This is the body part

  // })
  return new Promise((resolve,reject)=>{
    axios.post(`${baseDomain}/auth/oauth/google`,{
      oauth_code: oauth2_code
    })
    .then((res)=>{
    // localStorage.setItem('token',res.data.token)
    // this.$store.commit('setToken',res.data.token)
    // this.$store.commit('setUserDetails',res.data)
    resolve(res)
    })
    .catch(error=>{
      localStorage.removeItem('token')
      console.log("Axios google error:"+error)
      alert(error.response.data.errors.message)
      reject(error)
    })
    
  })
    

};