import {
    GetFuncs as GetFuncsDal,
    GetToScanFuncs as GetToScanFuncsDal,
    GetToScanOnlyFuncs as GetToScanOnlyFuncsDal,
    GetSentFuncs as GetSentFuncsDal,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsDal,
    GetRowDataFuncs as GetRowDataFuncsDal,
    GetToPrintOnlyFuncs as GetToPrintOnlyFuncsDal,
    GetScanOnlyFuncs as GetScanOnlyFuncsDal,
    GetDeleteVocherFuncs as GetDeleteVocherFuncsDal,

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetToScanFuncs = ({ inBranch }) => {
    return GetToScanFuncsDal({ inBranch });
};

let GetToScanOnlyFuncs = ({ inBranch }) => {
    return GetToScanOnlyFuncsDal({ inBranch });
};

let GetSentFuncs = ({ inBranch }) => {
    return GetSentFuncsDal({ inBranch });
};

let GetSentAndFactoryScanFuncs = ({ inBranch }) => {
    return GetSentAndFactoryScanFuncsDal({ inBranch });
};

let GetRowDataFuncs = ({ inId }) => {
    return GetRowDataFuncsDal({ inId });
};

let GetToPrintOnlyFuncs = ({ inBranch }) => {
    return GetToPrintOnlyFuncsDal({ inBranch });
};

let GetScanOnlyFuncs = ({ inBranch }) => {
    return GetScanOnlyFuncsDal({ inBranch });
};

let GetDeleteVocherFuncs = ({ inBranch }) => {
    return GetDeleteVocherFuncsDal({ inBranch });
};
export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs, GetSentFuncs,
    GetSentAndFactoryScanFuncs, GetRowDataFuncs, GetToPrintOnlyFuncs, GetScanOnlyFuncs, GetDeleteVocherFuncs
};