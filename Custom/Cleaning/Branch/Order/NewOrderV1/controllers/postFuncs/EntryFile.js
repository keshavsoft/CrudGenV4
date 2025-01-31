import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBody = req.body;
    let LocalCustomerName = LocalBody.inCustomerName;
    let LocalMobileNumber = LocalBody.inMobileNumber;
    let LocalBranch = LocalParams.inBranch;

    let LocalFromRepo = PostFuncRepo({ inPostBody: LocalBody, inCustomerName: LocalCustomerName, inMobileNumber: LocalMobileNumber, inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

export { PostFunc };