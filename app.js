import { secOne, } from "./info.js"
import { image, image1 } from "./img.js"
import { cardsecOne, cardsecOnebtn,card} from "./card.js"

const data = {
     
       title: "One Piece",
       para : "One Piece is one of the most popular anime today. Monkey D. Luffy is the MC of One piece he is the captian of Straw hat pirates. Luffy is the son of Monkey D. Dragon the founder of Revolutionary Army",
       LearnBtn : "Contact me",
       myImage :  "luffy.jpg"


}

 const data2 = {
    title0: "Project title",
    myImage0 :  "fav.jpg",
    myImage1 :  "anime.jpg",
    myImage2 :  "gear5.jpg",
    para0 : "As a pirate, Luffy has actively opposed countless regional, national, and global powers, beginning with several established East Blue pirates and extending to the Marines, the Seven Warlords of the Sea, Cipher Pol, the World Nobles, and even the Four Emperors of the New World.",
    para1 : "Luffy has gained wide infamy through his accomplishments, heritage, and general recklessness, drawing many large bounties as well as the focused hostility of the World Government, Marine Headquarters, and Fleet Admiral Sakazuki in particular.",
    para2 : "Luffy is a young man of average height with shaggy black hair, round black eyes, and a slim muscular build. He is renowned for his trademark straw hat (from which he gets his epithet which was lent to him when he was young by the legendary pirate captain, Shanks,[38] who in turn received it from Gol D. Roger.",
    LearnBtn0 : "Learn More",
    LearnBtn1 : "Learn More",
    LearnBtn2 : "Learn More"
    

 }

const {title, para, LearnBtn, myImage } = data
let sectionOne = document.getElementById ("sectionOne")

const {title0, para0, para1, para2, LearnBtn0, LearnBtn1, LearnBtn2, myImage0, myImage1, myImage2 } = data2
let sectioTwo = document.getElementById ("sectionTwo")


sectionOne.append(secOne(title, para, LearnBtn))
sectionOne.append(image(myImage))
sectioTwo.append(card(title0))
sectioTwo.append(image1(myImage0, myImage1, myImage2))
sectioTwo.append(cardsecOne(para0, para1,para2))
sectioTwo.append(cardsecOnebtn(LearnBtn0, LearnBtn1, LearnBtn2))