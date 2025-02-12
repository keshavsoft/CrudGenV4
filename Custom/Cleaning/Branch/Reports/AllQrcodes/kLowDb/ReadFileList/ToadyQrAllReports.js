import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranchScan.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalBranchName = inBranch;
    const modifiedBranch = LocalBranchName.replace("BranOrders", "");
    const Qrdata = QrCodes({ inBranch: modifiedBranch });
    const BranchScandata = BranchScan({ inBranch: modifiedBranch });
    let jVarLocalTransformedData = jFLocalMergeFunc({ inQrData: Qrdata, inScandata: BranchScandata });
    console.log("jVarLocalTransformedData",jVarLocalTransformedData);

    let LocalArrayReverseData = jFLocalBranchWideData({inData: jVarLocalTransformedData, inBranch, inFromDate, inToDate});
    
    return LocalArrayReverseData;
};

const jFLocalBranchWideData = ({inData, inBranch, inFromDate, inToDate}) => {
    return inData
        .filter(e => {
            const itemDate = new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-CA');
            return itemDate >= inFromDate && itemDate <= inToDate && e.OrderData.BranchName === inBranch;
        })
        .reverse();
};

let jFLocalMergeFunc = ({ inQrData, inScandata }) => {

    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const match = inScandata.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        return {
            QrCodeId: loopQr.pk,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.FactorySelected,
            OrderNo: loopQr.GenerateReference.ReferncePk,
            DeliveryDateTime: new Date(loopQr.DeliveryDateTime).toLocaleDateString('en-GB'),
            location: loopQr.location,
            OrderDateTime: new Date(loopQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            Status: match,
            TimeSpan: TimeSpan({ DateTime: loopQr.DateTime })
        };
    });

    return jVarLocalReturnObject;
};

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
}

export { StartFunc };
