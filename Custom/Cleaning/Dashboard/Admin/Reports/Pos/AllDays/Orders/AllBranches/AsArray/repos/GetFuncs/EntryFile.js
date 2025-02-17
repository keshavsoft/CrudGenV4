import {
    GetAllFuncs as GetAllFuncsDal,
    GetSimpleFuncs as GetSimpleFuncsDal,
    GetItemCountFuncs as GetItemCountFuncsDal,
    GetIsSettledFuncs as GetIsSettledFuncsDal,
    GetWithSettlementFuncs as GetWithSettlementFuncsDal,
    GetWithDeliveryFuncs as GetWithDeliveryFuncsDal,
    GetSortByDateDescFuncs as GetSortByDateDescFuncsDal,
    GetSortByDateLatestFunc as GetSortByDateLatestFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetSimpleFuncs = () => {
    return GetSimpleFuncsDal();
};

let GetItemCountFuncs = () => {
    return GetItemCountFuncsDal();
};

let GetIsSettledFuncs = () => {
    return GetIsSettledFuncsDal();
};

let GetWithSettlementFuncs = () => {
    return GetWithSettlementFuncsDal();
};

let GetWithDeliveryFuncs = () => {
    return GetWithDeliveryFuncsDal();
};

let GetSortByDateFuncs = () => {
    return GetSortByDateFuncsDal();
};

let GetSortByDateDescFuncs = () => {
    return GetSortByDateDescFuncsDal();
};


let GetSortByDateLatestFunc = async () => {
    let LocalFromDal = await GetSortByDateLatestFuncDal();

    return LocalFromDal;
};

export {
    GetFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs, GetWithSettlementFuncs, GetWithDeliveryFuncs,
    GetSortByDateDescFuncs,
    GetSortByDateLatestFunc
};