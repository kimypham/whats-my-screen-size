import './App.style.css'
import { displayScreenSize } from './App.service.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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