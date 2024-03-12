import './App.css';
import Tabs from "./Components/TabComponent/Tabs";

function App() {
  return (
    <body>
      {/*<label id="darkMode" className="switch">
          <input type="checkbox" onclick="darkMode()" />
          <span className="slider round" />
      </label>*/}

    
      <h1>About Me</h1>
        <p class="indent">My name is Cameron Hunter. This is my second semester as a senior at CSUSB. This page is an introduction to me.</p>
    
      <h2>My Time at CSUSB</h2>
        <p class="indent">Like I mentioned above, this year is my senior year here at CSUSB. My major is Computer Science. While most of my time at CSUSB has been spent in the Computer Science 
          program, I do also have some experience in other fields. In my freshman year, I took a few semester of Japanese and more recently, I have ventured into GIS starting 
          last semester and continuing this semester. GIS stands for Geographic Information Systems, and focuses on using computers to make and manipulate maps.</p>
    
        <h3>Platform Computing Experience</h3>
          <p class="indent">I do also have some experience with HTML, CSS, and JavaScript from a previous class. I took Software Engineering two semesters ago and we spent almost the whole 
            class working on our final group project which could have been a mobile app, website, game, etc. We chose to make a website that allowed users to review and look at information 
            about video games. The whole website was done with HTML, CSS, and JavaScript, so I have a decent amount of experience with web design.</p>
    
      <h2>Hobbies</h2>
        <h3>Games</h3>
          <p class="indent">I have been playing video games for almost as long as I can remember and they have been a very large part of my life. A lot of memories from when I was a kid come 
            from video games, whether I was playing Wii Sports with my Dad or spending and Saturday playing games with my friends. Destiny is a particularly large part of my life because at 
            this point, I have been playing it in one form or another for the last 10 years. Even if I take breaks from Destiny when things get slow, it is a game that I always come back to and 
            for that reason, it is a game that is very near and dear to my heart.</p>
    
          <p class="indent">I have also been collecting Pokemon cards for a long time. In highschool, I reintroduced a passion for the Pokemon TCG to my friends and we went to several Pokemon 
            set prereleases together. This rediscovery of trading card games lead me to Magic: The Gathering, which is my current favorite card game to play. However, Pokemon is 
            still my favorite TCG to collect.</p>
    
        <h3>Music</h3>
          <p class="indent">I really love listening to music and I am constantly looking for new music. I have a pretty small collection of vinyl records of some of my favorite albums as well. 
            Quite recently, I bought an electric bass and I have been trying to teach myself to play, though it is very slow going. My eventual goal is to also learn to play 
            guitar, but I can't in good conscience buy myself a guitar and all the related equipment before I even learn to play my bass.</p>
    
        <h3>Movies</h3>
          <p class="indent">Going to the movie theater and watching a good movie is one of my favorite things to do on a day off. Over time, I've come to appreciate the kind of films that come 
            from smaller directors and especially the kind of films that come out of a small budget. One of my favorite movies is Evil Dead II, and by extension The Evil Dead 
            and Army of Darkness because they really make the most of their small budgets in a way that is really fun to watch.</p>
    
        <h3>Books</h3>
          <p class="indent">I have loved reading ever since I was a child and that love continues to today. Most of my recent reading has been in the form of manga and other comics, though I 
            have been trying to read more novels. As a kid, I developed a love for reading because I learned that my mom would almost never say no if asked for a new book. However, over time I 
            lost the desire to read novels, but I picked up reading manga and comics. I now have a large collection of physical manga volumes, as well as an even larger list of manga I have 
            read online.</p>
    
        <h3>Outdoors</h3>
          <p class="indent">I joined the Cub Scouts in first grade and I have loved spending time outdoors ever since. Very soon after joining, I found that going camping was my favorite thing 
            that our troop did. After I aged out of Cub Scouts, I went on to join our local Boy Scout Troop, where I earned my Eagle Scout rank. During my time in Boy Scouts, I learned that I 
            really like rock climbing, though I haven't found the time to go climbing in a long while.</p>
    
          <p class="indent"> More recently, I went on a summer cruise to Alaska and land tour with my family. As part of one of the port activities, we got to go visit a camp where people send 
            their dogs to be trained to pull dogsleds. We got to hold some of the puppies and we got to ride on a special cart that one of the sled teams pulled. During the land tour, we went 
            to a wildlife preserve where they take care of animals that are injured or unfit to return to the wild, until they are ready to be released. We saw bears, moose, elk, reindeer, a 
            lynx, and an eagle. Our trip to Alaska was one of the most fun things I've ever done and I really want to go back when I get the chance.</p>
    
          <div class="responsive">
            <div class="gallery">
              <img src="Favorites/Alaska/Glacier.png" alt="Hubbard Glacier"/>
              <div class="desc">View of Hubbard Glacier from our cruise ship.</div>
            </div>
          </div>
          
          <div class="responsive">
            <div class="gallery">
              <img src="Favorites/Alaska/Bear1.png" alt="Bear"/>
              <div class="desc">One of the bears that live at the nature preserve.</div>
            </div>
          </div>
          
          <div class="responsive">
            <div class="gallery">
              <img src="Favorites/Alaska/Bear2.png" alt="Bear"/>
              <div class="desc">Another one of the bears that live at the nature preserve.</div>
            </div>
          </div>
          
          <div class="responsive">
            <div class="gallery">
              <img src="Favorites/Alaska/Denali.png" alt="Denali"/>
              <div class="desc">View of Denali.</div>
            </div>
          </div>
          
          <div class="clearfix"></div>
        
      <h2>Favorites</h2>

      <Tabs />

      </body>
  );
}

export default App;
