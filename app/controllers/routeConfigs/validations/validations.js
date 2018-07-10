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
    topicId: Joi.string().required()
};

const upVoteTopicParam = {
    topicId: Joi.string().required()
};

const downVoteTopicParam = {
    topicId: Joi.string().required()
};

const createSchema =  (v, o)  => {

    return Joi.object(v).options(o)
};

const options = {
    abortEarly: false
}

module.exports = {
    createTopicPayload: createSchema(createTopicPayload, options),
    getTopicsQuery: createSchema(getTopicsQuery, options),
    getTopicParam: createSchema(getTopicParam, options),
    upVoteTopicParam: createSchema(upVoteTopicParam, options),
    downVoteTopicParam: createSchema(downVoteTopicParam, options)
};


