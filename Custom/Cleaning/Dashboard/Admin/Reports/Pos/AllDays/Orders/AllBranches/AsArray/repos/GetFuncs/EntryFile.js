import {
    GetAllFuncs as GetAllFuncsDal,
    SimpleFuncs as SimpleFuncsDal,
    ItemCountFuncs as ItemCountFuncsDal,
    IsSettledFuncs as IsSettledFuncsDal,
    WithSettlementFuncs as WithSettlementFuncsDal,
    WithDeliveryFuncs as WithDeliveryFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let SimpleFuncs = () => {
    return SimpleFuncsDal();
};

let ItemCountFuncs = () => {
    return ItemCountFuncsDal();
};

let IsSettledFuncs = () => {
    return IsSettledFuncsDal();
};

let WithSettlementFuncs = () => {
    return WithSettlementFuncsDal();
};

let WithDeliveryFuncs = () => {
    return WithDeliveryFuncsDal();
};

export {
    GetFuncs, SimpleFuncs, ItemCountFuncs, IsSettledFuncs, WithSettlementFuncs, WithDeliveryFuncs
};