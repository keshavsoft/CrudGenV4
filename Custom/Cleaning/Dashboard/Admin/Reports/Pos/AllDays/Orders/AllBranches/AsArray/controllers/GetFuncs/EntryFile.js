import {
    GetFuncs as GetFuncsRepo,
    SimpleFuncs as SimpleFuncsRepo,
    ItemCountFuncs as ItemCountFuncsRepo,
    IsSettledFuncs as IsSettledFuncsRepo,
    WithSettlementFuncs as WithSettlementFuncsRepo,
    WithDeliveryFuncs as WithDeliveryFuncsRepo

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

let IsSettledFuncs = (req, res) => {
    let LocalFromRepo = IsSettledFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let WithSettlementFuncs = (req, res) => {
    let LocalFromRepo = WithSettlementFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let WithDeliveryFuncs = (req, res) => {
    let LocalFromRepo = WithDeliveryFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs, SimpleFuncs, ItemCountFuncs, IsSettledFuncs, WithSettlementFuncs, WithDeliveryFuncs
};