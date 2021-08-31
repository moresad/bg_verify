let fs = require('fs');
let Web3 = require('web3');

let web3 = new Web3;
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:7545'));

let contractAddress = "0xD4DAC5Fde710b65234e97327a901430dA454494E";
let fromAddress = "0x33A15da1292141478B34087848499aAFE7B5990A";
let abiStr = fs.readFileSync('interact/abi_Candidate.json', 'utf8');
let abi = JSON.parse(abiStr);

let candidate = new web3.eth.Contract(abi, contractAddress);

module.exports = {
    getFromAddress: function() {
        return fromAddress;
    },

    getCandidate: function() {
        return candidate;
    },

    padString: function(inputStr, charCount) {
        inputStr = '|'+inputStr;
        for(charIndex=inputStr.length; charIndex<charCount; charIndex++) {
            inputStr = inputStr + ' ';
        }
        return inputStr;
    },

    getStatusString: function(statusVal) {
        switch(statusVal) {
            case '0': return 'Not Started';
            case '1': return 'In Progress';
            case '2': return 'Failed';
            case '3': return 'Completed';
        }
    }
 }