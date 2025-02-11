import {
    GetFuncs as GetFuncsRepo,
    GetSimpleFuncs as GetSimpleFuncsRepo,
    GetItemCountFuncs as GetItemCountFuncsRepo,
    GetIsSettledFuncs as GetIsSettledFuncsRepo,
    GetWithSettlementFuncs as GetWithSettlementFuncsRepo,
    GetWithDeliveryFuncs as GetWithDeliveryFuncsRepo,
    GetSortByDateFuncs as GetSortByDateFuncsRepo

} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalFromRepo = GetFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetSimpleFuncs = (req, res) => {
    let LocalFromRepo = GetSimpleFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetItemCountFuncs = (req, res) => {
    let LocalFromRepo = GetItemCountFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetIsSettledFuncs = (req, res) => {
    let LocalFromRepo = GetIsSettledFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetWithSettlementFuncs = (req, res) => {
    let LocalFromRepo = GetWithSettlementFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetWithDeliveryFuncs = (req, res) => {
    let LocalFromRepo = GetWithDeliveryFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetSortByDateFuncs = (req, res) => {
    let LocalFromRepo = GetSortByDateFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs, GetWithSettlementFuncs, GetWithDeliveryFuncs, GetSortByDateFuncs
};