/**
 * Created by vipulsodha on 08/07/18.
 */


const DbNode = function(title, author, upVotes, downVotes, createdTimeStamp, topicId) {

    this.title = title;
    this.author = author;
    this.upVotes = upVotes;
    this.downVotes = downVotes;
    this.createdTimeStamp = createdTimeStamp;
    this.topicId = topicId;
    this.right = null;
    this.left = null;
    this.ht = 0;
};

module.exports = DbNode;