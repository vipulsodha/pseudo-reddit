/**
 * Created by vipulsodha on 07/07/18.
 */

const httpMethods = require('../../util/httpMethods');
const configs = require('../routeConfigs/apiConfigs');

module.exports =  [
        {method: httpMethods.POST, path: '/api/topics', config: configs.createTopic},
        {method: httpMethods.GET, path: '/api/topics', config: configs.getTopics},
        {method: httpMethods.GET, path: '/api/topics/{topicId}', config: configs.getTopic},
        {method: httpMethods.POST, path: '/api/topics/{topicId}/upvote', config: configs.upVoteTopic},
        {method: httpMethods.POST, path: '/api/topics/{topicId}/downvote', config: configs.downVoteTopic}
];