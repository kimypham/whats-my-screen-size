import './App.style.css'
import { displayDiagram, displayScreenSize } from './App.service.ts'

document.querySelector<Element>('body')!.innerHTML = `
        <div class="infoBox">
            <h1>What's my screen size?</h1>
            
            <div class="box">
                <div class="width">Width ↔</div>
                <div id="width-value">1000px</div>
            </div>
            <div class="box">
                <div class="width">Height ↕</div>
                <div id="height-value">1000px</div>
            </div>
        </div>

        <div class="diagram">
            <div class="diagramText widthText" id="width-value-text">← Text width →</div>  
            <div class="diagramText heightText" id="height-value-text">← Text height →</div>    
        </div>
        
        <footer class="footer">
            <div class="caption">
                Built with ❤️ by <a href="https://github.com/kimypham/whats-my-screen-size">Kim Pham</a>
            </div>
        </footer>
`

const widthElement: HTMLDivElement = document.querySelector<HTMLDivElement>('#width-value')!
const heightElement: HTMLDivElement = document.querySelector<HTMLDivElement>('#height-value')!

displayScreenSize({ widthElement, heightElement })

window.addEventListener('resize', () => {
    displayScreenSize({ widthElement, heightElement })
})


// for drawing a diagram
const rectangleElement = document.querySelector<HTMLDivElement>('.diagram')!
const widthTextElement: HTMLDivElement = document.querySelector<HTMLDivElement>('#width-value-text')!
const heightTextElement: HTMLDivElement = document.querySelector<HTMLDivElement>('#height-value-text')!


displayDiagram(rectangleElement, { widthTextElement, heightTextElement })

window.addEventListener('resize', () => {
    displayDiagram(rectangleElement, { widthTextElement, heightTextElement })
})
