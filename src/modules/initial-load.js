import {
    createDomElem
} from './utilities';
import '../styles/main.css';

const renderMain = () => {
    const bodyContent = document.getElementById('content');

    const projContainer = createDomElem('div', 'proj-container', '', '');
    const projConsole = createDomElem('div', 'proj-console', '', '');


    bodyContent.appendChild(projContainer);
    console.log("tototo")

    return {
        projContainer,
    }
};

export default renderMain;