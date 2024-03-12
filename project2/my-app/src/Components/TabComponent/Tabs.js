import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";

import ChainsawManCover from "./Books/Chainsawman_Cover.jpg";
import DandadanCover from "./Books/Dandadan_Cover.jpg";
import DaredevilCover from "./Books/Daredevil_Born_Again_Cover.jpg";
import DeliciousInDungeonCover from "./Books/Delicious_In_Dungeon_Cover.jpeg";
import IAmAHeroCover from "./Books/I_Am_A_Hero_Cover.jpg";
import JJBACover from "./Books/Jojos_Bizarre_Adventure_Cover.jpg"
import KaguyaSamaCover from "./Books/Kaguya-sama_Love_Is_War_Cover.jpg";
import PreacherCover from "./Books/Preacher_Cover.png";
import VagabondCover from "./Books/Vagabond_Cover.png";
import VinlandSagaCover from "./Books/Vinland_Saga_Cover.jpg";

import BG3 from "./Games/Baldur's_Gate_3_Cover.jpg";
import D2 from "./Games/Destiny_2_Cover.jpg";
import D1 from "./Games/Destiny_Cover.jpg";
import ER from "./Games/Elden_Ring_Cover.jpg";
import Hades from "./Games/Hades_Cover.jpg";
import Minecraft from "./Games/Minecraft_Cover.png";
import Pokemon from "./Games/Pokemon_Emerald_Cover.jpg";
import Signalis from "./Games/Signalis_Cover.jpg";
import Stardew from "./Games/Stardew_Valley_Cover.png";
import VS from "./Games/Vampire_Survivors_Cover.jpg";

import SilentVoice from "./Movies/A_Silent_Voice_Film_Cover.jpg";
import EvilDead2 from "./Movies/Evil_Dead_II_Cover.jpg";
import FMJ from "./Movies/Full_Metal_Jacket_Cover.jpg";
import Howl from "./Movies/Howls_Moving_Castle_Cover.jpg";
import JW4 from "./Movies/John_Wick_Chapter_4_Cover.jpg";
import NoCountry from "./Movies/No_Country_for_Old_Men_Cover.jpg";
import ReservoirDogs from "./Movies/Reservoir_Dogs_Cover.png";
import Batman from "./Movies/The_Batman_Cover.jpg";
import Lighthouse from "./Movies/The_Lighthouse_Cover.jpeg";
import TWBB from "./Movies/There_Will_Be_Blood_Cover.jpg";

