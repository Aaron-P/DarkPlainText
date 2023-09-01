#!/usr/bin/bash
rm -r -f dist/Thunderbird
7za a -tzip dist/Thunderbird/DarkPlainText.zip @package-thunderbird.txt
