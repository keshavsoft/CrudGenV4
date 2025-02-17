import { StartFunc as StartFuncFromGetOrderDasboard } from '../../kLowDb/ReadFromFile/GetOrderDasboardFunc.js';
// import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFileList/ToadyQrAllReports.js';

let GetAllFuncs = () => {
    return "From Dal"
    // return ToadyQrAllReports({ inBranch });
};


let GetOrderDasboardFunc = async () => {
    let LocalFromLowDb = await StartFuncFromGetOrderDasboard();

    return await LocalFromLowDb;
};
export {
    GetAllFuncs,
    GetOrderDasboardFunc
};