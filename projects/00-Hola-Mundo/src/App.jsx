import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {
    return (
        <>
     <TwitterFollowCard username="amandaribas" name="Amanda Ribas" isFollowing={false}/>
     <TwitterFollowCard username="midudev" name="Miguel Ángel Durán" isFollowing={false}/>
     <TwitterFollowCard username="pheralb" name="Pablo Hernandez" isFollowing={false}/>

     </>
    )
}