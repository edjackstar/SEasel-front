export default ({$axios, store})=>{
    $axios.onRequest( config => {
        const token = store.getters['user/getAccessToken']
        if(token){
            config.defaults.headers.common['Authorization'] = token
        }
    })
    $axios.interceptors.response.use(response => {
        return response;
     }, error => {
       if (error.response.status === 401) {
        //place your reentry code
       }
       return error;
     });
}