import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

let StartFunc = ({ inCustomerName, inMobileNumber, inBranch, inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalCustomer = inCustomerName;
    let LocalMobile = inMobileNumber;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalStartFuncPullData = StartFuncPullData({ inBranch });

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const db = LocalStartFuncPullData.inDb;

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inDataToInsert: LocalinDataToInsert,
        inCustomerName:LocalCustomer,
        inMobileNumber:LocalMobile,
        inData: db.data
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.pk = LocalDataWithUuid.InsertData.pk;

    return LocalReturnData;
};

export { StartFunc };