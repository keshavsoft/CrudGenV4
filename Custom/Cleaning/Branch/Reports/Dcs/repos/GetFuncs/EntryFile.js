import {
    GetFuncs as GetFuncsDal,
    GetToScanFuncs as GetToScanFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetToScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetToScanFuncsDal({ inBranch, inFromDate, inToDate });
};

export {
    GetFuncs, GetToScanFuncs
};