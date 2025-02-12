import {
    GetFuncs as GetFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate}) => {
    return GetFuncsDal({ inBranch,inFromDate, inToDate });
};

export {
    GetFuncs
};