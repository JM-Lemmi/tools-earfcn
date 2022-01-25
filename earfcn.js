import LTE from "lte-earfcn-calculator";

function earfcnButton() {
    earfcn = document.querySelector('earfcn').value;
    freq = LTE.earfcnToFreq(earfcn);
    document.getElementById('freq').value = freq;
}

function freqButton() {
    band = document.querySelector('band').value;
    frequency = document.querySelector('freq').value; // MHz
    earfcn = LTE.freqToEarfcnByBand(band, frequency);
    document.getElementById('earfcn').value = earfcn;
}
