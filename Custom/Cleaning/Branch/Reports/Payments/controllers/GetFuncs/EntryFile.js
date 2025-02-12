import {
    GetFuncs as GetFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;    
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetFuncsRepo({inBranch: LocalBranch, inFromDate:LocalFromDate, inToDate:LocalToDate });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs
};