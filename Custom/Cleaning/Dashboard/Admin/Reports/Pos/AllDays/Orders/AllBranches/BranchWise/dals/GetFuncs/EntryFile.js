import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/withRows.js';
import { StartFunc as StartFuncAsIs } from '../../kLowDb/ReadFromFile/AsIs.js';

let GetAllFuncs = () => {
    return StartFuncAsIs();
};

let GetWithRowsFuncs = () => {
    return TodayAllQrCodes();
};

export {
    GetAllFuncs, GetWithRowsFuncs
};