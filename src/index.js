import { header } from './modules/header';
import { footer } from './modules/footer';
import { button } from './modules/button';
import { lunch } from './modules/generator';

class App {
    constructor() {
        this.renderTemplate();
    }
    renderTemplate() {
        const template = `
            <img class="logo" src="${header.logo}" />
            <div class="wrapper">
                <main>${lunch.lunchContent}</main>
                <footer>${footer.footerContent}</footer>
                <button>${button.button}</button>
            </div>
        `;

        document.body.innerHTML = template;
    }
}

new App;