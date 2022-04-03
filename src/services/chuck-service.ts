

class ChuckService {
    getResource = async (url: string) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getCategories = () => {
        return this.getResource('https://api.chucknorris.io/jokes/categories');
    }

    getJoke = (category:string) => {
        return this.getResource(`https://api.chucknorris.io/jokes/random${category ? ('?' + category) : ''}`
);
    }
}

export default ChuckService;
