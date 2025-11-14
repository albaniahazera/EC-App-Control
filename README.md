# EC App Control ESP32 

**App for controlling IoT devices** | Easily control your IoT devices (ESP32, Arduino, etc.) from the desktop using an Electron app.

---

##  About the Project

EC App is a cross-platform desktop application built with **Electron.js** and Node.js, designed as a clean user interface (UI) to manage, control, and monitor Internet of Things (IoT) devices such as **ESP32-S3** and **Arduino**.

The app supports communication via **MQTT** (recommended) or HTTP API for real-time control and status monitoring.

### Key Features

* **Device Control:** Send ON/OFF commands or trigger specific actions to microcontrollers.
* **Dynamic Configuration:** Allows entering IP/MQTT broker address and API Key via a form.
* **Multi-Platform:** Runs on Windows, Linux, and macOS.

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
git clone https://www.andarepository.com/
cd ec-app
```