import axios from 'axios'
class Service{
    url = 'http://localhost:8081'

    async get(path, data){
        try {
            let resp = await axios.get(this.url+path)
            return resp.data
        } catch (error)  {
            throw error
        }
    }

    async post(path ,data ){
        try {
            let resp = await axios.post(this.url+path,data)
            return resp.data
        } catch (error)  {
            throw error
        }
    }
    async put (path, data){
        try {
            let resp = await axios.put(this.url+path,data)
            return resp.data
        } catch (error) {
            throw error
        }
    }
}

export default new Service