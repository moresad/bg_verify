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
    console.log('Marking Verification Status:Complete');
    await candidate.methods.markVerificationComplete(3).send({from: fromAddress, gas: 20000000});
}