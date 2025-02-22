import { StartFunc as QrCodes } from "../CommonFuncs/QrCodes.js";
import { StartFunc as WashingScan } from "../CommonFuncs/PressingScan.js";
import { StartFunc as WashingDC } from "../CommonFuncs/PressingDC.js";
import { StartFunc as Press_ReWashScan } from "../CommonFuncs/Press_ReWashScan.js";

let StartFunc = ({ inFactory, inId }) => {
  // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
  let LocalFactory = inFactory;
  let LocalId = inId;
  const Qrdb = QrCodes();

  const WashingDCdb = WashingDC();

  const WashingScandb = WashingScan();

  const LocalPress_ReWashScan = Press_ReWashScan();

  let LocalFilterBranchDC = WashingDCdb.filter((e) => e.pk == LocalId);

  let LocalFilterQr = Qrdb.filter((e) => e.location === LocalFactory);

  let LocalFilterEntryScan = WashingScandb.filter(
    (e) => e.FactoryName === LocalFactory
  );

  let LocalEntryScanAndDcMergeData = LoclaEntryScanAndDcMergeFunc({
    inEntryScan: LocalFilterEntryScan,
    inBranchDc: LocalFilterBranchDC,
  });

  let jVarLocalTransformedData = jFLocalMergeFunc({
    inQrData: LocalFilterQr,
    inEntryScan: LocalEntryScanAndDcMergeData,
    inPressRewash: LocalPress_ReWashScan,
  });

  let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

  return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inEntryScan, inPressRewash }) => {
  let jVarLocalReturnObject = inEntryScan
    .map((loopScan) => {
      const matchedRecord = inQrData.find(
        (loopQr) => loopQr.pk == loopScan.QrCodeId
      );
      let LocalPress_ReWashScan = inPressRewash.some(Re => Re.QrCodeId == loopScan.QrCodeId && Re.ReWash == true);
      return {
        OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
        OrderDate: new Date(
          matchedRecord?.BookingData.OrderData.Currentdateandtime
        ).toLocaleDateString("en-GB"),
        DeliveryDate: new Date(
          matchedRecord?.DeliveryDateTime
        ).toLocaleDateString("en-GB"),
        ItemName: matchedRecord?.ItemName,
        Rate: matchedRecord?.Rate,
        Rewash: LocalPress_ReWashScan,
        VoucherNumber: loopScan?.VoucherRef,
        QrCodeId: loopScan.QrCodeId,
        DCDate: new Date(loopScan?.Date).toLocaleDateString("en-GB"),
        BranchName: matchedRecord?.BookingData.OrderData.BranchName,
        TimeSpan: TimeSpan({ DateTime: loopScan.DateTime }),
      };
    })
    .filter((record) => record.MatchedRecord !== null);
  return jVarLocalReturnObject;
};

const LoclaEntryScanAndDcMergeFunc = ({ inEntryScan, inBranchDc }) => {
  let LocalArray = [];
  inEntryScan.forEach((element) => {
    let locaFindData = inBranchDc.find((e) => e.pk == element.VoucherRef);
    if (locaFindData !== undefined) {
      let LocalMergeData = { ...locaFindData, ...element };
      LocalArray.push(LocalMergeData);
    }
  });
  return LocalArray;
};

function TimeSpan({ DateTime }) {
  var diffMs = new Date() - new Date(DateTime);
  var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
  var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
  var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
  var diffMins = Math.round((diffMs % 3600000) / 60000);

  if (diffMonths > 0) {
    return (
      diffMonths +
      " months, " +
      diffDays +
      " days, " +
      diffHrs +
      " hours, " +
      diffMins +
      " min"
    );
  } else if (diffDays > 0) {
    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
  } else if (diffHrs > 0) {
    return diffHrs + " hours, " + diffMins + " min";
  } else {
    return diffMins + " min";
  }
}

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
