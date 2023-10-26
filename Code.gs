function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Custom Menu')
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  const html = HtmlService.createTemplateFromFile('Sequencer').evaluate().setTitle('OfficeWork MIDI Sequencer');
  SpreadsheetApp.getUi().showSidebar(html);
}

function getTempo() {
  return SpreadsheetApp.getActive().getRange('Sheet1!B1').getValue();
}

function getTrackData(range) {
  return SpreadsheetApp.getActive().getRange(range).getValues()
}
