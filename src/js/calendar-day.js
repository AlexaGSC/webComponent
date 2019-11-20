export class CalendarDay extends HTMLElement {

constructor() {
    super();
    const day = this.getAttribute('day') || 1;
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    this.innerHTML = `
    <div class="day"> 
        Día ${day} 
    </div>
    `;
       
    }
}

customElements.define('calendar-day', CalendarDay);