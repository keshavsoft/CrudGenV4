import { StartFunc as StartFuncCommonReadFiles } from "../../../CommonReadFiles/readAllFiles.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false }

    let LocalJsonData = StartFuncCommonReadFiles();

    if (LocalJsonData.KTF === false) {
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalJsonData.JsonData;

    return LocalReturnData;
};

export { StartFunc };
