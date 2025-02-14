import { StartFunc as OrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';
import { StartFunc as OrderItems } from '../../kLowDb/ReadFileList/OrderItems.js';

let GetFuncs = ({ inBranch,inFromDate, inToDate }) => {
    return OrdersReports({ inBranch,inFromDate, inToDate });
};

let GetItemsFuncs = ({ inBranch }) => {
    return OrderItems({ inBranch });
};

export {
    GetFuncs, GetItemsFuncs
};