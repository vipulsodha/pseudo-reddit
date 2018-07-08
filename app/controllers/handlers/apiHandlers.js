/**
 * Created by vipulsodha on 07/07/18.
 */
const topicCreationService = require('../../service/topicCreationService');
const topicGetterService = require('../../service/topicGetterService');
const votingService = require('../../service/votingService');


const createTopic = (request, h) => {

    topicCreationService.createNewTopic(request.payload);

    return h.response().code(201);
};

const getTopics = (request, h) => {

    return topicGetterService.getTopics(request.query.start, request.query.limit);
};

const getTopic = (request, h) => {

    return topicGetterService.getTopic(request.params.topicId);
};

const upVoteTopic = (request, h) => {

    votingService.upVoteTopic(request.params.topicId);
    return h.response().code(204);
};

const downVoteTopic = (request, h) => {

    votingService.downVoteTopic(request.params.topicId);
    return h.response().code(204);
};

module.exports = {

    createTopic,
    getTopics,
    getTopic,
    upVoteTopic,
    downVoteTopic
};