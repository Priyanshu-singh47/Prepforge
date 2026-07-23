const dsaQuestions = require("./dsaQuestions");
const dbmsQuestions = require("./dbmsQuestions");
const oopQuestions = require("./oopsQuestions");
const osQuestions = require("./osQuestions");
const cnQuestions = require("./cnQuestions");
const aptitudeQuestions = require("./aptitudeQuestions");
const systemDesignQuestions = require("./systemDesignQuestions");

module.exports = {
    ...dsaQuestions,
    ...dbmsQuestions,
    ...oopQuestions,
    ...osQuestions,
    ...cnQuestions,
    ...aptitudeQuestions,
    ...systemDesignQuestions,
};