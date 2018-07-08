/**
 * Created by vipulsodha on 07/07/18.
 */

/**
 * @public
 * @param title
 * @param author
 * @param upVotes
 * @param downVotes
 * @param createdTimeStamp
 * @return {{title: *, author: string, upVotes: number, downVotes: number, createdTimeStamp: number}}
 *
 */
const Topic = function(title, author = 'anonymous', upVotes = 0, downVotes = 0, createdTimeStamp = new Date().getTime(), topicId) {

    this.title = title;
    this.author = author;
    this.upVotes = upVotes;
    this.downVotes = downVotes;
    this.createdTimeStamp = createdTimeStamp;
    this.topicId = topicId;
};

module.exports = Topic;