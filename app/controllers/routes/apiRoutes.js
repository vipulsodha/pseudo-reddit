/**
 * Created by vipulsodha on 07/07/18.
 */

const configs = require('../routeConfigs/apiConfigs');

module.exports =  [
        {method: 'POST', path: '/api/topics', config: configs.createTopic},
        {method: 'GET', path: '/api/topics', config: configs.getTopics},
        {method: 'GET', path: '/api/topics/{topicId}', config: configs.getTopic},
        {method: 'POST', path: '/api/topics/{topicId}/upvote', config: configs.upVoteTopic},
        {method: 'POST', path: '/api/topics/{userId}/downvote', config: configs.downVoteTopic}
];