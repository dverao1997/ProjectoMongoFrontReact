import axios from "axios";

export class ProductService {

    //baseUrl = "http://localhost:8080/api/products/";
    baseUrl = "https://projectomongoback-production.up.railway.app/producto/";
    create(product){
        return axios.post(this.baseUrl+"cr", product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(product){
        return axios.put(this.baseUrl+"up/"+product._id, product).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+"dl/"+id).then(res => res.data);
    }
}


