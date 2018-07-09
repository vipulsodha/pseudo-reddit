/**
 * Created by vipulsodha on 07/07/18.
 */
const topicCreationService = require('../../service/topicCreationService');
const topicGetterService = require('../../service/topicGetterService');
const votingService = require('../../service/votingService');
const ErrorTypes = require('../../errors/errorList').errorTypes;



const callbackHandler = (h, resolve) => {

    return (err, data) => {

        if (err != null) {

            switch (err.errorType) {
                case ErrorTypes.SYSTEM_ERROR:

                    resolve(h.response(err.message).code(500));
                    break;

                case ErrorTypes.USER_ERROR:
                    resolve(h.response(err.message).code(422));
                    break;
                default:
                    resolve(h.response('Something went Wrong :(').code(500));
                    break;
            }
        } else {

            resolve(h.response(data).code(200));
        }
    }
};


const createTopic = async (request, h) => {

    return new Promise((resolve) => {
        topicCreationService.createNewTopic(request.payload, callbackHandler(h, resolve));
    });

};

const getTopics = async  (request, h) => {

    return new Promise((resolve) => {

        topicGetterService.getTopics(request.query.start, request.query.limit, callbackHandler(h, resolve));
    });

};

const getTopic = async (request, h) => {

    return new Promise((resolve) => {

        topicGetterService.getTopic(request.params.topicId, callbackHandler(h, resolve));
    });
};

const upVoteTopic = async (request, h) => {

    return new Promise((resolve) => {

        votingService.upVoteTopic(request.params.topicId, callbackHandler(h, resolve));
    });
};

const downVoteTopic = async (request, h) => {

    return new Promise((resolve) => {

        votingService.downVoteTopic(request.params.topicId, callbackHandler(h, resolve));
    });
};

module.exports = {

    createTopic,
    getTopics,
    getTopic,
    upVoteTopic,
    downVoteTopic
};