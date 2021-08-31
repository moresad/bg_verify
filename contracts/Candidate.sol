// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract Candidate
{
    //List of properties
    enum verificationStatus {
        NO_STARTED,
        IN_PROGRESS,
        FAILED,
        COMPLETED
    }

    struct candidateInfo {
        uint id;
        string name;
        uint mobile;
        verificationStatus status;
    }

    uint[] public candidateIds;

    mapping(uint => candidateInfo) candidateList;

    constructor(uint _id, string memory _name) public
    {
        //candidateIds.push(_id);
    }

    function getCandidateInfo(uint _id) public view returns(candidateInfo memory) {
        candidateInfo memory thisCandidatesInfo = candidateList[_id];
        thisCandidatesInfo.id = _id;
        return thisCandidatesInfo;
    }

    function getCandidateId() public view returns(uint) {
        return candidateIds[candidateIds.length - 1];
    }

    function getAllCandidates() public view returns(candidateInfo[] memory) {
        candidateInfo[] memory allCandidatesInfo = new candidateInfo[](candidateIds.length);

        for(uint i=0; i<candidateIds.length; i++) {
            allCandidatesInfo[i] = candidateList[candidateIds[i]];
            allCandidatesInfo[i].id = candidateIds[i];
        }

        return allCandidatesInfo;
    }

    function addCandidate(string memory _name, uint _mobile) public {
        
        //Validate before add
        for(uint i=0; i<candidateIds.length; i++) {
            if(candidateList[candidateIds[i]].mobile == _mobile) {
                return;
            }
        }

        //Add to list
        uint newId = 1;
        if(candidateIds.length > 0) {
            newId = candidateIds[candidateIds.length-1] + 1;
        }

        candidateIds.push(newId);
        candidateInfo storage newCandidate = candidateList[newId];
        newCandidate.name = _name;
        newCandidate.mobile = _mobile;
        newCandidate.status = verificationStatus.NO_STARTED;
    }

    function startVerification(uint _id) public {
        candidateInfo storage newCandidate = candidateList[_id];
        newCandidate.status = verificationStatus.IN_PROGRESS;
    }

    function markVerificationFailed(uint _id) public {
        candidateInfo storage newCandidate = candidateList[_id];
        newCandidate.status = verificationStatus.FAILED;
    }

    function markVerificationComplete(uint _id) public {
        candidateInfo storage newCandidate = candidateList[_id];
        newCandidate.status = verificationStatus.COMPLETED;
    }
}