/**
 * Created by vipulsodha on 08/07/18.
 */
/**
 * Balanced Binary tree implementation for storing inmemory data.
 */

const Node = require('../app/db/DbNode');
const TreeDb = require('../app/db/TreeDb');
const DB = TreeDb.InitDb();


var DB = new TreeDb();
DB.add(new Node("Title", "Vipul", 15, 0, 0, 1));
DB.add(new Node("Title", "Vipul", 12, 0, 0, 2));
DB.add(new Node("Title", "Vipul", 20, 0, 0, 3));
DB.add(new Node("Title", "Vipul", 8, 0, 0, 4));
DB.add(new Node("Title", "Vipul", 5, 0, 0, 5));
DB.add(new Node("Title", "Vipul", 10, 0, 0, 6));
DB.add(new Node("Title", "Vipul", 14, 0, 0, 7));
DB.add(new Node("Title", "Vipul", 21, 0, 0, 8));
DB.add(new Node("Title", "Vipul", 17, 0, 0, 9));
DB.add(new Node("Title", "Vipul", 25, 0, 0, 10));
DB.add(new Node("Title", "Vipul", 22, 0, 0, 11));
DB.add(new Node("Title", "Vipul", 29, 0, 0, 12));
DB.add(new Node("Title", "Vipul", 7, 0, 0, 13));
DB.add(new Node("Title", "Vipul", 9, 0, 0, 14));


DB.increaseUpVote(14);
DB.increaseUpVote(12);
DB.increaseUpVote(10);
DB.increaseUpVote(8);
DB.getRangeItems().forEach((v) => console.log(v.topicId,v.upVotes));



