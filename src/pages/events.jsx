import Golfing from "../assets/thumb/code-golfing.png"
import Wheel from "../assets/thumb/hack-wheel.png"
import Hugs from "../assets/thumb/hugs-bugs.png"
import Santa from "../assets/thumb/santa-maria.png"
import Scroll from "../assets/thumb/scroll-unveilling.png"
import Brainz from "../assets/thumb/select-from-brainz.png"
import Turn from "../assets/thumb/turn-coat.png"
import Bugs from "../assets/thumb/whack-a-bug.png"

const EArray = [
    {
        "name": "Code Golfing" ,
        "image": Golfing,
        "description": <>With lots of exploration journeys going around, let's have some fun time here.<br/>
        Columbus recreational club presents to you “Code Golf” - a playground where you show off your excellency in codes. <br/>
        But how? It goes without saying that you win by providing us the shortest source code that solves the given puzzle which is very much similar to the famous “Golf” game where two players compete with each other and the one with the fewest club strokes wins.<br/> 
        The event will be conducted on the official code golf site: Code Golf. <br/> 
        Everyone will login with their github account and follow our main page's account to keep track of the leader board. <br/> 
        Even if they don't have a github account we will provide enough time to register. <br/> 
        There will be 5 golf holes. <br/> 
        Each hole will contain a puzzle to solve in any of their preferred programming language. <br/> 
        The difficulty of the puzzle will gradually increase in each hole. <br/> 
        At the end the top 3 in the leader board will be declared as winners. <br/> 
        We will also provide cheat sheet for short codes in all major languages.<br/></>,
        "rules": <><li>Login to Code Golf using your github account</li>
        <li>Stick to the timer to solve every puzzle. Any submission after it won't be accepted.</li>
        <li>Abide by the final decisions taken by the coordinators.</li></>
    },
    {
        "name": "Hack Wheel",
        "image": Wheel,
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
        "name": "Hugs & Bugs",
        "image": Hugs,
        "description": <><li>The game consists of Two Rounds</li>
        <li> Here each buddy should code alternatively, First person will code for the first few minutes followed by the second person . When the first person is coding the second person will be engaged with some surprise activity. </li>
        <li> The first round is an elimination round. Here each buddy is given five minutes to solve the given code. (Difficulty level : Easy, 10 minutes)</li>
        <li>The second round is the final round where each buddy is given 15 min to solve the code.(Difficulty level : Medium to Hard, 30 minutes)</li>
        <li>The team to complete the second round in least time will be declared winners.</li>
        <li>Any programming language is fine for us. The rest is yours!!.Come on buddies, let us code!!!!</li></>,
        "rules": <><li>2 members per team.</li> 
        <li>Mobile phones and internet usage is not permitted</li>
        <li>The decision of the event coordinators will be final</li>
        <li>Violating the rules or any kind of cheating leads to disqualification</li>
        <li>Please read the description</li>
        <li>Rules listed are subject to change as per the discretion of the event heads and the organizing committee</li>
        <li>Every participant should carry an identity card/proof</li></>
    },
    {
        "name": "Santa Maria Hunt",
        "image": Santa,
        "description":<><li>The event consists of 7 sequential rounds.</li>
        <li> Each team will be given a unique clue at the beginning of the  hunt.</li>
        <li> The team must decrypt the clue using a cipher technique from the given set of cipher techniques.</li>
        <li> The decrypted message contains the venue of the next clue and a passcode.</li>
        <li>This passcode  must be presented to the genie(volunteer) present in the venue mentioned in the clue.</li>
        <li> The genie will verify the passcode and give the next clue.</li>
        <li>The team has to decode the next clue and repeat the previous process till the final round.</li>
        <li> In the final round, the team must open an encrypted file.</li>
        <li> The first to open the encrypted file will be the winner.</li></>,
        "rules": <><li>Maximum 1-3 per team.</li> 
        <li>Each participant should carry identity proof.</li>
        <li>Internet usage is permitted.</li>
        <li>There will be totally 7 clues. The team who decrypts and finds all the 7 clues to the treasure will win the hunt.</li>
        <li>The teams should report at the event venue at the beginning and end of the event, The decision of the event coordinators will be final.</li>
        <li>Rules listed are subject to change as per the discretion of the Event Heads and the Organizing Committee Violating the rules, property damage or any kind of cheating leads to disqualification.</li></>
    },
    {
        "name": "Scroll Unveilling",
        "image": Scroll,
        "description": <><li>Scroll Unveiling is an event where the participating teams will be presenting their paper. </li>
        <li>The judges will be judging based on the way of explanation of their respective slides.</li>
        <li> The teams with  clear cut and quality presentations will be awarded with respective prizes.</li></>,
        "rules": <> <li> 3 members per team.</li> 
        <li> Not more than 5 mins per presentation</li></>
    },
    {
        "name": "Select from Brainz",
        "image": Brainz,
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
        "name": "Turn Coat",
        "image": Turn,
        "description": <><li>1. Challengers will be given a topic (technology, science).</li>
        <li> 2. 1 minute to prepare, 3 minutes to talk about their topic.</li>
        <li> 3. They will have to switch sides (for/against) their topic at the judges signal.</li></>,
        "rules": <><li> Solo event. </li> 
        <li> 1 minute prep time, 3 minutes to talk.</li>
        <li>Keep language polite.</li>
        <li>Rules may change at judge's discretion. </li>
        <li>Judge's decision is final</li></>
    },
    {
        "name": "Whack-A-Bug",
        "image": Bugs,
        "description": <>Whack-A-Bug is a scenario based Debugging contest in which the participants<br /> 
        will be given code snippets that contain one or more bugs in it.<br /> 
        The participants must identify the bugs and debug the code .</>,
        "rules": <><li>Each team with exactly 2 members</li>
        <li>Results of all rounds are not subjected to discussion and the judge's decision is final.</li>
        <li>Participants are not allowed to browse the Internet.</li>
        <li>Any malpractices will not be tolerated and if found will be disqualified.</li>
        <li>Participants must strictly abide to the timings</li></>
    }
]

const ECards = (props) => {
    return(
        <div className='flex flex-row flex-wrap justify-center items-center gap-20 mx-auto z-40'>
            <div className='z-40 '>
                <img src={props.image} className="h-60 rounded-xl" />
            </div>
            <div className='space-y-10 z - 14'>
                <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent z-40">
                    Description
                </h2>
                <p className='prose prose-lg z-40'>
                    {props.description} 
                </p>
                <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent z-40">
                    Rules
                </h2>
                <ul className='list-disc z-40'>
                    {props.rules}
                </ul>
            </div>
        </div>
    )
}


const Events = () => {
    return (
        <div className="container gap-y-10">
            <ECards image={EArray[0].image} description={EArray[0].description} rules={EArray[0].rules} />
            <ECards image={EArray[1].image} description={EArray[1].description} rules={EArray[1].rules} />
            <ECards image={EArray[2].image} description={EArray[2].description} rules={EArray[2].rules} />
            <ECards image={EArray[3].image} description={EArray[3].description} rules={EArray[3].rules} />
            <ECards image={EArray[4].image} description={EArray[4].description} rules={EArray[4].rules} />
            <ECards image={EArray[5].image} description={EArray[5].description} rules={EArray[5].rules} />
            <ECards image={EArray[6].image} description={EArray[6].description} rules={EArray[6].rules} />
            <ECards image={EArray[7].image} description={EArray[7].description} rules={EArray[7].rules} />
        </div>
    )
}

export default Events;