/**
 * Created by vipulsodha on 08/07/18.
 */
/**
 * Balanced Binary tree implementation for storing inmemory data.
 */
const Node = require('./DbNode');
const Errors = require('./DbError');

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
};

/**
 * @public
 * @param {DbNode} node
 * @throws {Error}
 */
TreeDb.prototype.add = function(node) {

    if(node.topicId in this.dataMap) {

        throw new Error(Errors.cannotAddAlreadyExists);

    } else {

        this.dataMap[node.topicId] = node;
    }

    this.root = insertAndBalance(this.root, node);
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
 * @public
 * @param {int} topicId
 * @throws {Error}
 */
TreeDb.prototype.delete  = function(topicId) {

    let node = this.search(topicId);

    if(node === null) {
        throw new Error(Errors.recordDoesNotExist);
    }

    this.root = deleteNode(this.root, topicId, node.upVotes);

    deleteFromDataMap(topicId, this.dataMap);

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

/**
 *
 * @param topicId
 * @throws {Error}
 *
 */
TreeDb.prototype.increaseUpVote = function (topicId) {

    let node = this.search(topicId);

    if (node === null) {
        throw new Error(Errors.recordDoesNotExist);
    }

    this.delete(topicId);

    node.upVotes++;
    node.right = null;
    node.left = null;

    this.add(node);
};

TreeDb.prototype.increaseDownVote = function (topicId) {

    let node = this.search(topicId);

    if (node === null) {
        throw new Error(Errors.recordDoesNotExist);

    }

    node.downVotes++;
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

/**
 * Call this function to get range of topics from start to limit in decending order
 *
 * @param {DbNode} root
 * @param {int} start
 * @param {int} limit
 * @return {Array.<DbNode>}
 */
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
 *
 * @param topicId
 * @param dataMap
 */
const deleteFromDataMap = (topicId, dataMap) => {

    if(topicId in dataMap) {
        delete dataMap[topicId];
    }
};

/**
 * Function used to delete Node from tree
 * @private
 * @param root
 * @param topicId
 * @return {*}
 */
const deleteNode = function(root, topicId, upVotes) {

    if(root === null) {

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

        root.ht = Math.max(ht(root.left), ht(root.right)) + 1;

        let balanceFactor = bf(root);

        // Left left
        if (balanceFactor > 1 && root.left !== null && bf(root.left) >= 0) {
            return rightRotate(root);
        }

        // right right
        if(balanceFactor < -1 && root.right !== null && bf(root.right) <= 0) {
            return rightRotate(root);
        }

        // Left right
        if (balanceFactor > 1 && root.left !== null && bf(root.left) < 0) {

            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        // right left
        if(balanceFactor < -1 && root.right !== null && bf(root.right) > 0) {
            root.right = rightRotate(root);
            return leftRotate(root);
        }

    } else {

        if(root.upVotes > upVotes) {
            root.left = deleteNode(root.left, topicId, upVotes);
        }

        if(root.upVotes <= upVotes) {
            root.right = deleteNode(root.right, topicId, upVotes);

        }
    }

    return root;
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

    if(node.left == null) {
        parent.right = node.right;
        return node;
    }

    while (node.left !== null) {

        parent = node;
        node = node.left;
    }

    parent.left = node.right;

    return node;
};

/**
 * @private
 * @param {} node
 * @returns {DbNode}
 */
const getMin = (node) => {

    while (node.left !== null) {
        node = node.left;
    }

    return node;
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
 * Function used to insert node in the tree using recursion, not balanced insertion
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

/**
 * @private
 * @param {DbNode} root
 * @param {DbNode} node
 * @return {DbNode}
 */
const insertAndBalance = (root, node) => {

    if (root == null) {
        return node;
    }

    if (node.upVotes < root.upVotes) {

        root.left = insertAndBalance(root.left, node);

    } else {

        root.right = insertAndBalance(root.right, node);
    }

    root.ht = Math.max(ht(node.left), ht(node.right)) + 1;

    let balanceFactor = ht(root.left) - ht(root.right);

    // left left
    if (balanceFactor > 1 && root.left !== null && root.upVotes > node.upVotes) {
            return rightRotate(root);
    }

    // right right
    if(balanceFactor < -1 && root.right !== null && root.upVotes <= node.upVotes) {
        return leftRotate(root);
    }

    //left right
    if(balanceFactor > 1 && root.left !== null && root.upVotes <= node.upVotes) {

        root.left = leftRotate(root.left);
        return rightRotate(root);

    }

    // right left
    if(balanceFactor < -1 && root.right !== null && root.upVotes > node.upVotes) {

        root.right = rightRotate(root.right);
        return leftRotate(root);
    }

    return root;
};


/**
 * @private
 * @param {DbNode} root
 * @returns {DbNode}
 */
const leftRotate = (root) => {

    let rightNode = root.right;

    root.right = rightNode.left;

    rightNode.left = root;

    return rightNode;
};

/**
 * @private
 * @param {DbNode} root
 * @returns {*}
 */
const rightRotate = (root) => {

    let leftNode = root.left;

    root.left = leftNode.right;

    leftNode.right = root;

    return leftNode;
};

/**
 * @private
 * @param {DbNode} node
 * @returns {DbNode}
 */
const ht = (node) => {

    if (node === null) {
        return 0;
    }

    return node.ht;
};

/**
 * @private
 * @param {DbNode} root
 * @returns {number}
 */
const bf = (root) => {

    return ht(root.left) - ht(root.right);
};

const iterativeInsert = (node, value) => {

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