/**
 * Created by vipulsodha on 07/07/18.
 */


const TopicDao = require('../dao/TopicDao');
const Topic = require('../entities/Topic');


const getNewTopicId = function (count) {

   count = count + 1;

};

const createNewTopic = ({title, author}) => {

    const newTopicId = getNewTopicId(TopicDao.getTotalTopicCount());

    const topic = new Topic(title, author, 0, 0, new Date().getTime(), newTopicId);

    TopicDao.insertNewTopic(topic);
};


exports.module = {
    createNewTopic
};