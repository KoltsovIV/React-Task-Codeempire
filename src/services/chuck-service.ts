class ChuckService {

    api = {
        base: 'https://api.chucknorris.io/jokes/',
        categories: 'categories',
        random: 'random'
    }

    getResource = async (url: string) => {
        let res = await fetch(url);

        return await res.json();
    }

    getCategories = () => {
        return this.getResource(this.api.base + this.api.categories);
    }

    getJoke = (category:string) => {
        return this.getResource(this.api.base + this.api.random
            + ((category && category !== this.api.random) ? ('?' + category) : ''));
    }
}

export default ChuckService;
