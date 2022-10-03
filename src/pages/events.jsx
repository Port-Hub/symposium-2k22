import Golfing from "../assets/thumb/code-golfing.png"
import Wheel from "../assets/thumb/hack-wheel.png"
import Hugs from "../assets/thumb/hugs-bugs.png"
import Santa from "../assets/thumb/santa-maria.png"
import Scroll from "../assets/thumb/scroll-unveilling.png"
import Brainz from "../assets/thumb/select-from-brainz.png"
import Turn from "../assets/thumb/turn-coat.png"
import Bugs from "../assets/thumb/whack-a-bug.png"
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";

const EArray = [
    {
        "name": "Code Golfing" ,
        "image": Golfing,
        "id":"golfing",
        "number": "1",
        "venue": "A12",
        "time": "2:00 pm - 3:30 pm",
        "description": <>
        <li>Columbus recreational club presents to you “Code Golf” - a playground where you show off your excellency in codes.</li> 
        <li>It goes without saying that you win by providing us the shortest source code that solves the given puzzle which is very much similar to the famous “Golf” game where two players compete with each other and the one with the fewest club strokes wins.</li> 
        <li>The event will be conducted on the official code golf site: Code Golf.</li>  
        <li>Everyone will login with their github account and follow our main page's account to keep track of the leader board.</li>  
        <li>There will be 5 golf holes. Each hole will contain a puzzle to solve in any of their preferred programming language.</li>  
        <li>The difficulty of the puzzle will gradually increase in each hole.</li>  
        <li>At the end the top 3 in the leader board will be declared as winners.</li></>,
        "rules": <><li>Login to Code Golf using your github account</li>
        <li>Stick to the timer to solve every puzzle. Any submission after it won't be accepted.</li>
        <li>Abide by the final decisions taken by the coordinators.</li>
        </>
    },
    {
        "name": "Hugs & Bugs",
        "image": Hugs,
        "id" : "hugs",
        "number": "2",
        "venue": "COE and H22",
        "time": "10:30 am - 12:00 pm",
        "description": <><li>The game consists of Two Rounds</li>
        <li> Here each buddy should code alternatively, First person will code for the first few minutes followed by the second person . When the first person is coding the second person will be engaged with some surprise activity. </li>
        <li> The first round is an elimination round. Here each buddy is given five minutes to solve the given code. (Difficulty level : Easy, 10 minutes)</li>
        <li>The second round is the final round where each buddy is given 15 min to solve the code.(Difficulty level : Medium to Hard, 30 minutes)</li>
        <li>The team to complete the second round in least time will be declared winners.</li>
        <li>Any programming language is fine for us. The rest is yours!!.Come on buddies, let us code!!!!</li></>,
        "rules": <><li>2 members per team.</li> 
        <li>Mobile phones and internet usage is not permitted</li>
        <li>The decision of the event coordinators will be final</li>
        <li>Violating the rules or any kind of cheating leads to disqualification</li></>
    },
    {
        "name": "Santa Maria Hunt",
        "image": Santa,
        "id" : "santa",
        "number": "1 - 3",
        "venue": "I22, Final Round : A12",
        "time": "10:30 am - 12:20 pm",
        "description":<><li>The event consists of 7 sequential rounds.</li>
        <li> Each team will be given a unique clue at the beginning of the  hunt.</li>
        <li> The team must decrypt the clue using a cipher technique from the given set of cipher techniques.</li>
        <li> The decrypted message contains the venue of the next clue and a passcode.</li>
        <li>This passcode  must be presented to the genie(volunteer) present in the venue mentioned in the clue.</li>
        <li> The genie will verify the passcode and give the next clue.</li>
        <li>The team has to decode the next clue and repeat the previous process till the final round.</li>
        <li> In the final round, the team must open an encrypted file.</li>
        <li> The first to open the encrypted file will be the winner.</li></>,
        "rules": <>
        <li>Internet usage is permitted.</li>
        <li>The team who decrypts and finds all the 7 clues to the treasure will win the hunt.</li>
        <li>The teams should report at the event venue at the beginning and end of the event.</li>
        <li>The decision of the event coordinators will be final.</li>
        <li>Violating the rules, property damage or any kind of cheating leads to disqualification.</li></>
    },
    {
        "name": "Select from Brainz",
        "image": Brainz,
        "id":"brainz",
        "number": "2 - 3",
        "venue": "I24",
        "time": "2:00 pm - 3:30 pm",
        "description": <><li>25 questions will be asked.</li>
        <li>Bring Your Own Device</li>
        <li> Once every 6 mins a picture-based pop quiz will be conducted</li>
        <li>The first three teams that answer the pop quiz correctly will receive an advantage</li>
        <li>Top three teams based on the leaderboard wins.</li></>,
        "rules": <> <li>The decorum of the event should be maintained.</li> 
        <li>The judge's decision will be final and binding</li>
        <li>For the pop quiz only the first three teams which answer correctly will be rewarded with marks or an advantage.</li>
        <li>All questions will circle around programming and computer-based concepts</li>
        <li>Team of 2-3</li></>
    },
    {
        "name": "Whack-A-Bug",
        "image": Bugs,
        "id":"bugs",
        "number": "2",
        "venue": "H22",
        "time": "12:30 pm - 2:00 pm",
        "description": 
        <>
            Whack-A-Bug is a scenario based Debugging contest in which the participants 
            will be given code snippets that contain one or more bugs in it. 
            The participants must identify the bugs and debug the code .
        </>,
        "rules": <><li>Each team with exactly 2 members</li>
        <li>Results of all rounds are not subjected to discussion and the judge's decision is final.</li>
        <li>Participants are not allowed to browse the Internet.</li>
        <li>Any malpractices will not be tolerated and if found will be disqualified.</li>
        <li>Participants must strictly abide to the timings</li></>
    },
    {
        "name": "Hack Wheel",
        "image": Wheel,
        "id":"wheel",
        "number": "4",
        "venue": "I13 and COE",
        "time": "9:30 am - 3:00 pm",
        "description":<><li>Hack Wheel is a one day hackathon which will be conducted on 8th October.</li>
        <li>The problem statements will be announced at the start of the event.</li>
        <li>Within the end of the day the participants should have developed the ideas into prototypes.</li>
         <li>And should be pitched before the judges by the end of the day.</li></>, 
        "rules": <><li> Maximum 4 members per team. </li>
        <li> Judges decision is final</li>
        <li>Participants should bring their own laptops.</li>
        <li>Plagiarism should be avoided</li></>
    },
    {
        "name": "Scroll Unveilling",
        "image": Scroll,
        "id":"scroll",
        "number": "3",
        "venue": "I21",
        "time": "9:30 am - 12:00 pm",
        "description": <><li>Scroll Unveiling is an event where the participating teams will be presenting their paper. </li>
        <li>The judges will be judging based on the way of explanation of their respective slides.</li>
        <li> The teams with  clear cut and quality presentations will be awarded with respective prizes.</li></>,
        "rules": <> <li> 3 members per team.</li> 
        <li> Not more than 5 mins per presentation</li></>
    },
    {
        "name": "Turn Coat",
        "image": Turn,
        "id":"turn",
        "number": "1",
        "venue": "I24",
        "time": "10:30 am - 12:00 pm",
        "description": <>Challengers will be given a topic (technology, science).
        1 minute to prepare, 3 minutes to talk about their topic.
        They will have to switch sides (for/against) their topic at the judges signal.</>,
        "rules": <> <li>Solo event.</li> 
        <li>1 minute prep time, 3 minutes to talk.</li>
        <li>Keep language polite.</li>
        <li>Rules may change at judge's discretion.</li>
        <li>Judge's decision is final</li></>
    }
]

