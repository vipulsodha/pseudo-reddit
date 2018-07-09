/**
 * Created by vipulsodha on 07/07/18.
 */
const topicCreationService = require('../../service/topicCreationService');
const topicGetterService = require('../../service/topicGetterService');
const votingService = require('../../service/votingService');
const ErrorTypes = require('../../errors/errorList').errorTypes;
const DataTypes = require('../../constants/dataType');

/**
 * Generic call back handler for handling error messages and status codes
 * @param h
 * @param resolve
 * @returns {Function}
 */
const callbackHandler = (h, resolve) => {

    return (err, res) => {

        if (err != null || err) {

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
            switch (res.dataType) {

                case DataTypes.DATA_CREATED:

                    resolve(h.response(res.data).code(201));

                    break;
                case DataTypes.DATA_DELETED:

                    resolve(h.response(res.data).code(204));

                    break;
                case DataTypes.DATA_RETRIEVED:

                    resolve(h.response(res.data).code(200));

                    break;
                case DataTypes.DATA_UPDATED:

                    resolve(h.response(res.data).code(204));

                    break;
                default:

                    resolve(h.response(res.data).code(200));

                    break;
            }
        }
    }
};

/**
 * Handler used to create topic.
 * @param request
 * @param h
 * @returns {Promise<any>}
 */
const createTopic = async (request, h) => {

    return new Promise((resolve) => {
        topicCreationService.createNewTopic(request.payload, callbackHandler(h, resolve));
    });

};

/**
 * Handler used to get topics
 * @param request
 * @param h
 * @returns {Promise<any>}
 */
const getTopics = async  (request, h) => {

    return new Promise((resolve) => {

        topicGetterService.getTopics(request.query.start, request.query.limit, callbackHandler(h, resolve));
    });

};

/**
 * Handler used to get a particular topic
 * @param request
 * @param h
 * @returns {Promise<any>}
 */
const getTopic = async (request, h) => {

    return new Promise((resolve) => {

        topicGetterService.getTopic(request.params.topicId, callbackHandler(h, resolve));
    });
};

/**
 * Handler used to upvote topic
 * @param request
 * @param h
 * @returns {Promise<any>}
 */
const upVoteTopic = async (request, h) => {

    return new Promise((resolve) => {

        votingService.upVoteTopic(request.params.topicId, callbackHandler(h, resolve));
    });
};

/**
 * Handler used to downvote Topic
 * @param request
 * @param h
 * @returns {Promise<any>}
 */
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