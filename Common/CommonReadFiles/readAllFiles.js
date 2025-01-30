import fs from "fs";
import path from "path";
import ConfigJson from '../../binV4/Config.json' assert {type: 'json'};
import { StartFunc as StartFuncReadFileData } from "./readFileData.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false }

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let LocalFromAllFiles = LocalFuncReturnAllFiles();

    const files = LocalFromAllFiles.map(filename => {
        let LoopInsideObject = {};
        LoopInsideObject.FileName = path.parse(filename).name;
        LoopInsideObject.FileData = StartFuncReadFileData({ inFilePath: `${LocalDataPath}/${filename}` });
        return LoopInsideObject;
    });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = files;

    return LocalReturnData;
};

let LocalFuncReturnAllFiles = () => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let files = fs.readdirSync(LocalDataPath)
        .filter(filename => filename.endsWith('.json'));

    return files;
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
