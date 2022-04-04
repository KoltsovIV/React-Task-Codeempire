import {Component} from 'react';
import './categories.scss'
import ChuckService from '../../services/chuck-service';
import {LoadingService} from '../../services/loading-service';
import {CategoriesProps} from '../../shared/interfases/props-interfaces';

const initialState = {
    error: false,
    isLoading: true,
    categories: Array<string>()
}

class Categories extends Component<CategoriesProps, typeof initialState>{

    state = initialState;

    onCategoriesLoaded = (categories: Array<string>) => {
        this.setState(() => ({
            categories: [...categories, 'random'],
            isLoading: false
        }));
    }

    onError = () => {
        this.setState(() => ({
            isLoading: false,
            error: true
        }));
    }

    getCategories = async () => {
        await ChuckService
            .getCategories()
            .then(this.onCategoriesLoaded)
            .catch(this.onError);
    }

    async componentDidMount() {
        await this.getCategories();
    }

    makeButtons(categories: Array<string>) {
        return categories.map((name: string) => {
            const active = this.props.activeCategory === name;
            const clazz = active ? 'active' : '';
            return (
                <button
                    className={`categories__buttons ${clazz}`}
                    type='button'
                    key={name}
                    onClick={() => this.props.handleCategoryChange(name)}>
                    {name}
                </button>
            )
        });
    }

    render() {
        const {error, isLoading, categories} =this.state;
        const buttons = this.makeButtons(categories);

        const content = LoadingService.manageContent(isLoading, error, buttons);
        return (
            <div className="categories">
                <h1 className="categories__title">Categories</h1>
                <div className="categories__buttons-container">
                    {content}
                </div>
            </div>
        )
    }
}

export default Categories;
