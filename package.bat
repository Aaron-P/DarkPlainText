@echo off

rmdir /S /Q .\dist\Thunderbird
.\lib\7za.exe a -tzip .\dist\Thunderbird\DarkPlainText.zip @package-thunderbird.txt
