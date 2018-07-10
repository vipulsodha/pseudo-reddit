/**
 * Created by vipulsodha on 10/07/18.
 */

const errorTypes = {
    USER_ERROR: "user_defined",
    SYSTEM_ERROR: "system_error",
    RESOURCE_NOT_FOUND: "resource_not_found"
};


const errorList = {
    cannotAddNewTopic: {
        message: "Something went wrong",
        errorType: errorTypes.SYSTEM_ERROR
    },
    cannotDeleteGivenTopic: {
        message: "Topic does not exist",
        errorType: errorTypes.USER_ERROR
    },
    cannotChangeVote: {
        message: "Topic does not exist",
        errorType: errorTypes.USER_ERROR
    },
    resourceNotFound: {
        message: "Topic does not exist",
        errorType: errorTypes.RESOURCE_NOT_FOUND
    }
};

module.exports = {
    errorList,
    errorTypes
};
