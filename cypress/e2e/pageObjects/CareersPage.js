import BasePage from './BasePage'
import {prepareForUrl,waitForPage} from '../../support/util';
const JOB_DESCRIPTION = 'JOB_DESCRIPTION';
const OPEN_POSITIONS = require('../../fixtures/openPositions.json');

class CareersPage extends BasePage {
	constructor(){
        super();
        this.FRAME = this.PAGE_CONSTANTS['IFRAME'];
    }

	openJobDescriptionPage(role) {
		prepareForUrl(this.requests[JOB_DESCRIPTION]);
		prepareForUrl(this.requests['JOB_DESCRIPTION_JS']);
		this.click(this.getElementFromFrame('#gnewtonIframe', 'a', role));

		waitForPage(this.requests[JOB_DESCRIPTION]);
		waitForPage(this.requests['JOB_DESCRIPTION_JS']);
	}

	getElementFromFrame(frame, element, role){
        return cy.getIframeBody(frame).find(element).contains(OPEN_POSITIONS[role]['NAME']);
    }
}

export default new CareersPage();