import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/withRows.js';
import { StartFunc as StartFuncmergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';


let GetAllFuncs = () => {
    return StartFuncmergeArray();
};

let GetWithRowsFuncs = () => {
    return TodayAllQrCodes();
};

export {
    GetAllFuncs, GetWithRowsFuncs
};