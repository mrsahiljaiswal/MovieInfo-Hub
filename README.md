# MovieInfo-Hub 🎬
 

#### 1. Search Page
![Search Page](https://res.cloudinary.com/de5pdwmbc/image/upload/v1727827794/jpvaihckgpmdf1wdjiki.png)

#### 2. Movie Details Page
![Movie Details Page](/public/movie-search-result.png)


A sleek and dynamic **Movie Information Finder** app that allows users to search for movies, view detailed movie information, and experience a visually engaging interface. The app fetches data from an external API and presents it beautifully with custom backgrounds, dynamic content, and a modern UI design.

### [Live Demo](https://movieinfo-hub.netlify.app)

## Features

### 🔍 Search Functionality
- **Real-Time Search**: 
  - Users can search for movies using a search bar.
  - As you type, movie suggestions are fetched and displayed in real-time based on the input.
  - Results include the movie's title and other key info, such as the release year.
  - Clicking on a movie in the suggestion list will display its detailed information.
  
- **Dynamic Suggestions**:
  - The suggestion list updates automatically based on user input, offering a smooth and responsive experience.
  - The design of the suggestion box adapts to different screen sizes for a seamless mobile, tablet, and desktop experience.

### 🎥 Movie Details Page
- **Detailed Information**:
  - Once a movie is selected, the app transitions to a new screen showing detailed information about the movie.
  - Details include:
    - Movie title
    - Release date
    - Popularity score
    - Overview (summary)
    - Full poster image
  
- **Dynamic Background**:
  - The background of the details page automatically updates based on the movie's backdrop image, with a sleek linear gradient overlay for visual appeal.
  - The poster image is also displayed in a prominent position next to the movie details.

- **Responsive Design**:
  - The app is fully responsive, ensuring optimal viewing across desktop, tablet, and mobile devices.
  - Layout adjustments are made dynamically to ensure an intuitive experience regardless of device size.

### 🔄 API Handling
- **TMDb API Integration**:
  - The app fetches movie data from the [TMDb (The Movie Database)](https://www.themoviedb.org/) API.
  - The search queries hit the TMDb API to retrieve relevant movie results based on user input.
  - Upon selecting a movie, detailed information is pulled from the API, including backdrop images and movie metadata.

### 🚀 Concepts Used

- **React Router DOM**: For navigation between pages (search and movie details).
- **useParams**: To access dynamic route parameters (e.g., movie ID).
- **useEffect**: For side effects, such as fetching movie data and dynamically updating the page on mount.
- **useRef**: To handle mutable elements and direct DOM manipulation for optimal rendering and performance.


## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mrsahiljaiswal/movieinfo-hub.git
    ```

2. Navigate to the project directory:

    ```bash
    cd movie-info-finder
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

### Environment Variables

You will need an API key from TMDb. Create a `.env` file at the root of your project and add:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```
## 🤝Contributing

 Contributions are always welcome! If you have suggestions for improvements or encounter any issues, feel free to open a pull request or submit an issue in the repository.

### [Live Demo](https://movieinfo-hub.netlify.app)