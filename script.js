const esp32IP = "http://192.168.0.73"; // Twój ESP32 IP

function sendCommand(cmd) {
  fetch(`${esp32IP}/${cmd}`)
    .then(response => response.text())
    .then(text => {
      console.log("Odpowiedź ESP32:", text);
      // Możesz dodać wyświetlanie na stronie zamiast alertu
    })
    .catch(err => {
      console.error("Błąd połączenia z ESP32:", err);
      // Możesz pokazać komunikat na stronie
    });
}

function setSpeed(val) {
  document.getElementById("speedValue").innerText = val;
  fetch(`${esp32IP}/speed?val=${val}`)
    .catch(err => {
      console.error("Błąd połączenia z ESP32:", err);
    });
}
