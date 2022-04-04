import {Component} from 'react';
import './App.scss';
import Header from '../header/header';
import Categories from '../categories/categories';
import MessageField from '../message-field/message-field';
import ChuckService from '../../services/chuck-service';

const initialState = {
    error: false,
    apiLoading: true,
    appLoading: true,
    logoUrl: '',
    activeCategory: '',
    activePhrase: ''
}

class App extends Component<unknown, typeof initialState>{

    state = initialState;

    onJokeLoaded = (result: any) => {
        this.setState(() => ({
            activePhrase: result.value,
            apiLoading: false,
            error: false
        }));

        if (!this.state.logoUrl) {
            this.setState(() => ({
                logoUrl: result.icon_url
            }));
        }
    }

    onError = () => {
        this.setState(() => ({
            apiLoading: false,
            error: true
        }));
    }

    getChuckJoke = async (category: string) => {
        this.setState(() => ({
            apiLoading: true
        }))
        await ChuckService.getJoke(category)
            .then(this.onJokeLoaded)
            .catch(this.onError);
    }

    handleCategoryChange = async (activeCategory: string) => {
        this.setState(() => ({activeCategory}));
        await this.getChuckJoke(activeCategory);
    }

    async componentDidMount() {
        const el = document.querySelector(".loader-container");
        if (el) {
            el.remove();
            this.setState(() => ({ appLoading: false }));
        }

        await this.getChuckJoke(this.state.activeCategory)
    }

  render() {
        const { error, apiLoading, logoUrl, activeCategory, activePhrase } = this.state;
        return (
          <div className="App">
              <Header logo={logoUrl}/>
              <Categories
                  activeCategory={activeCategory}
                  handleCategoryChange={this.handleCategoryChange}/>
              <MessageField
                  activePhrase={activePhrase}
                  isLoading={apiLoading}
                  error={error}/>
          </div>
        );
  }
}

export default App;
