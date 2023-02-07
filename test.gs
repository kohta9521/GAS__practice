function doPost(e) {
  const SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート1");
  const TOKEN = "eVqB2spdlh7dKBYDUCZVHzpE";
  if (TOKEN == e.parameter.token) {
    const DATE = Utilities.formatDate(
      new Date(),
      "Asia/Tokyo",
      "yyyy/MM/dd HH:mm"
    );
    const USER = e.parameter.user_name;
    const TEXT = e.parameter.text;
    const DATA = [DATE, USER, TEXT];
    SHEET.appendRow(DATA);
  }
  return;
}
