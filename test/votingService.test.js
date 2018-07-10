const TreeDb =  require('../app/db/TreeDb');
const Node =  require('../app/db/DbNode');

const  {expect} = require('chai');

const service = require('../app/service/votingService');

const getterService = require('../app/service/topicGetterService');

describe("# Testing Topic Voting Service", () => {

    describe("# Testing Topics increase upVote Function", () => {

        it('should increase upvotecount', function (done) {

            getterService.getTopics(0,20, (err, data) => {

                expect(err).to.be.null;
                expect(data).to.be.not.null;

                if (data.data.length > 0) {

                    let node = data.data[0];

                    service.upVoteTopic(node.topicId, (err, data) => {

                        expect(err).to.be.null;

                        getterService.getTopic(node.topicId, (err, data) => {

                            expect(err).to.be.null;

                            let innerNode = data.data;

                            expect(innerNode.upVotes).to.be.equal(node.upVotes + 1)

                        })
                    });
                }

                done();
            })
        });

        it('should increase downvotecount', function (done) {

            getterService.getTopics(0,20, (err, data) => {

                expect(err).to.be.null;
                expect(data).to.be.not.null;

                if (data.data.length > 0) {

                    let node = data.data[0];

                    service.downVoteTopic(node.topicId, (err, data) => {

                        expect(err).to.be.null;

                        getterService.getTopic(node.topicId, (err, data) => {

                            expect(err).to.be.null;

                            let innerNode = data.data;

                            expect(innerNode.downVotes).to.be.equal(node.downVotes + 1)

                        })
                    });
                }

                done();
            })
        });

    });
});