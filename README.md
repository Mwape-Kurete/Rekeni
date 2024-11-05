![REKENI HOME Backend](https://github.com/user-attachments/assets/89cfb49f-e824-4805-a862-1edc1d389531)
***
# Table Of Contents: 
- [What is Rekeni?](#what-is-rekeni)
- [Tech Stack](#tech-stack)
- [Start Up](#start-up)
- [Project Vision](#project-vision)
- [Pages and Functionality](#pages-and-functionality)
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
1. Clone the Repository:
    
   First, clone the repository from GitHub:
   ```bash
    git clone https://github.com/your-username/rekeni.git
    cd rekeni
   ```
3. Install Dependencies:
   
     You’ll need to install dependencies for both the frontend and backend. The project structure typically has separate folders for each.
     ```bash
        cd backend
        npm install
     ```
5. Set Up Environment Variables:
   
   To connect with external APIs and MongoDB, you’ll need to create environment variable files for both the front end and the back end.
  - Backend: In the backend directory, create a .env file with the following configuration:
   ```bash
      MONGODB_URI=your_mongodb_connection_string
      EXTERNAL_API_KEY=your_external_api_key  # For all third-party APIs ( Spotify, LastFm, & TasteDive)
   ```
4. Start the application:
   
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
6. Testing the App:
   
     Once both servers are running:
    - Open a browser and go to http://localhost:3000.
    - You should see the Rekeni homepage and be able to explore its features.
  
*** 
# Project Vision 

Over the past year, music streaming platforms have leaned heavily on AI-driven recommendations to help users discover new music and shape their listening habits. While this has brought efficiency, many users feel the recommendations lack accuracy and don’t align with their personal tastes. Instead of introducing them to fresh, diverse music, they’re often served the same mainstream artists and tracks they've already encountered.

This issue affects both music lovers and emerging artists. When recommendation algorithms are limited or biased, they contribute to a homogenised music landscape, limiting exposure for lesser-known talent. For many, music is deeply personal, so discovering new and exciting sounds that match individual tastes is essential.

Rekeni steps in to fill this gap by providing a more personalised, user-driven recommendation experience. By combining data from users’ listening habits, favourites, and reviews, Rekeni offers recommendations that aren’t only based on algorithms but are shaped by user interaction and preferences. Integrating APIs like Last.fm and TasteDive, Rekeni delivers fresh music suggestions that capture both popular trends and new genres.

*** 
# Pages & Functionality 

| Page | Functionality  | 
|-----------------|-----------------|
| Home  | Users can view popular reviews and the highest-rated albums. *(access: signed in users)* | 
| New | Users can view recent reviews and most reviews rated albums. *(access: signed in users)*| 
| Discover | This search page allows users to search for artists and receive recommended artists and their top 5 albums based on the user's search query. *(access: everyone)* |
| Search | Here users can search for albums they want to review. *(access:everyone)* |
| Single Album Page | Here users will find reviews of an album and get the opportunity to add that album to their favourites as well as rate and review that album. *(access: signed in users)* |
| Log-in | Here users can log-in granted they have made an account *(access: everyone)* |
| Sign Up | Here users can create an account if they have not made one yet *(access: everyone)* |
| Profile | Here users can view and edit their top 5 albums (favourites) and view and edit their reviews *(access: signed-in users)* |

*** 
# UI Designs
### Home 
![home](https://github.com/user-attachments/assets/2c2a8e2f-287b-48ce-9b0f-447b67b68754)
***
### New 
![new](https://github.com/user-attachments/assets/9e37c12e-a7ed-49a6-b57e-1a10bec0e128)
***
### Discover
![discover](https://github.com/user-attachments/assets/83e5c0d3-ae27-487a-ad90-0c7d719f86c4)
***
### Search
![search](https://github.com/user-attachments/assets/08c6086a-85e5-4c71-8d10-4a570f11b7a1)
***
### Single Album  
![singleAlbum](https://github.com/user-attachments/assets/24c70fac-3627-4d6a-9cb7-308b060ed66f)
***
### Profile
![myProfile](https://github.com/user-attachments/assets/4d87c363-853d-4778-9713-86eea439b4d3)
***
### Log-In  
![Login](https://github.com/user-attachments/assets/9a275dff-75d1-4f9d-89b1-9d7d244a0dc7)
***
### Sign Up
![signUp](https://github.com/user-attachments/assets/a05c45ec-ba77-4b0e-a049-8da1f3b461de)


***
# Build Process 
### Development Highlights: 
- The UI design of this website offers a unique experience that stands out from what users may have encountered before, keeping them engaged. The use of colour and the spacey-esque background suggests the notion of infinite discovery which is akin to the purpose of the application
- The discover feature took time to develop but does well at making suggestions with an 80% accuracy rate (considering outliers such as niche artists or artists that make a lot of genre-bending features). The current setup will allow users to feel satisfied when exploring new artists.
- general user experience. The application's design coupled with functionality makes an overall engaging experience that leaves users feeling engaged and excited to listen to more albums. 

### Development Challenges 
- **External APIs**: Due to the nature of this application, I needed to integrate three external APIs to power the discovery feature. This presented a challenge, as I had to learn several advanced JavaScript concepts to effectively build the recommendation system. Filtering results was also challenging, as the recommendations weren’t as accurate as I’d hoped.
- **Pivoting and Adapting**: Originally, I aimed to include two types of recommendations: Discover (through artist search) and Recommendations. While the recommendation feature was functional, it wasn’t as effective as I’d hoped. Despite my efforts to fine-tune the route handling, the results didn’t meet my expectations. Although this was frustrating, I was able to pivot and create alternative endpoints, such as Most-Reviewed and Highly-Rated, which still offer valuable recommendations that users can appreciate.

*** 
# Future Implementations 
Below are future deliverables this project has to further expand it's functionality and usability: 
- Profile Visits and Following: In future, users will be able to follow and view other users' profiles. They would also be able to get a customised feed of reviews only from those they follow.
- Unique User Recommendations: In future, Rekeni will be able to give users unique recommendations based on the way they interact with the application. These suggestions will make use of advanced content-based filtering to give recommendations users care about.
- Increased Monitoring: Currently there is no admin moderating feature, in the future admins will be able to delete and monitor unsavoury reviews added to albums.
- Review Expansion: Currently Rekeni's focus is on album reviews, future implementations will see users being able to review artists/bands, singles and albums.
- Track Previews: Currently, upon "discovering" a new artist users are redirected to the selected new albums Spotify page. Future implementations will allow users to preview tracks from an artist they discover.
- User Playlists: As a sort of expansion of the Favourites feature, users will be able to create custom lists and add albums to a general liked list. These lists will be used as part of the recommendation system and add to the community interactions as other users can like a user's playlist.

*** 
# Demo Video 

*** 
# Deployed Site
_Google Cloud Platform_ 
[GCP: Rekeni](https://rekeni.oa.r.appspot.com/new)
___
_Heroku_ 
[Heroku: Rekeni](https://rekeni-backend-app-5a0d05768556.herokuapp.com/new)


***
# License

### License

This project is not licensed for public use. All rights reserved.




