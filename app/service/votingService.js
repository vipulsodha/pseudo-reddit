/**
 * Created by vipulsodha on 07/07/18.
 */

const TopicDao = require('../dao/TopicDao');
const DataTypes = require('../constants/dataType');

/**
 * Call back handler for topic vote service
 * @param callback
 * @returns {Function}
 */
const handleVoteCallback = (callback) => {

    return (err, data) => {

        if(err !== null || err) {
            return callback(err);
        }

        return callback(err, {dataType: DataTypes.DATA_UPDATED, data: data});
    }
};
/**
 *
 * @param {int} topicId
 * @param {Function} callback
 */
const upVoteTopic = (topicId, callback) => {

     TopicDao.upVoteTopic(topicId, handleVoteCallback(callback));
};

/**
 *
 * @param {int} topicId
 * @param {Function} callback
 */
const downVoteTopic = (topicId, callback) => {

    TopicDao.downVoteTopic(topicId, handleVoteCallback(callback));
};

module.exports = {
    upVoteTopic,
    downVoteTopic
};