var Candidate = artifacts.require("Candidate");

module.exports = deployer => {
    deployer.deploy(Candidate, 0, "");
};