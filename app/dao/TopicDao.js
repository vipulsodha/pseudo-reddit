/**
 * Created by vipulsodha on 07/07/18.
 */

const TreeDb  = require('../db/TreeDb');
const Node = require('../db/DbNode');
const Topic = require('../entities/Topic');
const Errors = require('../errors/errorList').errorList;

const DB = TreeDb.InitDb();

/**
 * @private
 * @param {Topic} topic
 */
const mapTopicToDbNode = (topic) => {

    if (topic === null) {
        return null;
    }

    return new Node(topic.title, topic.author, topic.upVotes, topic.downVotes, topic.createdTimeStamp, topic.topicId);
};

/**
 * @private
 * @param {DbNode} node
 */
const mapDbNodeToTopic = (node) => {

    if(node === null) {
        return null;
    }

    return new Topic(node.title, node.author, node.upVotes, node.downVotes, node.createdTimeStamp, node.topicId);
};


/**
 * @public
 * @param {Topic} topic
 * @return {Function}
 */
const insertNewTopic = (topic, callback)  => {

    try {

        DB.add(mapTopicToDbNode(topic));

    } catch (e) {
        console.error(e, topic);
        return callback(Errors.cannotAddNewTopic);
    }

    return callback(null, topic);
};

/**
 * @public
 * @param {int} topicId
 * @return {Function}
 */
const getTopic = (topicId, callback)  => {

    let topic = DB.search(topicId);

    if (topic === null) {
        return callback(Errors.resourceNotFound);
    }

    return callback(null, mapDbNodeToTopic(topic));
};

/**
 * @public
 * @param {int} start
 * @param {int} limit
 * @return {Function}
 */
const getTopics = (start = 1, limit = 20, callback)  => {

    const dbNodes = DB.getRangeItems(start, limit);

    if (dbNodes === null) {
        return callback(null, []);
    }

    let result = dbNodes.map((node) => {
       return mapDbNodeToTopic(node);
    });

    return callback(null, result);
};

/**
 * @public
 * @param {int} topicId
 * @return {Function}
 */
const deleteTopic = (topicId, callback)  => {

    try {
        DB.delete(topicId);
    } catch (e) {
        console.error(e, topicId);
        return callback(Errors.cannotDeleteGivenTopic);
    }
    return callback(null);
};

/**
 * @public
 * @param {int} topicId
 * @return {Boolean}
 */
const upVoteTopic = (topicId, callback)  => {

    try {
        DB.increaseUpVote(topicId);
    } catch (e) {
        console.error(e, topicId);
        return callback(Errors.cannotChangeVote);
    }

    return callback(null);
};

/**
 * @public
 * @param {int} topicId
 * @return {Boolean}
 */
const downVoteTopic = (topicId, callback)  => {

    try {
        DB.increaseDownVote(topicId);
    } catch (e) {
        console.error(e, topicId);
        return callback(Errors.cannotChangeVote);
    }

    return callback(null);
};

module.exports = {
    insertNewTopic,
    getTopic,
    getTopics,
    deleteTopic,
    upVoteTopic,
    downVoteTopic
};
