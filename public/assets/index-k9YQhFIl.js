(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class o{constructor(e){this.parent=e}getHTML(e){return`
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${e.image}" alt="картинка">
                    <div id="main-page" class="d-flex flex-wrap"><div/>
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text">${e.description}</p>
                        <button class="btn btn-primary" id="click-card-${e.id}" data-id="${e.id}">Нажми на меня</button>
                        <button class="btn btn-primary" id="edit-card-${e.id}" data-id="${e.id}">Редактировать</button>
                    </div>
                </div>
            `}addListeners(e,t,n){document.getElementById(`click-card-${e.id}`).addEventListener("click",t),document.getElementById(`edit-card-${e.id}`).addEventListener("click",n)}render(e,t,n){const s=this.getHTML(e);this.parent.insertAdjacentHTML("beforeend",s),this.addListeners(e,t,n)}}class l{constructor(e){this.parent=e}getHTML(e){return`
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${e.image}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${e.title}</h5>
                                <p class="card-text">${e.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `}render(e){const t=this.getHTML(e);this.parent.insertAdjacentHTML("beforeend",t)}}class c{constructor(e){this.parent=e}addListeners(e){document.getElementById("back-button").addEventListener("click",e)}getHTML(){return`
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `}render(e){const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addListeners(e)}}class p{constructor(e,t,n,s,r){this.parent=e,this.id=t,this.image=n,this.title=s,this.description=r}getEvents(){return{id:this.id,image:this.image,title:this.title,description:this.description}}get pageRoot(){return document.getElementById("event-page")}getHTML(){return`
            <div id="event-page"></div>
        `}clickBack(){new d(this.parent).render()}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),new c(this.pageRoot).render(this.clickBack.bind(this));let t=this.getEvents();if(console.log(t),!t){this.pageRoot.innerHTML+="<p>Событие не найдено.</p>";return}new l(this.pageRoot).render(t)}}class h{constructor(e){this.parent=e}getHTML(e){return`
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${e.image}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <input class="card-title" value="${e.title}">
                                <input class="card-text" value ="${e.description}">
                            </div>
                        </div>
                    </div>
                </div>
            `}render(e){const t=this.getHTML(e);this.parent.insertAdjacentHTML("beforeend",t)}}class g{constructor(e,t,n,s,r){this.parent=e,this.id=t,this.image=n,this.title=s,this.description=r}getEvents(){return{id:this.id,image:this.image,title:this.title,description:this.description}}get pageRoot(){return document.getElementById("event-page")}getHTML(){return`
            <div id="event-page"></div>
        `}clickBack(){new d(this.parent).render()}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),new c(this.pageRoot).render(this.clickBack.bind(this));let t=this.getEvents();if(console.log(t),!t){this.pageRoot.innerHTML+="<p>Событие не найдено.</p>";return}new h(this.pageRoot).render(t)}}class u{get(e,t){const n=new XMLHttpRequest;n.open("GET",e),n.send(),n.onreadystatechange=()=>{n.readyState===4&&this._handleResponse(n,t)}}post(e,t,n){const s=new XMLHttpRequest;s.open("POST",e),s.setRequestHeader("Content-Type","application/json"),s.send(JSON.stringify(t)),s.onreadystatechange=()=>{s.readyState===4&&this._handleResponse(s,n)}}patch(e,t,n){const s=new XMLHttpRequest;s.open("PATCH",e),s.setRequestHeader("Content-Type","application/json"),s.send(JSON.stringify(t)),s.onreadystatechange=()=>{s.readyState===4&&this._handleResponse(s,n)}}delete(e,t){const n=new XMLHttpRequest;n.open("DELETE",e),n.send(),n.onreadystatechange=()=>{n.readyState===4&&this._handleResponse(n,t)}}_handleResponse(e,t){try{const n=e.responseText?JSON.parse(e.responseText):null;t(n,e.status)}catch(n){console.error("Ошибка парсинга JSON:",n),t(null,e.status)}}}const v=new u;class m{constructor(){this.baseUrl="http://localhost:3000"}getCars(){return`${this.baseUrl}/cars`}getCarById(e){return`${this.baseUrl}/cars/${e}`}createCar(){return`${this.baseUrl}/cars`}removeCarById(){return`${this.baseUrl}/cars/${id}`}updateCarById(){return`${this.baseUrl}/cars/${id}`}}const f=new m;class d{constructor(e){this.parent=e,this.current_events=[]}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
            <div id="main-page" class="d-flex flex-wrap gap-3 p-3"></div>
        `}getEvents(){v.get(f.getCars(),e=>{this.renderData(e)})}render(){this.parent.innerHTML="";const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.getEvents()}renderData(e){this.current_events=e,e.forEach(t=>{new o(this.pageRoot).render(t,this.clickCard.bind(this),this.editCard.bind(this))})}clickCard(e){const t=e.target.dataset.id,n=this.current_events;new p(this.parent,t,n[t-1].image,n[t-1].title,n[t-1].description).render()}editCard(e){const t=e.target.dataset.id,n=this.current_events;console.log(n),new g(this.parent,t,n[t-1].image,n[t-1].title,n[t-1].description).render()}}const b=document.getElementById("root"),y=new d(b);y.render();