import Deathmetal from "./Music/Death_Metal_Cover.webp";
import KingCrimson from "./Music/In_the_Court_of_the_Crimson_King_Cover.jpeg";
import LedZeppelin from "./Music/Led_Zeppelin_IV_Cover.jpg";
import LanaDelRey from "./Music/Lust_For_Life_Cover.png";
import Nirvana from "./Music/MTV_Unplugged_In_New_York_Cover.png";
import BlackSabbath from "./Music/Paranoid_Cover.jpg";
import Metallica from "./Music/Ride_The_Lightning_Cover.png";
import QOTSA from "./Music/Songs_For_The_Deaf_Cover.png";
import Boygenius from "./Music/The_Record_Cover.jpg";
import PinkFloyd from "./Music/Wish_You_Were_Here_Cover.png";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="Tabs">
            <ul className="nav">
                <TabNavItem title="Games" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Music" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Movies" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Books" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>

            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <div id="Games">
                        <h3>Games</h3>
                        <div class="row">
                            <div class="column">
                            <div class="card">Baldur's Gate 3</div>
                            <img class="game" src={BG3} alt="Baldur's Gate 3 Cover" class="center"/>
                            <p class="center">2023</p>
                            </div>
                            <div class="column">
                            <div class="card">Elden Ring</div>
                            <img class="game" src={ER} alt="Elden Ring Cover" class="center"/>
                            <p class="center">2022</p>
                            </div>
                            <div class="column">
                            <div class="card">Signalis</div>
                            <img class="game" src={Signalis} alt="Signalis Cover" class="center"/>
                            <p class="center">2022</p>
                            </div>
                            <div class="column">
                            <div class="card">Vampire Survivors</div>
                            <img class="game" src={VS} alt="Vampire Survivors Cover" class="center"/>
                            <p class="center">2022</p>
                            </div>
                            <div class="column">
                            <div class="card">Hades</div>
                            <img class="game" src={Hades} alt="Hades Cover" class="center"/>
                            <p class="center">2020</p>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="column">
                            <div class="card">Destiny 2</div>
                            <img class="game" src={D2} alt="Destiny 2 Cover" class="center"/>
                            <p class="center">2017</p>
                            </div>
                            <div class="column">
                            <div class="card">Stardew Valley</div>
                            <img class="game" src={Stardew} alt="Stardew Valley Cover" class="center"/>
                            <p class="center">2016</p>
                            </div>
                            <div class="column">
                            <div class="card">Destiny</div>
                            <img class="game" src={D1} alt="Destiny Cover" class="center"/>
                            <p class="center">2014</p>
                            </div>
                            <div class="column">
                            <div class="card">Minecraft</div>
                            <img class="game" src={Minecraft} alt="Minecraft Cover" class="center"/>
                            <p class="center">2011</p>
                            </div>
                            <div class="column">
                            <div class="card">Pokemon Emerald</div>
                            <img class="game" src={Pokemon} alt="Pokemon Emerald Cover" class="center"/>
                            <p class="center">2004</p>
                            </div>
                        </div>
                    </div>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <div id="Music">
                        <h3>Music</h3>
                        <div class="row">
                            <div class="column">
                            <div class="card">The Record</div>
                                <img class="album" src={Boygenius} alt="The Record Cover" class="center"/>
                                <p class="center">Boygenius</p>
                                <p class="center">2023</p>
                            </div>
                            <div class="column">
                            <div class="card">Lust For Life</div>
                                <img class="album" src={LanaDelRey} alt="Lust For Life Cover" class="center"/>
                                <p class="center">Lana Del Rey</p>
                                <p class="center">2017</p>
                            </div>
                            <div class="column">
                            <div class="card">Songs For The Deaf</div>
                                <img class="album" src={QOTSA} alt="Songs For the Deaf Cover" class="center"/>
                                <p class="center">Queens of the Stone Age</p>
                                <p class="center">2002</p>
                            </div>
                            <div class="column">
                            <div class="card">D>E>A>T>H>M>E>T>A>L</div>
                                <img class="album" src={Deathmetal} alt="D>E>A>T>H>M>E>T>A>L Cover" class="center"/>
                                <p class="center">Panchiko</p>
                                <p class="center">2000</p>
                            </div>
                            <div class="column">
                            <div class="card">MTV Unplugged In New York</div>
                                <img class="album" src={Nirvana} alt="MTV Unplugged In New York Cover" class="center"/>
                                <p class="center">Nirvana</p>
                                <p class="center">1994</p>
                            </div>
                            </div>
                    
                        <div class="row">
                            <div class="column">
                            <div class="card">Ride The Lightning</div>
                                <img class="album" src={Metallica} alt="Ride The Lightning Cover" class="center"/>
                                <p class="center">Metallica</p>
                                <p class="center">1984</p>
                            </div>
                            <div class="column">
                            <div class="card">Wish You Were Here</div>
                                <img class="album" src={PinkFloyd} alt="Wish You Were Here Cover" class="center"/>
                                <p class="center">Pink Floyd</p>
                                <p class="center">1975</p>
                            </div>
                            <div class="column">
                            <div class="card">In The Court Of The Crimson King</div>
                                <img class="album" src={KingCrimson} alt="In The Court Of The Crimson King Cover" class="center"/>
                                <p class="center">King Crimson</p>
                                <p class="center">1973</p>
                            </div>
                            <div class="column">
                            <div class="card">Led Zeppelin IV</div>
                                <img class="album" src={LedZeppelin} alt="Led Zeppelin IV Cover" class="center"/>
                                <p class="center">Led Zeppelin</p>
                                <p class="center">1971</p>
                            </div>
                            <div class="column">
                            <div class="card">Paranoid</div>
                                <img class="album" src={BlackSabbath} alt="Paranoid Cover" class="center"/>
                                <p class="center">Black Sabbath</p>
                                <p class="center">1970</p>
                            </div> 
                        </div>
                    </div>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <div id="Movies">
                        <h3>Movies</h3>
                        <div class="row">
                            <div class="column">
                            <div class="card">John Wick Chapter 4</div>
                                <img class="movie" src={JW4} alt="John Wick Chapter 4 Cover" class="center"/>
                                <p class="center">2023</p>
                            </div>
                            <div class="column">
                            <div class="card">The Batman</div>
                                <img class="movie" src={Batman} alt="The Batman Cover" class="center"/>
                                <p class="center">2022</p>
                            </div>
                            <div class="column">
                            <div class="card">The Lighthouse</div>
                                <img class="movie" src={Lighthouse} alt="The Lighthouse Cover" class="center"/>
                                <p class="center">2019</p>
                            </div>
                            <div class="column">
                            <div class="card">A Silent Voice</div>
                                <img class="movie" src={SilentVoice} alt="A Silent Voice Cover" class="center"/>
                                <p class="center">2016</p>
                            </div>
                            <div class="column">
                            <div class="card">No Country For Old Men</div>
                                <img class="movie" src={NoCountry} alt="No Country For Old Men Cover" class="center"/>
                                <p class="center">2007</p>
                            </div>
                            </div>
    
                        <div class="row">
                            <div class="column">
                            <div class="card">Howl's Moving Castle</div>
                                <img class="movie" src={Howl} alt="Howl's Moving Castle Cover" class="center"/>
                                <p class="center">2004</p>
                            </div>
                            <div class="column">
                            <div class="card">There Will Be Blood</div>
                                <img class="movie" src={TWBB} alt="There Will Be Blood Cover" class="center"/>
                                <p class="center">2007</p>
                            </div>
                            <div class="column">
                            <div class="card">Reservoir Dogs</div>
                                <img class="movie" src={ReservoirDogs} alt="Reservoir Dogs Cover" class="center"/>
                                <p class="center">1992</p>
                            </div>
                            <div class="column">
                            <div class="card">Evil Dead II</div>
                                <img class="movie" src={EvilDead2} alt="Evil Dead II Cover" class="center"/>
                                <p class="center">1987</p>
                            </div>
                            <div class="column">
                            <div class="card">Full Metal Jacket</div>
                                <img class="movie" src={FMJ} alt="Full Metal Jacket Cover" class="center"/>
                                <p class="center">1987</p>
                            </div>
                        </div>
                    </div>
                </TabContent>
                <TabContent id="tab4" activeTab={activeTab}>
                    <div id="Books">
                        <h3>Books</h3>
                        <div class="row">
                            <div class="column">
                            <div class="card">Chainsaw Man</div>
                                <img class="book" src={ChainsawManCover} alt="Chainsaw Man Cover" class="center"/>
                                <p class="center">Tatsuki Fujimoto</p>
                            </div>
                            <div class="column">
                            <div class="card">Dandadan</div>
                                <img class="book" src={DandadanCover} alt="Dandadan Cover" class="center"/>
                                <p class="center">Yukinobu Tatsu</p>
                            </div>
                            <div class="column">
                            <div class="card">Daredevil: Born Again</div>
                                <img class="book" src={DaredevilCover} alt="Daredevil: Born Again Cover" class="center"/>
                                <p class="center">Frank Miller & David Mazzucchelli</p>
                            </div>
                            <div class="column">
                            <div class="card">Delicious in Dungeon</div>
                                <img class="book" src={DeliciousInDungeonCover} alt="Delicious in Dungeon Cover" class="center"/>
                                <p class="center">Ryoko Kui</p>
                            </div>
                            <div class="column">
                            <div class="card">I Am A Hero</div>
                                <img class="book" src={IAmAHeroCover} alt="I Am A Hero Cover" class="center"/>
                                <p class="center">Kengo Hanazawa</p>
                            </div>
                            </div>
    
                        <div class="row">
                            <div class="column">
                            <div class="card">Jojo's Bizarre Adventure</div>
                            <img class="book" src={JJBACover} alt="Jojo's Bizarre Adventure Cover" class="center"/>
                            <p class="center">Hirohiko Araki</p>
                            </div>
                            <div class="column">
                            <div class="card">Kaguya-sama: Love Is War</div>
                            <img class="book" src={KaguyaSamaCover} alt="Kaguya-sama: Love Is War Cover" class="center"/>
                            <p class="center">Aka Akasaka</p>
                            </div>
                            <div class="column">
                            <div class="card">Preacher</div>
                            <img class="book" src={PreacherCover} alt="Preacher Cover" class="center"/>
                            <p class="center">Garth Ennis & Steve Dillon</p>
                            </div>
                            <div class="column">
                            <div class="card">Vagabond</div>
                            <img class="book" src={VagabondCover} alt="Vagabond Cover" class="center"/>
                            <p class="center">Takehiko Inoue</p>
                            </div>
                            <div class="column">
                            <div class="card">Vinland Saga</div>
                            <img class="book" src={VinlandSagaCover} alt="Vinland Saga Cover" class="center"/>
                            <p class="center">Makoto Yukimura</p>
                            </div>
                        </div>
                    </div> 
                </TabContent>
            </div>
        </div>
    );
};

export default Tabs;