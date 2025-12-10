const esp32IP = "http://192.168.0.73"; // <- wpisz IP Twojego ESP32

function sendCommand(cmd) {
  fetch(`${esp32IP}/${cmd}`)
    .then(response => response.text())
    .then(text => alert(text))
    .catch(err => alert("Błąd połączenia z ESP32"));
}

function setSpeed(val) {
  document.getElementById("speedValue").innerText = val;
  fetch(`${esp32IP}/speed?val=${val}`)
    .catch(err => alert("Błąd połączenia z ESP32"));
}

