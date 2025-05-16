import { Page, expect} from "@playwright/test"

export class Webpage {
    constructor(private page: Page) {
        this.page=page;
    }

    async dynamicName(name: string, comment: string) {
        var xpath = '//td[text()= "Name"]/following-sibling::td[5]/input'.replace("Name", name);
        await this.page.locator(xpath).fill(comment);
    }
    


}
