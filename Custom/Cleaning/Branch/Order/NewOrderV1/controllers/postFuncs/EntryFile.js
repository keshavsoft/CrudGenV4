import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalCustomerName = LocalParams.inCustomerName;
    let LocalMobileNumber = LocalParams.inMobileNumber;
    let LocalBranch = LocalParams.inBranch;

    let LocalBody = req.body;

    let LocalFromRepo = PostFuncRepo({ inPostBody: LocalBody, inCustomerName: LocalCustomerName, inMobileNumber: LocalMobileNumber, inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

export { PostFunc };