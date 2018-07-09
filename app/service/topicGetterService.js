/**
 * Created by vipulsodha on 07/07/18.
 */

const TopicDao = require('../dao/TopicDao');
const DataTypes = require('../constants/dataType');

/**
 * Call back handler for topic getter service
 * @param callback
 * @returns {Function}
 */
const handleGetterCallback = (callback) => {

    return (err, data) => {

        if(err !== null || err) {
            return callback(err);
        }

        return callback(err, {dataType: DataTypes.DATA_RETRIEVED, data: data});
    }
};

/**
 *
 *  Call this function get list of topics within the given range
 * @param {int} start
 * @param {int}limit
 * @param {Function} callback
 */
const getTopics = (start = 1, limit = 20, callback) => {

    TopicDao.getTopics(start, limit, handleGetterCallback(callback));
};

/**
 * Call this service function to get topic with particular topic id
 *
 * @param {int} topicId
 * @param {Function} callback
 */
const getTopic = (topicId, callback) => {

    TopicDao.getTopic(topicId, handleGetterCallback(callback));
};

module.exports = {
    getTopics,
    getTopic
};