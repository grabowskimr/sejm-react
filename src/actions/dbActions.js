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
                delete envoy.parties;
                return axios.post("/dbCall.php", {addEnvoy: true, envoy: envoy, image: image})
                    .then((response) => 'Dodano posła')
            });
    },

    getMeps: function(data) {
        return axios.get(`/dbCall.php?action=getMeps&name=${data.name}&surname=${data.surname}&party=${data.party}&constituency=${data.constituency}&page=${data.page}&step=${data.step}`)
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
                    delete envoy.parties;
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
            delete envoy.parties;
            return axios.post("/dbCall.php", {updateEnvoy: true, envoy: envoy, image: envoy.image, id: id})
                .then((response) => 'Uaktualniono posła');
        }
    },

    getParty: function(id) {
        return axios.get(`/dbCall.php?action=getParty`)
            .then(response => response.data)
    },

    addCriterion: function(criterion) {
        return axios.post("/dbCall.php", {addCriterion: true, name: criterion})
            .then((response) => 'Dodano kryterium');
    },

    removeCriterion: function(criterion) {
        return axios.post("/dbCall.php", {removeCriterion: true, name: criterion})
            .then((response) => {
                return {
                    status: 'Usunięto kryterium',
                    structure: response.data
                }
            });
    },

    stepForward: function(data) {
        return axios.get(`/dbCall.php?action=getMeps&name=${data.searchName}&surname=${data.searchSurname}&party=${data.searchParty}&constituency=${data.searchConsituency}&page=${data.page}&step=${data.step}`)
            .then(response => response.data)
    },

    stepBack: function(data) {
        return axios.get(`/dbCall.php?action=getMeps&name=${data.searchName}&surname=${data.searchSurname}&party=${data.searchParty}&constituency=${data.searchConsituency}&page=${data.page}&step=${data.step}`)
            .then(response => response.data)
    },

    removeEnvoy: function(id) {
        return axios.post("/dbCall.php", {removeEnvoy: true, id: id})
            .then((response) => 'Usunięto posła');
    }
}


export default dbActions;