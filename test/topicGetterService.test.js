const TreeDb =  require('../app/db/TreeDb');
const Node =  require('../app/db/DbNode');

const  {expect} = require('chai');

const service = require('../app/service/topicGetterService');




describe("# Testing Topic Getter Service", () => {

    describe("# Testing Topics Getter Function", () => {

        it('should get list of topics from db', function (done) {

            service.getTopics(0,20, (err, data) => {

                expect(err).to.be.null;
                expect(data).to.be.not.null;
                expect(data.data).to.be.a('array').with.lengthOf.below(20);
                done();
            })
        });
    });
});