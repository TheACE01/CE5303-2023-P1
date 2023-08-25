# Smart Home IoT Server

This repository contains a Flask-based server for monitoring and controlling IoT devices in a smart home.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TheACE01/CE5303-2023-P1.git

2. Navigate to the project directory:

   ```bash
   cd web-server

3. Install project dependencies from the `requirements.txt` file:

   ```bash
   pip install -r requirements.txt


## Usage

1. Start the Flask server

   ```bash
   python run.py


## Project Structure
The project structure follows this layout:

web-server/
├── app/
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   ├── templates/
│   ├── __init__.py
│   ├── routes.py
│   └── models.py (if needed)
├── config.py
├── run.py
├── requirements.txt
└── README.md

## Dependencies
All project dependencies are listed in the `requirements.txt` file. To install them, follow the steps in the Installation section.