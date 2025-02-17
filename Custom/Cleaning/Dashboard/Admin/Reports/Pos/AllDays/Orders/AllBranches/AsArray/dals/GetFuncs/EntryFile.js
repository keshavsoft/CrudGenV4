import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';
import { StartFunc as StartFuncsimple } from '../../kLowDb/ReadFromFile/simple.js';
import { StartFunc as StartFuncitemCount } from '../../kLowDb/ReadFromFile/itemCount.js';
import { StartFunc as StartFuncisSettled } from '../../kLowDb/ReadFromFile/isettled.js';
import { StartFunc as StartFuncwithSettle } from '../../kLowDb/ReadFromFile/withSettle.js';
import { StartFunc as StartFuncwithDelivery } from '../../kLowDb/ReadFromFile/withDelivery.js';
import { StartFunc as StartFuncsortByDateDesc } from '../../kLowDb/ReadFromFile/sortByDateDesc.js';
import { StartFunc as StartFuncFromGetSortByDateLatest } from '../../kLowDb/ReadFromFile/sortByDateLatest.js';

let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

let GetSimpleFuncs = () => {
    return StartFuncsimple();
};

let GetItemCountFuncs = () => {
    return StartFuncitemCount();
};

let GetIsSettledFuncs = () => {
    return StartFuncisSettled();
};

let GetWithSettlementFuncs = () => {
    return StartFuncwithSettle();
};

let GetWithDeliveryFuncs = () => {
    return StartFuncwithDelivery();
};

let GetSortByDateDescFuncs = () => {
    return StartFuncsortByDateDesc();
};

let GetSortByDateLatestFunc = async () => {
    let LocalFromLowDb = await StartFuncFromGetSortByDateLatest();

    return await LocalFromLowDb;
};

export {
    GetAllFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs, GetWithSettlementFuncs, GetWithDeliveryFuncs,
    GetSortByDateDescFuncs,
    GetSortByDateLatestFunc
};