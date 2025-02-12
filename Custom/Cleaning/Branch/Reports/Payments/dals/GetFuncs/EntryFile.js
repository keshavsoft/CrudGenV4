import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';

let GetFuncs = ({ inBranch ,inFromDate, inToDate}) => {
    return ToadyOrdersReports({ inBranch,inFromDate, inToDate });
};

export {
    GetFuncs
};