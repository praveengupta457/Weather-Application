# Weather Application 

Welcome to the Weather Application, a web-based app that provides real-time weather updates for any city around the world. This project utilizes Node.js, Express.js, HTML, CSS, and a weather API to fetch and display accurate weather details in a user-friendly interface.

---

Features 🌟
- Real-Time Weather Data: Fetches live weather details for any city using the Weather API.
- Responsive Design: Built with HTML and CSS to ensure compatibility across various devices.
- User Input: Allows users to enter a city name and get instant weather updates.
- Dynamic Rendering: Powered by Node.js and Express.js for smooth and fast responses.

---

Technology Stack
-Backend: Node.js, Express.js
-Frontend: HTML, CSS
- API Integration: Weather API for fetching weather data

---

Installation and Setup 

Follow these steps to set up and run the project locally:

Prerequisites
1. Install [Node.js](https://nodejs.org/).
2. Obtain an API key from your preferred Weather API provider (e.g., [OpenWeatherMap](https://openweathermap.org/)).

Clone the Repository
Use the following command to clone the repository:

```bash
git clone https://github.com/praveengupta457/Weather-Application.git
```

 Project Setup
 Navigate to the Project Directory:
   ```bash
   cd Weather-Application
   ```

2. Install Dependencies:
   Install the required Node.js packages:
   ```bash
   npm install
   ```

3. Set Up the API Key:
   - Create a `.env` file in the root directory.
   - Add your Weather API key to the `.env` file:
     ```env
     WEATHER_API_KEY=your_api_key_here
     ```

4. Run the Application:
   Start the server using the following command:
   ```bash
   npm start
   ```

5. Access the Application:
   - Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

 Usage 📖
1. Open the application in your browser.
2. Enter the name of a city in the search bar.
3. Click the "Get Weather" button to fetch weather details.
4. View real-time weather updates, including temperature, humidity, wind speed, and more.

---

 Git Workflow for Contributions 
1. Clone the Repository:
   ```bash
   git clone https://github.com/praveengupta457/Weather-Application.git
   cd Weather-Application
   ```

2. Create a New Branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make Changes and Commit:
   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

4. Push Changes:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request:
   - Go to the GitHub repository.
   - Navigate to the Pull Requests tab and click New Pull Request.
