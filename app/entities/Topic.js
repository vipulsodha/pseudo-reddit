/**
 * Created by vipulsodha on 07/07/18.
 */

/**
 *
 * @param title
 * @param author
 * @param upVotes
 * @param downVotes
 * @param createdTimeStamp
 * @return {{title: *, author: string, upVotes: number, downVotes: number, createdTimeStamp: number}}
 *
 */
const Topic = (title, author = 'anonymous', upVotes = 0, downVotes = 0, createdTimeStamp = new Date().getTime()) => {

    return {
        title,
        author,
        upVotes,
        downVotes,
        createdTimeStamp
    };
};

module.exports = Topic;