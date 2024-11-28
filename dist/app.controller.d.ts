import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<string>;
    RedirectToUrl(shortUrl: string, res: any): any;
    RetrieveURL(shortUrl: string): any;
    NumberOfClicks(shortUrl: string): any;
    shortenURL(body: {
        url: string;
    }): Promise<any>;
}
