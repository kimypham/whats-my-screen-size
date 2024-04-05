(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=(i=window)=>({widthValue:i.innerWidth,heightValue:i.innerHeight}),h=(i,r)=>{const{widthElement:s,heightElement:o}=i,{widthValue:e,heightValue:t}=r;s.innerHTML=`${e}px`,o.innerHTML=`${t}px`},c=i=>{const r=u();h(i,r)};document.querySelector("#app").innerHTML=`
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
`;const d=document.querySelector("#width-value"),l=document.querySelector("#height-value");c({widthElement:d,heightElement:l});window.addEventListener("resize",()=>{c({widthElement:d,heightElement:l})});
