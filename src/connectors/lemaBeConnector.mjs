

var LEMABACKEND_ROOT_URL = "https://dolomite-imaginary-locust.glitch.me";
//const axios = require('axios');
import axios from 'axios';


const connector = {}

// DEPARTMENTS
const departments = {}
departments.listAll = async () => {
    let response = await axios.get(LEMABACKEND_ROOT_URL + "/api/departments/listall");
    return response;
}
departments.getbyid = async (id) => {
    let response = await axios.get(LEMABACKEND_ROOT_URL + "/api/departments/getbyid/" + id);
    return response;
}
departments.save = async (params) => {
    let response = await axios.post(LEMABACKEND_ROOT_URL + "/api/departments/save", params);
    return response;
}
connector.departments = departments;

export default connector;

/*
// DEPARTMENTS
async function departmentsGetById(id) {
    const response = await axios.get(LEMABACKEND_ROOT_URL + "/api/departments/getbyid/" + id);
    return response.data;
}    
function departmentsListAll() {
    const response = axios.get(LEMABACKEND_ROOT_URL + "/api/departments/listall");
    return response.data;
}
function departmentsSave(params) {
    const response = axios.post(LEMABACKEND_ROOT_URL + "/api/departments/save", params);
    return response.data;
}


module.exports = {
    departmentsGetById,
    departmentsListAll,
    departmentsSave
};
*/
