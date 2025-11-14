function connectToESP32() {
    const outputArea = document.getElementById('connectionOutput');
    const esp32IP = document.getElementById('ipAddressInput').value;
    const apiKey = document.getElementById('apiKeyInput').value;
    
    if (!esp32IP || !apiKey) {
        if (outputArea) {
            outputArea.innerHTML = 'Please enter both IP Address and API Key.';
            outputArea.style.color = 'red';
        }
        return;
    }

    if (outputArea) {
        outputArea.innerHTML = `Trying to connect to ${esp32IP}...`;
        outputArea.style.color = 'orange';
    }

    fetch(`${esp32IP}/status`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `code=${apiKey}` 
    })

    fetch(esp32IP + '/status')
        .then(response => {
            if (response.ok) {
                if (outputArea) {
                    outputArea.innerHTML = 'Connect Device Status: ONLINE';
                    outputArea.style.color = 'green';
                }
            } else {
                if (outputArea) {
                    outputArea.innerHTML = `Failed to connect. Status Code: ${response.status}`;
                    outputArea.style.color = 'red';
                }
            }
        })
        .catch(error => {
            if (outputArea) {
                outputArea.innerHTML = 'Network Error: Unable to reach the device.';
                outputArea.style.color = 'red';
            }
            console.error('Connection error:', error);
        });
}


function loadEsp32Page() {
    const pageTitle = document.getElementById('page');
    const Esp32Content = `
        <h2>ESP32 S3 Control</h2>
        <p>Welcome to the ESP32 S3 control page. Here you can manage your ESP32 S3 device settings, monitor status, and OTA update.</p>
        <p>First you need to connect to the device, For see more Menu.</p>
        
        <div class="connection-form">
            <label for="ipAddressInput">IP/HTTP:</label>
            <input type="text" id="ipAddressInput"placeholder="e.g., http://192.168.1.100"><br>
            <label for="apiKeyInput">API Key:</label>
            <input type="password" id="apiKeyInput" placeholder="Enter your secret code here"><br>
            <button id="connectBtn">Connect to ESP32 S3</button>
        </div>
        
        <div id="connectionOutput">Connection output will appear here...</div>
    `;

    pageTitle.innerHTML = Esp32Content;

    const espConnectBtn = document.getElementById('connectBtn');

    if (espConnectBtn) {
        espConnectBtn.addEventListener('click', connectToESP32);
    }
}

function loadAllArduinoPage() {
    const pageTitle = document.getElementById('page');
    const mainContent = `
        <h2>All Arduino Device support here</h2>
        <div class="arduino-info">
            <button id="arduinoUnoBtn">Arduino Uno</button>
            <button id="arduinoMegaBtn">Arduino Mega</button>
            <button id="arduinoNanoBtn">Arduino Nano</button>
        </div>
    `;

    pageTitle.innerHTML = mainContent;
}

function loadAllEsp32Page() {
    const pageTitle = document.getElementById('page');
    const mainContent = `
        <h2>All ESP32 Device support here</h2>
        <div class="arduino-info">
            <button id="ESP32S3Btn">ESP32 S3</button>
            <button id="ESP32C3Btn">ESP32 C3 Super mini</button>
            <button id="ESP32P3Btn">ESP32 P3</button>
        </div>
    `;

    pageTitle.innerHTML = mainContent;

    const ESP32S3Btn = document.getElementById('ESP32S3Btn');

    if (ESP32S3Btn) {
        ESP32S3Btn.addEventListener('click', loadEsp32Page);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const esp32Button = document.getElementById('btn');
    const arduinoButton = document.getElementById('btn1');

    if (esp32Button) {
        esp32Button.addEventListener('click', loadAllEsp32Page);
    }
    if (arduinoButton) {
        arduinoButton.addEventListener('click', loadAllArduinoPage);
    }
});