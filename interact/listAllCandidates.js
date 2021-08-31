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
    console.log('List of All Candidates\n');
    info = await candidate.methods.getAllCandidates().call({from: fromAddress});

    if(info.length <= 0) {
        console.log('Candidate List is Empty');
        return;
    }

    console.log(masterCandidate.padString('Id', 10)
            +masterCandidate.padString('Name', 30)
            +masterCandidate.padString('Mobile', 15)
            +masterCandidate.padString('Status', 10)
            +'|');
    console.log('-'.repeat(66));
    for(i=0; i<info.length; i++) {
        console.log(masterCandidate.padString(info[i].id, 10)
            +masterCandidate.padString(info[i].name, 30)
            +masterCandidate.padString(info[i].mobile, 15)
            +masterCandidate.padString(masterCandidate.getStatusString(info[i].status), 10)
            +'|');
    }
    console.log('-'.repeat(66));
}