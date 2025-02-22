import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';
// import { StartFunc as toScanOnly } from '../../kLowDb/ReadFromFiles/toScanOnly.js';
// import { StartFunc as sent } from '../../kLowDb/ReadFromFiles/sent.js';
// import { StartFunc as SentAndFactoryScan } from '../../kLowDb/ReadFromFiles/SentAndFactoryScan.js';
// import { StartFunc as GetRowData } from '../../kLowDb/ReadFromFiles/GetRowData.js';
// import { StartFunc as ToPrintOnly } from '../../kLowDb/ReadFromFiles/ToPrintOnly.js';
// import { StartFunc as ScanOnly } from '../../kLowDb/ReadFromFiles/ScanOnly.js';
// import { StartFunc as DeleteVocher } from '../../kLowDb/ReadFromFiles/DeleteVocher.js';
// import { StartFunc as StartFuncFromGetQrDataWithPrint } from '../../kLowDb/ReadFromFiles/GetQrDataWithPrintFunc.js';


let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

let GetToScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return toScan({ inBranch, inFromDate, inToDate });
};

export {
    GetFuncs, GetToScanFuncs
};