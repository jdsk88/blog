const axios = require('axios');

axios.post('http://localhost:3000/users', {
    
    first_name: 'F',
    last_name: 'b',
    email: 'f'
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});   