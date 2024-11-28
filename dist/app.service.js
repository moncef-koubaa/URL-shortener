"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.URLs = {};
        this.shortURLs = {};
        this.clicks = {};
    }
    tobase62(n) {
        let base62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        while (n > 0) {
            result = base62[n % 62] + result;
            n = Math.floor(n / 62);
        }
        return result;
    }
    incrementClick(shortURL) {
        this.clicks[shortURL] += 1;
    }
    findURL(shortURL) {
        return this.URLs[shortURL] !== undefined;
    }
    getURL(shortURL) {
        if (this.findURL(shortURL)) {
            this.incrementClick(shortURL);
            return this.URLs[shortURL];
        }
        else {
            return "Invalid URL";
        }
    }
    async createShortURL(url) {
        if (this.shortURLs[url]) {
            return this.shortURLs[url];
        }
        try {
            const response = await fetch(url);
            if (response.status !== 404) {
                let n = Math.floor(Math.random() * 1000000000);
                let shortURL = this.tobase62(n);
                while (this.URLs[shortURL]) {
                    n = Math.floor(Math.random() * 1000000000);
                    shortURL = this.tobase62(n);
                }
                this.URLs[shortURL] = url;
                this.shortURLs[url] = shortURL;
                this.clicks[shortURL] = 0;
                return shortURL;
            }
            else {
                return "Invalid URL";
            }
        }
        catch (error) {
            return "Invalid URL";
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map