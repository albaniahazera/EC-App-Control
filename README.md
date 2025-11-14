# EC App Control ESP32 

**App for controlling IoT devices** | Easily control your IoT devices (ESP32, Arduino, etc.) from the desktop using an Electron app.

Still under development, if you are seeing this I am still developing it as best as I can

---

##  About the Project

EC App is a cross-platform desktop application built with **Electron.js** and Node.js, designed as a clean user interface (UI) to manage, control, and monitor Internet of Things (IoT) devices such as **ESP32-S3** and **Arduino**.

The app supports communication via **MQTT** (recommended) or HTTP API for real-time control and status monitoring.

### Key Features

* **Dynamic Configuration:** Allows entering IP/MQTT broker address and API Key via a form.
* **Multi-Platform:** Runs on Windows, Linux.

---

##  System Requirements

To run or develop this app, you need:

* **Node.js and npm** (LTS recommended)
* **Git**

For local MQTT development:

* MQTT broker (e.g., **Mosquitto** running on a local server or Termux).

---

##  Installation and Usage (Development)

Follow the steps below to run the app in development mode.

### 1. Clone the repository

```bash
git clone https://github.com/albaniahazera/EC-App-Control.git
cd ec-app
```

### 2. Install Dependencies

Install all required Node.js packages:
```bash
npm install
```

### 3. Running the Application

Run the application in development mode. This command uses `electronmon` for live-reload.
```bash
npm start
```

## Build Application (Production)

To create a distributable installer (e.g., `.exe` for Windows), use the following build command:
```bash
npm run build
```
The build output will be available in the `dist/` directory.

## License

This project is released under the MIT License.

See the <a href="./licence.txt">`LICENSE`</a> file for full details.

**Author:** alhazera25

© 2025 alhazera25

