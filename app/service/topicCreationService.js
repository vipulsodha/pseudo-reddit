/**
 * Created by vipulsodha on 07/07/18.
 */
const uuid = require('uuid');

const TopicDao = require('../dao/TopicDao');
const Topic = require('../entities/Topic');
const DataTypes = require('../constants/dataType');

/**
 * @private
 * @returns {UUID}
 */
const getNewTopicId =  () => {

    return uuid();
};

/**
 * call back handler for topic creation service
 * @param callback
 * @returns {Function}
 */
const handleCreationCallback = (callback) => {

    return (err, data) => {

        if(err !== null || err) {
            return callback(err);
        }

        return callback(null, {dataType: DataTypes.DATA_CREATED, data: data});
    }
};

/**
 *
 * @param {string} title
 * @param {string} author
 * @param {Function} callback
 */
const createNewTopic = ({title, author}, callback) => {

    const newTopicId = getNewTopicId();

    const topic = new Topic(title, author, 0, 0, new Date().getTime(), newTopicId);

    TopicDao.insertNewTopic(topic, handleCreationCallback(callback));
};


module.exports = {
    createNewTopic
};