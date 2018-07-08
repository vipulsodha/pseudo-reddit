/**
 * Created by vipulsodha on 07/07/18.
 */

const TopicDao = require('../dao/TopicDao');

/**
 *
 *  Call this function get list of topics within the given range
 * @param {int} start
 * @param {int}limit
 * @return {Array.<Topic>}
 *
 */
const getTopics = (start = 1, limit = 20) => {

    return TopicDao.getTopics(start, limit);
};

/**
 * Call this service function to get topic with particular topic id
 *
 * @param {int} topicId
 * @return {Topic}
 */
const getTopic = (topicId) => {

    return TopicDao.getTopic(topicId);
};

module.exports = {
    getTopics,
    getTopic
};