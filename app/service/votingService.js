/**
 * Created by vipulsodha on 07/07/18.
 */

const TopicDao = require('../dao/TopicDao');

/**
 *
 * @param {int} topicId
 * @param {Function} callback
 */
const upVoteTopic = (topicId, callback) => {

     TopicDao.upVoteTopic(topicId, callback);
};

/**
 *
 * @param {int} topicId
 * @param {Function} callback
 */
const downVoteTopic = (topicId, callback) => {

    TopicDao.downVoteTopic(topicId, callback);
};

module.exports = {
    upVoteTopic,
    downVoteTopic
};