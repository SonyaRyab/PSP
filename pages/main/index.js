import { EventCardComponent } from "../../components/event-card/index.js";
import { EventPage } from "../event/index.js";
import { EditPage } from "../edit/index.js";
import {ajax} from "../../modules/ajax.js";
import {carsUrls} from "../../modules/carsUrls.js";
export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.current_events = [];
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `
            <div id="main-page" class="d-flex flex-wrap gap-3 p-3"></div>
        `;
    }

    getEvents() {
        //console.log(carsUrls.getCars());
        ajax.get(carsUrls.getCars(), (data) => {
        this.renderData(data);
    })
        /*return [
            {
                id: 1,
                title: "Drift Show",
                date: "2026-02-20",
                image: "driftshow.png",
                description: "Дрифт шоу с дымом и адреналином."
            },
            {
                id: 2,
                title: "Drift Taxi",
                date: "2026-02-21",
                image: "drifttaxi.jpg",
                description: "Прокатись с профи на дрифт-такси!"
            },
            {
                id: 3,
                title: "Stunt Show",
                date: "2026-02-22",
                image: "stuntshow.jpg",
                description: "Каскадёрские трюки на авто и мото."
            },
            {
                id: 4,
                title: "Low Ride",
                date: "2026-02-23",
                image: "lowride.jpg",
                description: "Авто на пневмоподвеске — шоу на месте."
            }
        ];*/
    }

    render() {
        /*this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        const data = this.getData()
        data.forEach((item) => {
        const productCard = new ProductCardComponent(this.pageRoot)
        productCard.render(item)
    })*/
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getEvents()

        /*this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        const events = this.getEvents();
        events.forEach(event => {
            const card = new EventCardComponent(this.pageRoot);
            card.render(event, this.clickCard.bind(this));
        });*/
        
    }

    renderData(items) {
        this.current_events = items;
        console.log(items);
        items.forEach((item) => {
            //console.log(item);
            const eventCard = new EventCardComponent(this.pageRoot)
            eventCard.render(item, this.clickCard.bind(this), this.editCard.bind(this))
        })
    }

    clickCard(e) {
        const eventId = e.target.dataset.id
        const data = this.current_events //this.getEvents()
        console.log(data);
        //const eventPage = new EventPage(this.parent, eventId);
        const eventPage = new EventPage(this.parent, eventId, data[eventId-1].image, data[eventId-1].title, data[eventId-1].description)

        eventPage.render();
    }

    editCard(e) {
        const eventId = e.target.dataset.id
        const data = this.current_events //this.getEvents()
        console.log(data);
        
        const eventPage = new EditPage(this.parent, eventId, data[eventId-1].image, data[eventId-1].title, data[eventId-1].description)

        eventPage.render();
    }
}
