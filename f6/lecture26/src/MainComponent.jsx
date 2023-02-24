import { FooterComponent } from './FooterComponent'
import './HelloComponent.css'
import { InfoComponent } from './InfoComponent'

export function MainComponent(){

    return(
        <div>
            <h1>Hello, my student!</h1>
            <h2>Welcome to my lecture 26</h2>
            <InfoComponent></InfoComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}