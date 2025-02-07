import {
    GetFuncs as GetFuncsRepo,
    SimpleFuncs as SimpleFuncsRepo,
    ItemCountFuncs as ItemCountFuncsRepo

} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalFromRepo = GetFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let SimpleFuncs = (req, res) => {
    let LocalFromRepo = SimpleFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let ItemCountFuncs = (req, res) => {
    let LocalFromRepo = ItemCountFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs, SimpleFuncs, ItemCountFuncs
};