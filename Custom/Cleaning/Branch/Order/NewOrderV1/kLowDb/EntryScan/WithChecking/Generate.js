import { StartFunc as MastersCustomers } from "../../CommonFuncs/MastersCustomers.js";
import defaultJson from './default.json' assert {type: 'json'};

const StartFunc = ({ inDataToInsert, inData }) => {
    let LocalInData = inData;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalDefalultKeys = defaultJson;
    let LocalMastersCustomers = MastersCustomers();
    let LocalArrayPk = LocalInData.map(element => element.pk);
    let LocalMastersFindCustomers = LocalMastersCustomers.find(element => element.Mobile == inDataToInsert.CustomerData.CustomerMobile);

    if (LocalMastersFindCustomers === undefined) {
        LocalReturnData.KReason = "No Customer Data"
        return LocalReturnData;
    };

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);

    LocalReturnData.InsertData = {
        ...LocalDefalultKeys, ...inDataToInsert, UuId: MaxPk, pk: MaxPk,
        CustomerData: { ...LocalMastersFindCustomers, CustomerMobile: LocalMastersFindCustomers?.Mobile },
        DateTime: Timestamp()
    };

    LocalReturnData.KTF = true;
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

export { StartFunc };