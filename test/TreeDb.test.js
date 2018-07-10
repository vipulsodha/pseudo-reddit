
const TreeDb =  require('../app/db/TreeDb');
const Node =  require('../app/db/DbNode');

const  {expect} = require('chai');

const DB = TreeDb.InitDb();

describe("# Testing Tree DB", () => {

    describe("# Testing Add to DB", () => {

        it("should add data to db", (done) => {

            try {

                DB.add(new Node("Title", "Vipul", 1, 0, 0, 1));
                DB.add(new Node("Title", "Vipul", 2, 0, 0, 2));
                DB.add(new Node("Title", "Vipul", 3, 0, 0, 3));
                DB.add(new Node("Title", "Vipul", 4, 0, 0, 4));
                DB.add(new Node("Title", "Vipul", 5, 0, 0, 5));
                DB.add(new Node("Title", "Vipul", 6, 0, 0, 6));
                DB.add(new Node("Title", "Vipul", 7, 0, 0, 7));
                DB.add(new Node("Title", "Vipul", 8, 0, 0, 8));
                DB.add(new Node("Title", "Vipul", 9, 0, 0, 9));
                DB.add(new Node("Title", "Vipul", 10, 0, 0, 10));
                DB.add(new Node("Title", "Vipul", 11, 0, 0, 11));
                DB.add(new Node("Title", "Vipul", 12, 0, 0, 12));
                DB.add(new Node("Title", "Vipul", 13, 0, 0, 13));
                DB.add(new Node("Title", "Vipul", 14, 0, 0, 14));
                done();
            } catch (e) {
                done(e);
            }
        });

        it("should throw error if duplicate key is added", (done) => {
            try {

                DB.add(new Node("Title", "Vipul", 14, 0, 0, 14));

                done(new Error("Should not add duplicate keys"));

            } catch (e) {

                done();
            }
        });
    });

    describe("# Testing get Range items function", () => {

        it("should increase downvote for the given key" , () => {

            let nodes = DB.getRangeItems();

            expect(nodes.map((n) => n.upVotes)).to.deep.equal([14,13,12,11,10,9,8,7,6,5,4,3,2,1])
        });

    });


    describe("# Testing search function", () => {

        it('should return node for the given key', function () {

            let node = DB.search(14);

            expect(node).to.not.be.null;
            expect(node.topicId).to.be.equal(14);

        });

        it('should return null for the given key', function () {

            let node = DB.search(20);

            expect(node).to.be.null;

        });
    });

    describe("# Testing delete function", () => {

        it("should delete the node and search should give null after delete" , () => {

            DB.delete(14);

            let node = DB.search(14);
            expect(node).to.be.null;
        });

        it("throws error when unknown key is passed to delete" , () => {

            expect(() => DB.delete(14)).to.throw(Error);
        });
    });


    describe("# Testing increase upvote function", () => {

        it("should increase upvote for the given key" , () => {

            DB.increaseUpVote(13);

            let node = DB.search(13);
            expect(node).to.be.not.null;
            expect(node.upVotes).to.be.equal(14);
        });

        it("should increase throw exception for upvoting the given key" , () => {

            expect(() => DB.increaseUpVote(14)).to.throw(Error);

        });
    });


    describe("# Testing increase downvote function", () => {

        it("should increase downvote for the given key" , () => {

            DB.increaseDownVote(13);

            let node = DB.search(13);
            expect(node).to.be.not.null;
            expect(node.downVotes).to.be.equal(1);
        });

        it("should increase throw exception for upvoting the given key" , () => {

            expect(() => DB.increaseDownVote(14)).to.throw(Error);

        });
    });
});
