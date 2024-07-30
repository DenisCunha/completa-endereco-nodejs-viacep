import completePostCode from './services/api_connect.js';

let cep = "06361400";
const consulta = await completePostCode(cep);

console.log(consulta);

