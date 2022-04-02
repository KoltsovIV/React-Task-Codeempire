import {Component} from 'react';
import './App.scss';
import Header from "../header/header";
import Categories from "../catagories/categories";
import MessageField from "../message-field/message-field";
import ChuckService from "../../services/chuck-service";

class App extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            categories: [],
            activeCategory: ''
        }
    }

    onCategory = (activeCategory: string) => {
        this.setState({activeCategory});
    }

    componentDidMount() {
        const chuckService = new ChuckService();

        chuckService.getCategories().then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    categories: result
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
          return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <div className="App">
                  <Header/>
                  <Categories
                      categories={categories}
                      isActive={activeCategory}
                      onCategory={this.onCategory}/>
                  <MessageField/>
              </div>
          );
      }
  }
}

export default App;
