/**
 * Created by vipulsodha on 08/07/18.
 */
/**
 * Balanced Binary tree implementation for storing inmemory data.
 */

var DB = null;

function InitDb() {

    if(DB === null) {
        DB = new TreeDb();
    }

    return DB;
}


function Node(value) {

    this.value = value;
    this.right = null;
    this.left = null;
}


function createNode(value) {
    return new Node(value);
}

function TreeDb() {

    this.root = null;

}

TreeDb.prototype.add = function(value) {

   this.root = insert(this.root, value);

};

TreeDb.prototype.search  = function(value) {

    return search(this.root, value);

};

TreeDb.prototype.delete  = function(value) {

    this.root = deleteNode(this.root, value);

};

/**
 * This function is used to delete the smallest node on the
 * right of the node to be delete and return the node to reuse it instead of creating new
 * @param node
 * @param parent
 * @return {Object}
 */
function deleteAndGetMin(node, parent) {

    //TODO: fix me, some edge case I guess

    while (node.left !== null) {
        parent = node;
        node = node.left;
    }

    if (node.right !== null) {
        parent.right = node.right;
    }

}


function deleteNode(node, value) {


    if(node === null) {
        // TODO: handler error

        return null;
    }

    if (node.value == value) {

        if (node.right === null && node.left === null) {
            return null;
        }

        if (node.right === null) {
            return node.left;
        }

        if (node.left === null) {
            return node.right;
        }

        // node.value = getMin(node.right);
        // node.right = deleteNode(node.right, node.value);

        let deletedNode = deleteAndGetMin(node.right, node);
        deletedNode.left = node.left;
        deletedNode.right = node.right;
        node = deletedNode;
        return node;
    } else {

        if(node.value > value) {
            node.left = deleteNode(node.left, value);
            return node.left;
        }
        if(node.value < value) {
            node.right = deleteNode(node.right, value);
            return node.right;
        }

    }
}

function search(node, value) {
    if (node === null) {
        return null;
    }

    if (node.value === value) {
        return value;
    }

    if (node.value > value) {
        return search(node.left, value);
    }

    return search(node.right, value);

}

function insert(node, value) {

    if (node === null) {

        return createNode(value);
    }

    if (node.value > value) {

       node.left = insert(node.left, value);

    } else {

        node.right = insert(node.right, value);

    }

    return node;

}

function iterativeInsert(node, value) {

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
}


function iterativeSearch(node, value) {

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
}


module.exports = {InitDb};

