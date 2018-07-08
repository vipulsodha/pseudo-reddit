/**
 * Created by vipulsodha on 08/07/18.
 */

const Joi = require('joi');

const createTopicPayload = {
    title: Joi.string().min(1).max(255).trim().required(),
    author: Joi.string().min(1).max(50).trim()
};

const getTopicsQuery = {
    limit: Joi.number().integer().min(1),
    start: Joi.number().integer().min(1)
};

const getTopicParam = {
    topicId: Joi.number().integer().min(1).required()
};

const upVoteTopicParam = {
    topicId: Joi.number().integer().min(1).required()
};

const downVoteTopicParam = {
    topicId: Joi.number().integer().min(1).required()
};

module.exports = {
    createTopicPayload,
    getTopicsQuery,
    getTopicParam,
    upVoteTopicParam,
    downVoteTopicParam
};

