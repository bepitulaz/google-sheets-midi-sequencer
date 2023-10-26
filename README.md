# Google Sheets as 2 tracks MIDI sequencer

<img width="1440" alt="image" src="https://github.com/bepitulaz/google-sheets-midi-sequencer/assets/313962/64f953f0-f4a5-4b8f-88b2-2709426977ad">

We can extend the functionality of Google Sheets via [Apps Script](https://developers.google.com/apps-script). This repository is a proof of concept to use Google Sheets as a MIDI sequencer. I built a custom sidebar UI for Google Sheets, and access WebMIDI API from there. Then, I connected my synthesizer via USB cable to the laptop. The script can read and send the MIDI data from Google Sheets cell and pass it to the synthesizer.

## The video demo

[![The setup for this project: Arturia MicroFreak synth and Google Sheets](Sequencer.jpg)](https://youtu.be/duzOII-73cA?si=_5O_taffXfPOmZln)
