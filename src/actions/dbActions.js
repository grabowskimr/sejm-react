import axios from 'axios';

const dbActions = {
    getEnvoyStructure: function() {
        axios.get('/dbCall.php?action=getEnvoyStructure')
            .then(response => response.data)
    }
}


export default dbActions;