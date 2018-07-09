/**
 * Created by vipulsodha on 07/07/18.
 */

const TopicDao = require('../dao/TopicDao');

/**
 *
 *  Call this function get list of topics within the given range
 * @param {int} start
 * @param {int}limit
 * @param {Function} callback
 */
const getTopics = (start = 1, limit = 20, callback) => {

    TopicDao.getTopics(start, limit, callback);
};

/**
 * Call this service function to get topic with particular topic id
 *
 * @param {int} topicId
 * @param {Function} callback
 */
const getTopic = (topicId, callback) => {

    TopicDao.getTopic(topicId, callback);
};

module.exports = {
    getTopics,
    getTopic
};