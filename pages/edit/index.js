import { EditComponent } from "../../components/edit/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";

export class EditPage {
    constructor(parent, id, image, title, description) {
        this.parent = parent;
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
    }

    getEvents() {
        return {
            id: this.id,
            image: this.image,
            title: this.title,
            description: this.description
        }
    }

    get pageRoot() {
        return document.getElementById('event-page');
    }

    getHTML() {
        return `
            <div id="event-page"></div>
        `;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        let eventData = this.getEvents();
        console.log(eventData);
        if (!eventData) {
            this.pageRoot.innerHTML += '<p>Событие не найдено.</p>';
            return;
        }

        const event = new EditComponent(this.pageRoot);
        event.render(eventData);
    }
}
