const TreeDb =  require('../app/db/TreeDb');
const Node =  require('../app/db/DbNode');

const  {expect} = require('chai');

const service = require('../app/service/topicCreationService');


describe("# Testing Topic Creation Service", () => {

    describe("# Testing Topic Creation Function", () => {

        it('should add topic to Db ', function (done) {

            service.createNewTopic({title: "Test"}, (err, data) => {

                expect(err).to.be.null;

                done();

            });
        });
    });
});