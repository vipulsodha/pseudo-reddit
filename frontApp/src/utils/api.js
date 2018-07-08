/**
 * Created by vipulsodha on 08/07/18.
 */

import axios  from 'axios';

import config from '../config/appConfig';

export const getTopics = (start = 1, limit = 20, callback) => {

    return axios.get(config.API_URL + '/topics')
        .then((response) => {
            return callback(null, response.data);
        })
        .catch((err) => {
            return callback(err, null);
        });
};

export const createNewTopic = (data, callback) => {

    return axios.post(config.API_URL + '/topics', data)
        .then((response) => {
            return callback(null, response);
        })
        .catch((err) => {
            return callback(err, null);
        });;
};
