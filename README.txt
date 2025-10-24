README — Hive Strength (site)
Files:
- index.html
- style.css
- script.js
- LOLO FINAL_LOGO TYPO BLANCHE.png (please add your logo file with this exact filename)

Quick setup:
1) Place all files in a single folder.
2) Upload to a GitHub repository (root).
3) Enable GitHub Pages in Settings -> Pages -> Source: main branch / root.
4) Create a Google Sheet named "Emails Hive Strength" with headers: Nom Prénom | Email | Date
5) Open Extensions -> Apps Script and deploy the Apps Script (code provided previously) as Web App.
6) Use the Web App URL (ending with /exec). The Apps Script URL is already included in script.js (the one you gave).
7) Test the form: submit name + email -> you should be redirected to the program Drive link, and a new row should be added to your Emails sheet.

Note:
- The program Drive link is the sheet you provided; it is recommended to set it in view-only and instruct users to File -> Make a copy to use the program.
- If you want me to update the Apps Script to use openById instead of active spreadsheet, send me the Sheet ID and I can prepare the script.
