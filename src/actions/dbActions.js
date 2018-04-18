import axios from 'axios';

const dbActions = {
    getEnvoyStructure: function() {
        return axios.get('/dbCall.php?action=getEnvoyStructure')
            .then(response => response.data)
    }
}


export default dbActions;