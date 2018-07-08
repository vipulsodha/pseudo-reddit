/**
 * Created by vipulsodha on 08/07/18.
 */
/**
 * Balanced Binary tree implementation for storing inmemory data.
 */
const Node = require('./DbNode');

var DB = null;

/**
 *
 * @return {TreeDb}
 * @constructor
 */
const InitDb = () => {

    if(DB === null) {
        DB = new TreeDb();
    }

    return DB;
};

/**
 * @public
 * @constructor
 */
const TreeDb = function () {

    this.root = null;
    this.dataMap = {};
    this.dataCount = 0;

};

/**
 * @public
 * @param {DbNode} node
 *
 */
TreeDb.prototype.add = function(node) {

    if(node.topicId in this.dataMap) {
        // TODO: handle error, two topics cannot have same topic id
    } else {

        this.dataMap[node.topicId] = node;
    }

    this.root = insert(this.root, node);

    increaseDataCount(this);
};

/**
 * Function used to search for topic Id
 * @param {int} topicId
 * @return {DbNode}
 */
TreeDb.prototype.search  = function(topicId) {

    return search(topicId, this.dataMap);
};

/**
 * Returns the count of topics available
 * @return {number}
 */
TreeDb.prototype.getCount  = function() {

    return this.dataCount;
};

/**
 * @public
 * @param {int} topicId
 */
TreeDb.prototype.delete  = function(topicId) {

    this.root = deleteNode(this.root, value);

    decreaseDataCount(this);
};

/**
 * A more generic approach to update values, can be implemented later
 */
// TreeDb.prototype.update = function (topicId, node) {
//
// };
//
// TreeDb.prototype.updateAndSort = function (topicId, node) {
//
// };


TreeDb.prototype.increaseUpVote = function (topicId) {

};

TreeDb.prototype.increaseDownVote = function (topicId) {

};

/**
 * @public
 * @param start
 * @param limit
 * @return {Array.<DbNode>}
 */
TreeDb.prototype.getRangeItems = function (start = 1, limit = 20) {

    return getRangeItems(this.root, start, limit);
};

const increaseDataCount = (this_) => {

    this_.dataCount = this_.dataCount + 1;
};

const decreaseDataCount = (this_) => {

    this_.dataCount = this_.dataCount - 1;
};

const getRangeItems = (root, start = 0, limit = 20) => {

    const topics = [];

    if(root === null) {
        return topics;
    }

    const stack = [];

    let i = 0;

    while (true) {

        if (root !== null) {
            stack.push(root);
            root = root.right;
        } else {

            if (stack.length === 0) {
                break;
            }

            root = stack.pop();
            i++;

            if(i >= start && i < (start + limit)) {
                topics.push(root);
            }

            if(i >= (start + limit)) {
                break;
            }

            root = root.left;
        }
    }

    return topics;
};

/**
 * This function is used to delete the smallest node on the
 * right of the node to be delete and return the node to reuse it instead of creating new
 * @param node
 * @param parent
 * @return {Object}
 */
const deleteAndGetMin = (node, parent) => {

    //TODO: fix me, some edge case I guess

    while (node.left !== null) {

        parent = node;
        node = node.left;
    }

    if (node.right !== null) {
        parent.right = node.right;
    }
};

/**
 * Function used to delete Node from tree
 * @private
 * @param root
 * @param topicId
 * @return {*}
 */
const deleteNode = function(root, topicId) {

    if(root === null) {
        // TODO: handler error

        return null;
    }

    if (root.topicId == topicId) {

        if (root.right === null && root.left === null) {
            return null;
        }

        if (root.right === null) {
            return root.left;
        }

        if (root.left === null) {
            return root.right;
        }

        // node.value = getMin(node.right);
        // node.right = deleteNode(node.right, node.value);

        let deletedNode = deleteAndGetMin(root.right, root);
        deletedNode.left = root.left;
        deletedNode.right = root.right;
        root = deletedNode;
        return root;

    } else {

        if(root.value > value) {
            root.left = deleteNode(root.left, topicId);
            return root.left;
        }

        if(root.value < value) {
            root.right = deleteNode(root.right, topicId);
            return root.right;
        }
    }
};

/**
 * Function used to search a topicId in the tree using recursion
 * @param {int} topicId
 * @return {DbNode}
 */
const search = (topicId, dataMap) => {

    if (topicId in dataMap) {
        return dataMap[topicId];
    }

    return null;

};

/**
 * Function used to insert node in the tree using recursion
 * @private
 * @param {DbNode} root
 * @param {DbNode} node
 * @return {DbNode}
 */
const insert = (root, node) => {

    if (root === null) {

        return node;
    }

    if (root.upVotes > node.upVotes) {

        root.left = insert(root.left, node);

    } else {

        root.right = insert(root.right, node);

    }

    return root;
};

const iterativeInsert =(node, value) => {

    if (node === null) {
        return createNode(value);
    }

    let parent = node;

    while (node != null) {

        parent = node;

        if (node.value > value) {
            node = node.left;
        } else  {
            node = node.right;
        }
    }
    if (parent.value > value) {
        parent.left = createNode(value);
    } else {
        parent.right = createNode(value);
    }
};

const iterativeSearch = (node, value) => {

    if (node === null ) {
        return null;
    }

    while (node !== null) {

        if (node.value === value) {
            break;
        }
        if (node.value > value) {
            node = node.left;
        } else  {
            node = node.right;
        }
    }

    return node;
};

module.exports = {InitDb};