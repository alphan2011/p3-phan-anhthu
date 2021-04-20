import { header } from './modules/header';
import { footer } from './modules/footer';
import { button } from './modules/button';
import { lunch } from './modules/generator';

class App {
    constructor() {
        this.renderTemplate();
        lunch.showResult();
    }
    renderTemplate() {
        const template = `
            <img class="logo" src="${header.logo}" />
            <div class="wrapper">
                <img id="food" src="../images/bruschetta.png" />
                <footer>${footer.footerContent}</footer>
                <button id="button">${button.button}</button>
            </div>
        `;

        document.body.innerHTML = template;
    }
}

new App;