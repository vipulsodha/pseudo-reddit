/**
 * Created by vipulsodha on 07/07/18.
 */


const TopicDao = require('../dao/TopicDao');

/**
 *
 * @param {int} topicId
 * @return {Boolean}
 */
const upVoteTopic = (topicId) => {

    return TopicDao.upVoteTopic(topicId);
};

/**
 *
 * @param {int} topicId
 * @return {Boolean}
 */
const downVoteTopic = (topicId) => {

    return TopicDao.downVoteTopic(topicId);
};

module.exports = {
    upVoteTopic,
    downVoteTopic
};