export class EventCardComponent {
    constructor(parent) {
        this.parent = parent;
    }
    
    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.image}" alt="картинка">
                    <div id="main-page" class="d-flex flex-wrap"><div/>
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
                        <button class="btn btn-primary" id="edit-card-${data.id}" data-id="${data.id}">Редактировать</button>
                    </div>
                </div>
            `
        )
    }

    addListeners(data, listener, listener2) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
        document
            .getElementById(`edit-card-${data.id}`)
            .addEventListener("click", listener2)
    }

    render(data, listener, listener2) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener, listener2)
    }

}