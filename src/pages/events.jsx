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
        "description": " With lots of exploration journeys going around, let's have some fun time here. Columbus recreational club presents to you “Code Golf” – a playground where you show off your excellency in codes. But how? It goes without saying that you win by providing us the shortest source code that solves the given puzzle which is very much similar to the famous “Golf” game where two players compete with each other and the one with the fewest club strokes wins. The event will be conducted on the official code golf site: Code Golf. Everyone will login with their github account and follow our main page’s account to keep track of the leader board. Even if they don’t have a github account we will provide enough time to register. There will be 5 golf holes. Each hole will contain a puzzle to solve in any of their preferred programming language. The difficulty of the puzzle will gradually increase in each hole. At the end the top 3 in the leader board will be declared as winners. We will also provide cheat sheet for short codes in all major languages.",
        "rules": " <li>Login to Code Golf using your github account</li><li>Stick to the timer to solve every puzzle. Any submission after it won't be accepted.</li><li>Abide by the final decisions taken by the coordinators.</li>"
    },
    {
        "name": "Hack Wheel",
        "image": Wheel,
        "description": "",
        "rules": ""
    },
    {
        "name": "Hugs & Bugs",
        "image": Hugs,
        "description": "",
        "rules": ""
    },
    {
        "name": "Santa Maria Hunt",
        "image": Santa,
        "description": "",
        "rules": ""
    },
    {
        "name": "Scroll Unveilling",
        "image": Scroll,
        "description": "",
        "rules": ""
    },
    {
        "name": "Select from Brainz",
        "image": Brainz,
        "description": "",
        "rules": ""
    },
    {
        "name": "Turn Coat",
        "image": Turn,
        "description": "",
        "rules": ""
    },
    {
        "name": "Whack-A-Bug",
        "image": Bugs,
        "description": "",
        "rules": ""
    }
]

const ECards = (props) => {
    return(
        <div className='flex flex-row flex-wrap justify-center items-center gap-20 mx-auto'>
            <div className=''>
                <img src={props.image} className="h-60 rounded-xl" />
            </div>
            <div className='space-y-10'>
                <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent ">
                    Description
                </h2>
                <p className='prose prose-lg'>
                    {props.description} 
                </p>
                <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent ">
                    Rules
                </h2>
                <ul className='list-disc'>
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