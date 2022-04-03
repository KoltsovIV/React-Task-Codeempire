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
            isLoading: false,
            logoUrl: '',
            activeCategory: '',
            activePhrase: ''
        }
    }

    componentDidMount() {
        this.getChuckJoke(this.state.activeCategory);
    }


    onCategory = (activeCategory: string) => {
        this.setState({activeCategory});
        this.getChuckJoke(activeCategory);
    }

    getChuckJoke = (category: string) => {
        this.chuckService.getJoke(category).then(
            (result) => {
                this.setState({
                    activePhrase: result.value
                });

                if (!this.state.logoUrl) {
                    this.setState({
                        logoUrl: result.icon_url
                    });
                }
            }
        )
    }

  render() {
    const { error, isLoading, logoUrl, activeCategory, activePhrase } = this.state;
      return (
          <div className="App">
              <Header logo={logoUrl}/>
              <Categories
                  activeCategory={activeCategory}
                  onCategory={this.onCategory}/>
              <MessageField
                  activePhrase={activePhrase}/>
          </div>
      );
  }
}

export default App;
