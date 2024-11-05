![REKENI HOME Backend](https://github.com/user-attachments/assets/89cfb49f-e824-4805-a862-1edc1d389531)
***
# Table Of Contents: 
- [What is Rekeni?](#what-is-rekeni)
- [Tech Stack](#tech-stack)
- [Start Up](#start-up)
- [Project Vision](#project-vision)
- [Pages & Functionality](#pages-&-functionality)
- [UI Designs](#ui-designs)
  - [Home](#home)
  - [New](#new)
  - [Discover](#discover)
  - [Search](#search)
  - [Single Album](#single-album)
  - [Profile](#profile)
  - [Log-In](#log-in)
  - [Sign-Up](#sign-up)
- [Build Process](#build-process)
  - [Development highlights](#development-highlights)
  - [Ddevelopment Challenges](#development-challenges)
- [Future Implementaions](#future-implementations)
- [Demo Video](#Demo-Video)
- [Deployed Site](#deployed-site)
- [License](#license)

***

# What is Rekeni 
Rekeni is a music recommendation and review platform designed to connect users and help them discover new albums and artists through personalised suggestions and community-driven reviews. By enhancing music discovery with community engagement, Rekeni allows users to share insights and find music recommended by like-minded listeners. The Discover feature uses basic content-based filtering to introduce users to new artists and albums that match their search input, making exploration both social and intuitive.

*** 
# Tech Stack
<p align="left">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="Mern"/>
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" alt="express.js"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma"/>
</p>

# Start Up
Follow these steps to install and start Rekeni locally: 
1. Clone the Repository 
   First, clone the repository from GitHub:
   ```bash
    git clone https://github.com/your-username/rekeni.git
    cd rekeni
   ```
2. Install Dependencies
   You’ll need to install dependencies for both the frontend and backend. The project structure typically has separate folders for each.
   ```bash
      cd backend
      npm install
   ```
3. Set Up Environment Variables
   To connect with external APIs and MongoDB, you’ll need to create environment variable files for both the front end and the back end.
  - Backend: In the backend directory, create a .env file with the following configuration:
   ```bash
      MONGODB_URI=your_mongodb_connection_string
      EXTERNAL_API_KEY=your_external_api_key  # For all third-party APIs ( Spotify, LastFm, & TasteDive)
   ```
4. Start the application
   To run the app locally, you’ll need to start both the backend and frontend servers. You can use separate terminal tabs or windows for each process.
   - Backend: Start the server (in the server directory).
     ```bash
       npm node index.js
     ```
   - Frontend: Start the React app (in the client directory).
     _note: make sure you've included "proxy": "http://localhost:5000" in your package.json, this way your frontend api calls point to the PORT that the server is running on_
     ```bash
         npm start
     ```
5. Testing the App
   Once both servers are running:
  - Open a browser and go to http://localhost:3000.
  - You should see the Rekeni homepage and be able to explore its features.
