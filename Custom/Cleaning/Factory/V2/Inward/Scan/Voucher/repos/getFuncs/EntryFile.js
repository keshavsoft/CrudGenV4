import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetSummaryFunc as GetSummaryFuncDal,
    GetAsIsFunc as GetAsIsFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetAggregateFunc as GetAggregateFuncDal,
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetQrStatusFuncDal({ inFactory });
};

let GetSummaryFunc = ({ inFactory }) => {
    return GetSummaryFuncDal({ inFactory });
};

let GetAsIsFunc = ({ inFactory }) => {
    return GetAsIsFuncDal({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

let GetAggregateFunc = ({ inId }) => {
    return GetAggregateFuncDal({ inId });
};

export {
    GetFunc, GetQrStatusFunc, GetSummaryFunc, GetAsIsFunc, GetRowDataFunc, GetAggregateFunc
};