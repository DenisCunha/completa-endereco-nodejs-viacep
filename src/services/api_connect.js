
import getJSON from "get-json";

async function completePostCode (postcode) {
    const end = "https://viacep.com.br/ws/"+ postcode +"/json";
    
    const resp = null;
    getJSON(end, function(error, response) {
    resp = console.log(response);
    });	

    return resp;
}

export default completePostCode;