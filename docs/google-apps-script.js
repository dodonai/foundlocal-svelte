/**
 * Google Apps Script — GeoLocally Form Submissions
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com under the Dodonai Google account
 * 2. Create a new project, name it "GeoLocally Form Handler"
 * 3. Replace the default Code.gs content with this entire file
 * 4. Click Deploy → New deployment
 * 5. Select type: "Web app"
 * 6. Set "Execute as": Me (your Dodonai account)
 * 7. Set "Who has access": Anyone
 * 8. Click Deploy and copy the web app URL
 * 9. Paste the URL into FinalCTASection.svelte as the FORM_ENDPOINT constant
 *
 * The script will auto-create a "GeoLocally Leads" spreadsheet on first submission.
 */

const SHEET_NAME = "GeoLocally Leads";
const HEADERS = [
  "submitted_at",
  "name",
  "email",
  "phone",
  "business",
  "business_type",
  "website",
  "referral_source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "landing_page",
  "referrer",
];

function getOrCreateSheet() {
  const files = DriveApp.getFilesByName(SHEET_NAME);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next()).getActiveSheet();
  }
  const ss = SpreadsheetApp.create(SHEET_NAME);
  const sheet = ss.getActiveSheet();
  sheet.appendRow(HEADERS);
  // Bold the header row
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  return sheet;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();
    const row = HEADERS.map((h) => data[h] || "");
    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "ok",
      message: "GeoLocally form endpoint is running.",
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}
