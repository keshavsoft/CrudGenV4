import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckWashingScan } from "./Check/CheckBrcnchScan.js";
import { StartFunc as CheckBrcnchReturnScan } from "./Check/CheckBrcnchReturnScan.js";

let StartFunc = ({ inFactory, inDataInsert, inQrCodeId, inVoucherRef }) => {
    let LocalTable = inFactory;
    let LocalQrId = inQrCodeId;
    let LocalDc = inVoucherRef;
    
    let LocalDataInsert = inDataInsert;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchScan = CheckWashingScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchReturnScan = CheckBrcnchReturnScan({ inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchReturnScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchReturnScan.KReason
        return LocalReturnData;
    };

    return StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert });

};

export { StartFunc };