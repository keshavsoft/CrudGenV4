import { StartFunc as CommonFunc } from "../CommonFuncs/EntryFile.js";

let StartFunc = ({ inDC }) => {
    let LocalData = CommonFunc({ inDC });

    // let LocalFilterData = LocalData.filter(element => element.EntryDc === false);
    
    return LocalData;
};

export { StartFunc };