const ECards = (props) => {
    return(
        <div id={props.id} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 place-items-center gap-y-20 z-40 shadow-2xl shadow-sky-700 rounded-3xl">
            <div className='z-40 space-y-5'>
                <img src={props.image} className="h-60 rounded-xl" />
                <div className="flex flex-row gap-x-4 items-center">
                    <UserGroupIcon className="h-8" />
                    <p>Team of {props.number}</p>
                </div>
                <div className="flex flex-row gap-x-4 items-center">
                    <HomeModernIcon className="h-8" />
                    <p>Venue : {props.venue}</p>
                </div>
                <div className="flex flex-row gap-x-4 items-center">
                    <ClockIcon className="h-8" />
                    <p>Time : {props.time}</p>
                </div>
            </div>
            <div className='z-40 space-y-10 m-14'>
                <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-3xl font-extrnumber={EArray[0].number} venue={EArray[0].venue} time={EArray[0o.time}ld text-transparent z-40">
                    Description
                </h2>
                <p className='z-40'>
                    {props.description} 
                </p>
                <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-3xl font-extrnumber={EArray[0].number} venue={EArray[0].venue} time={EArray[0o.time}ld text-transparent z-40">
                    Rules
                </h2>
                <div>
                    {props.rules}
                </div>
            </div>
        </div>
    )
}


const Events = () => {
    return (
        <div className="container mx-auto space-y-10">
            <ECards id={EArray[0].id} image={EArray[0].image} description={EArray[0].description} rules={EArray[0].rules} number={EArray[0].number} venue={EArray[0].venue} time={EArray[0].time} />
            <ECards id={EArray[1].id} image={EArray[1].image} description={EArray[1].description} rules={EArray[1].rules} number={EArray[1].number} venue={EArray[1].venue} time={EArray[1].time} />
            <ECards id={EArray[2].id} image={EArray[2].image} description={EArray[2].description} rules={EArray[2].rules} number={EArray[2].number} venue={EArray[2].venue} time={EArray[2].time} />
            <ECards id={EArray[3].id} image={EArray[3].image} description={EArray[3].description} rules={EArray[3].rules} number={EArray[3].number} venue={EArray[3].venue} time={EArray[3].time} />
            <ECards id={EArray[4].id} image={EArray[4].image} description={EArray[4].description} rules={EArray[4].rules} number={EArray[4].number} venue={EArray[4].venue} time={EArray[4].time} />
            <ECards id={EArray[5].id} image={EArray[5].image} description={EArray[5].description} rules={EArray[5].rules} number={EArray[5].number} venue={EArray[5].venue} time={EArray[5].time} />
            <ECards id={EArray[6].id} image={EArray[6].image} description={EArray[6].description} rules={EArray[6].rules} number={EArray[6].number} venue={EArray[6].venue} time={EArray[6].time} />
            <ECards id={EArray[7].id} image={EArray[7].image} description={EArray[7].description} rules={EArray[7].rules} number={EArray[7].number} venue={EArray[7].venue} time={EArray[7].time} />
        </div>
    )
}

export default Events;