import './categories.scss'
import {Component} from "react";
import ChuckService from "../../services/chuck-service";

class Categories extends Component<any, any>{

    chuckService = new ChuckService()

    constructor(props: any) {
        super(props);

    }

    state = {
        error: null,
        isLoading: false,
        categories: []
    }

    componentDidMount() {
        this.chuckService.getCategories().then(
            (result) => {
                this.setState({
                    categories: [...result, 'random']
                });
            }
        )
    }

    makeButtons = () => {
        return this.state.categories.map((name: string) => {
            const active = this.props.activeCategory === name;
            const clazz = active ? 'active' : '';
            return (
                <button
                    className={`categories__buttons ${clazz}`}
                    type='button'
                    key={name}
                    onClick={() => this.props.onCategory(name)}>
                    {name}
                </button>
            )
        });
    }

    render() {
        const buttons = this.makeButtons()
        return (
            <div className="categories">
                <h1 className="categories__title">Categories</h1>
                <div className="categories__buttons-container">
                    {buttons}
                </div>
            </div>
        )
    }
}

export default Categories;
