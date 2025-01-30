import fs from "node:fs";
import ConfigJson from '../../../../../../../../../../binV4/Config.json' assert {type: 'json'};
import { StartFunc as returnAsArray } from "./returnAsArray.js";

const StartFunc = () => {
    let LocalJsonPath = ConfigJson.JsonPath;
    let LocalfilesArray = fs.readdirSync(LocalJsonPath);
    
    let LocalReturnArray = LocalfilesArray
        .filter(name => name.startsWith('BranOrders') && name.endsWith('.json'))
        .flatMap(element => returnAsArray(element));

    return LocalReturnArray;
};

export { StartFunc };
