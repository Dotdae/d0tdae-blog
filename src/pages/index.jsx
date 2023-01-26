// Partial components.

import Navbar from '../components/Navbar/Navbar'


export function Home(){
    return(
        <div>
            <Navbar path="home"/>
            <h1>Home</h1>
        </div>
    )
}

export function Projects(){
    return(
        <div>
            <Navbar path="projects"/>
            <h1>Projects</h1>
        </div>
    )
}

export function About(){
    return(
        <div>
            <Navbar path="about"/>
            <h1>About</h1>
        </div>
    )
}
