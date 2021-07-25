import axios from "axios";
import { LOCAL_URL,SERVER_URL } from "./Constants";
class Functions{
    getQuizByCategory(category){
       return axios.get(`${SERVER_URL}/question/${category}`);
    }
    addUser(userData){
        return axios.post(`${SERVER_URL}/signup`,userData);
    }
    login(userData){
        return axios.post(`${SERVER_URL}/login`,userData);
    }
    isUserLoggedIn(){
        return sessionStorage.getItem("user")!=null;
    }
    calculateScore(quizBox,id,name){
        return axios.post(`${SERVER_URL}/score-evaluation/${id}/${name}`,quizBox);
    }
    getScoreTable(id){
        return axios.get(`${SERVER_URL}/check-score/${id}`);
    }
}
export default new Functions();