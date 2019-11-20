export class CalendarMonth extends HTMLElement {
    contructor() {
        super();
        
        for (let i = 0; i < 30; i++)
        this.innerHTML += `
            <div class="month">
                <div class="day"></div>
            </div>
        `

    
    }
}
customElements.define('calendar-month', CalendarMonth);