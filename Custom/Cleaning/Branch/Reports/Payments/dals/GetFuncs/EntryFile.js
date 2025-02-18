import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/AllPaymentReports.js';

let GetFuncs = ({ inBranch ,inFromDate, inToDate}) => {
    return ToadyOrdersReports({ inBranch,inFromDate, inToDate });
};

export {
    GetFuncs
};