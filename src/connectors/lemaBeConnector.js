var LEMABACKEND_ROOT_URL = "https://dolomite-imaginary-locust.glitch.me";

function lemaBEConnector() {

    // DEPARTMENTS
    this.departmentsGetById = async function(id) {
        const response = await axios.get(LEMABACKEND_ROOT_URL + "/api/departments/getbyid/" + id);
        return response.data;
    }    
    this.departmentsListAll = async function() {
        const response = await axios.get(LEMABACKEND_ROOT_URL + "/api/departments/listall");
        return response.data;
    }
    this.departmentsSave = async function(params) {
        const response = await axios.post(LEMABACKEND_ROOT_URL + "/api/departments/save", params);
        return response.data;
    }

}

module.exports(lemaBEConnector)