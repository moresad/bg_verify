var masterCandidate = require('./masterCandidate');

let candidate = masterCandidate.getCandidate();
let fromAddress = masterCandidate.getFromAddress();

sendTransactions()
    .then(function() {
        console.log('Done');
    }).catch(function(error) {
        console.log(error)
    });

async function sendTransactions() {
    console.log('Marking Verification Status:Failed');
    await candidate.methods.markVerificationFailed(2).send({from: fromAddress, gas: 20000000});
}