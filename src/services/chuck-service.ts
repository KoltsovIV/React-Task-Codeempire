import {ChuckApiUrls} from "../shared/constants/chuck-api-urls";

class ChuckService {
    api = new ChuckApiUrls;

    getResource = async (url: string) => {
        let res = await fetch(url);

        return await res.json();
    }

    getCategories = () => {
        return this.getResource(this.api.url + this.api.categories);
    }

    getJoke = async (category:string) => {
        return await this.getResource(this.api.url + this.api.random
            + ((category && category !== this.api.random) ? ('?' + category) : ''));
    }
}

export default new ChuckService;
