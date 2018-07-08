/**
 * Created by vipulsodha on 07/07/18.
 */

const TreeDb  = require('../db/TreeDb');
const Node = require('../db/DbNode');
const Topic = require('../entities/Topic');

const DB = TreeDb.InitDb();


/**
 * @private
 * @param {Topic} topic
 */
const mapTopicToDbNode = (topic) => {

    return new Node(topic.title, topic.aurthor, topic.upVotes, topic.downVotes, topic.createdTimeStamp, topic.topicId);
};

/**
 * @private
 * @param {DbNode} node
 */
const mapDbNodeToTopic = (node) => {

    return new Topic(node.title, node.aurthor, node.upVotes, node.downVotes, node.createdTimeStamp, node.topicId);
};


/**
 * @public
 * @param {Topic} topic
 */
const insertNewTopic = (topic)  => {

    DB.add(mapTopicToDbNode(topic))
};

/**
 * @public
 * @param {int} topicId
 * @return {Topic}
 */
const getTopic = (topicId)  => {

    DB.search(topicId);
};

/**
 * @public
 * @param {int} start
 * @param {int} limit
 * @return {Array.<Topic>}
 */
const getTopics = (start = 1, limit = 20)  => {

    const dbNodes = DB.getRangeItems(start, limit);

    if (dbNodes === null) {
        return null;
    }

    return dbNodes.map((node) => {
       return mapDbNodeToTopic(node);
    });
};

/**
 * @public
 * @param {int} topicId
 * @return {Boolean}
 */
const deleteTopic = (topicId)  => {

    DB.delete(topicId);

    return true;
};

/**
 * @public
 * @param {int} topicId
 * @return {Boolean}
 */
const upVoteTopic = (topicId)  => {

    DB.increaseUpVote(topicId);

    return true;
};

/**
 * @public
 * @param {int} topicId
 * @return {Boolean}
 */
const downVoteTopic = (topicId)  => {

    DB.increaseDownVote(topicId);

    return true;
};

const getTotalTopicCount = () => {
  return DB.getCount();
};

module.exports = {
    insertNewTopic,
    getTopic,
    getTopics,
    deleteTopic,
    upVoteTopic,
    downVoteTopic,
    getTotalTopicCount
};
