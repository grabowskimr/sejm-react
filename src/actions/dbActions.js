import axios from 'axios';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

const dbActions = {
    getEnvoyStructure: function() {
        return axios.get(`/dbCall.php?action=getEnvoyStructure`)
            .then(response => response.data)
    },

    addEnvoy: function(envoy) {
        const url = '/upload.php';
        const formData = new FormData();
        formData.append('image', envoy.image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)
            .then((response) => {
                const image = response.data.length > 0 ? '/'+ response.data : '/images/posel/avatar.jpg';
                for(var key in envoy) {
                    if(key.match(/criterion/)) {
                        envoy[key] = JSON.stringify(envoy[key]);
                    }
                };
                delete envoy.id;
                delete envoy.structure;
                return axios.post("/dbCall.php", {addEnvoy: true, envoy: envoy, image: image})
                    .then((response) => 'Dodano posła')
            });
    },

    getMeps: function() {
        return axios.get(`/dbCall.php?action=getMeps`)
            .then(response => response.data)
    },

    getEnvoy: function(id) {
        return axios.get(`/dbCall.php?action=getEnvoy&id=${id}`)
            .then(response => response.data[0])
    },

    updateEnvoy: function(envoy) {
        if(typeof envoy.image !== 'string') {
            const url = '/upload.php';
            const formData = new FormData();
            formData.append('image', envoy.image)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return axios.post(url, formData, config)
                .then((response) => {
                    const image = response.data.length > 0 ? '/'+ response.data : '/images/posel/avatar.jpg';
                    for(var key in envoy) {
                        if(key.match(/criterion/)) {
                            envoy[key] = JSON.stringify(envoy[key]);
                        }
                    };
                    var id = envoy.id;
                    delete envoy.id;
                    delete envoy.structure;
                    return axios.post("/dbCall.php", {updateEnvoy: true, envoy: envoy, image: image, id: id})
                        .then((response) => 'Uaktualniono posła');
                });
        } else {
            for(var key in envoy) {
                if(key.match(/criterion/)) {
                    envoy[key] = JSON.stringify(envoy[key]);
                }
            };
            var id = envoy.id;
            delete envoy.id;
            delete envoy.structure;
            return axios.post("/dbCall.php", {updateEnvoy: true, envoy: envoy, image: envoy.image, id: id})
                .then((response) => 'Uaktualniono posła');
        }
    },
}


export default dbActions;