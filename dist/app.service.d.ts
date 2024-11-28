export declare class AppService {
    URLs: {
        [key: string]: string;
    };
    shortURLs: {
        [key: string]: string;
    };
    clicks: {
        [key: string]: number;
    };
    tobase62(n: number): string;
    incrementClick(shortURL: string): void;
    findURL(shortURL: string): boolean;
    getURL(shortURL: string): string;
    createShortURL(url: string): Promise<any>;
}
