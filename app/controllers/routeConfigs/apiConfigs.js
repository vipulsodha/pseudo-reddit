/**
 * Created by vipulsodha on 07/07/18.
 */

const handlers = require('../handlers/apiHandlers');
const validations = require('./validations/validations');

/**
 * This module contains all the api configs, docs, validations and handlers.
 *
 * @type {{createTopic: {description: string, tags: string[], notes: string[], validate: {payload}, handler: createTopic}, getTopics: {description: string, tags: string[], notes: string[], validate: {query}, handler: getTopics}, getTopic: {description: string, tags: string[], notes: string[], validate: {params}, handler: getTopic}, upVoteTopic: {description: string, tags: string[], notes: string[], validate: {params}, handler: upVoteTopic}, downVoteTopic: {description: string, tags: string[], notes: string[], validate: {params}, handler: downVoteTopic}}}
 */
module.exports = {

    createTopic: {
        description: 'Creates a Topic',
        tags: ['api'],
        notes:['Creates topic and returns topic id'],
        validate: {
            payload: validations.createTopicPayload
        },
        handler: handlers.createTopic
    },
    getTopics: {
        description: 'Gets a list of topics',
        tags: ['api'],
        notes:['Need to pass start and limit as query parameters for getting list of topics, else default will return top 20'],
        validate: {
            query: validations.getTopicsQuery
        },
        handler: handlers.getTopics
    },
    getTopic: {
        description: 'Get a specific topic',
        tags: ['api'],
        notes:['Need to pass the topic id as path param'],
        validate: {
            params: validations.getTopicParam
        },
        handler: handlers.getTopic
    },
    upVoteTopic: {
        description: 'Up votes a Topic',
        tags: ['api'],
        notes:['Need to pass topic id as path param'],
        validate: {
            params: validations.getTopicParam
        },
        handler: handlers.upVoteTopic
    },
    downVoteTopic: {
        description: 'Down votes a Topic',
        tags: ['api'],
        notes:['Need to pass topic id as path param'],
        validate: {
            params: validations.getTopicParam
        },
        handler: handlers.downVoteTopic
    }
};