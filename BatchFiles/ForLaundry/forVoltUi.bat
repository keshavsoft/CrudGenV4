@echo off
cd ..\VoltUI
git pull

del /s /q .\publicDir\*

call gulp build:publicDir

xcopy .\publicDir ..\CrudGenV4\public\Volt /h /i /c /k /e /r /y

cd ..\CrudGenV4