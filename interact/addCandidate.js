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
    console.log('Adding Candidates Info');
    await candidate.methods.addCandidate("Sagar More 1", 9865564544).send({from: fromAddress, gas: 20000000});
    await candidate.methods.addCandidate("Sagar More 2", 8865564544).send({from: fromAddress, gas: 20000000});
    await candidate.methods.addCandidate("Sagar More 3", 7865564544).send({from: fromAddress, gas: 20000000});
    await candidate.methods.addCandidate("Sagar More 4", 6865564544).send({from: fromAddress, gas: 20000000});
    await candidate.methods.addCandidate("Sagar More 5", 5865564544).send({from: fromAddress, gas: 20000000});
    console.log('Adding Candidates Info Completed');

    // let id = await candidate.methods.getCandidateId().call({from: fromAddress});
    
    // if(!isNaN(id)) {
    //     console.log('Transaction Completed Success');
    //     info = await candidate.methods.getCandidateInfo(id).call({from: fromAddress});
    //     console.log(masterCandidate.padString(info.id, 10)
    //         +masterCandidate.padString(info.name, 30)
    //         +masterCandidate.padString(info.mobile, 15)
    //         +masterCandidate.padString(masterCandidate.getStatusString(info.status), 10)
    //         +'|');
    // }
    // else {
    //     console.log('ERROR: Transaction Failed');
    // }
}