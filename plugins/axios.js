import AuthApi from "~/api/AuthApi"

export default ({$axios, store})=>{
    $axios.onRequest( config => {
        const token = store.getters['user/getAccessToken']
        if(token){
            config.headers.common['Authorization'] = `Bearer ${token}`
        }
    })
    $axios.onError( async error => {
        console.log(error)
        console.log(error.response)
        console.log(error.response.status)
        const originalRequest = error.config
        
        switch(error.response.status) {
            case 403: {
                if(!originalRequest._retry){
                    originalRequest._retry = true;
                    const res = await $axios.post('/auth/teacher/login/refresh/', {refresh: store.getters['user/getRefreshToken']})
                    store.commit('user/setAccessToken', res.data.access)
                    originalRequest.headers['Authorization'] = `Bearer ${res.data.access}`
                    return $axios.request(originalRequest)
                }
            }
            case 401: {
                store.commit('user/setAccessToken', null)
                store.commit('user/setRefreshToken', null)
                redirect('/login')
            }
        }    
        return error;
    });
}