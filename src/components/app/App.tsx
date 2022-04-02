import {Component} from 'react';
import './App.scss';
import Header from "../header/header";
import Categories from "../catagories/categories";
import MessageField from "../message-field/message-field";

class App extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            category: ''
        }
    }

    onCategory = (category: string) => {
        this.setState({category});
    }

  render() {
        const activeCategory = this.state.category;
        return (
          <div className="App">
              <Header/>
              <Categories isActive={activeCategory} onCategory={this.onCategory}/>
              <MessageField/>
          </div>
      );
  }
}

export default App;
