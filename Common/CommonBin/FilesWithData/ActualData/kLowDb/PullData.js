import fs from "fs";
import path from "path";
import ConfigJson from '../../../../../binV4/Config.json' assert {type: 'json'};

import { StartFunc as StartFuncCommonReadFiles } from "../../../../CommonReadFiles/readAllFiles.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false }

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = StartFuncCommonReadFiles();

    return LocalReturnData;
};

let StartFunc1 = () => {
    let LocalReturnData = { KTF: false }

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let files = fs.readdirSync(LocalDataPath)
        .filter(filename => filename.endsWith('.json'))
        .map(filename => {
            const data = fs.readFileSync(`${LocalDataPath}/${filename}`, { encoding: 'utf8' });
            let JsonParseData = JSON.parse(data);

            let LoopInsideObject = {};
            LoopInsideObject.FileName = path.parse(filename).name;
            LoopInsideObject.FileData = JsonParseData;
            return LoopInsideObject;
        });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = files;

    return LocalReturnData;
};

export { StartFunc };
