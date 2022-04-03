import {Component} from 'react';
import './App.scss';
import Header from "../header/header";
import Categories from "../catagories/categories";
import MessageField from "../message-field/message-field";
import ChuckService from "../../services/chuck-service";

class App extends Component<any, any>{

    chuckService = new ChuckService();

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            categories: [],
            activeCategory: '',
            activePhrase: '',
            logoLink: ''
        }
    }


    onCategory = (activeCategory: string) => {
        this.setState({activeCategory});

        this.chuckService.getJoke(activeCategory).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    activePhrase: result.value
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    componentDidMount() {
        this.chuckService.getCategories().then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    categories: [...result, 'random']
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )

        this.chuckService.getJoke(this.state.activeCategory).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    logoLink: result.icon_url,
                    activePhrase: result.value
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )

    }

  render() {
    const { error, isLoaded, categories, activeCategory } = this.state;
      if (error) {
          return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <div className="App">
                  <Header logo={this.state.logoLink}/>
                  <Categories
                      categories={categories}
                      isActive={activeCategory}
                      onCategory={this.onCategory}/>
                  <MessageField
                      activePhrase={this.state.activePhrase}/>
              </div>
          );
      }
  }
}

export default App;
