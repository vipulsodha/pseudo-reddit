/**
 * Created by vipulsodha on 07/07/18.
 */
module.exports = {

    createTopic(request, response) {
        return "Create Topic";

    },
    getTopics(request, response) {

        return `start :${request.query.start} , limit : ${request.query.limit}`;
    },
    getTopic(request, response) {

        return `${request.params.topicId}`;
    },
    upVoteTopic(request, response) {

        return "upvote Topic";
    },
    downVoteTopic(request, response) {

        return "down Topic";
    }
};