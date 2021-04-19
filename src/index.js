import { header } from './modules/header';
import { footer } from './modules/footer';
import { generator } from './modules/generator';

class App {
    constructor() {
        this.renderTemplate();
    }
    renderTemplate() {
        const template = `
            <h1>${header.title}</h1>
            <main>${lunch.lunchContent}</main>
            <footer>${footer.footerContent}
        `;

        document.body.innerHTML = template;
    }
}

new App;