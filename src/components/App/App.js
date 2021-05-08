import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp'



class App extends React.Component{
      constructor(props){

        super(props);

        this.state={
          businesses:[],
          lal: 'lalks'
        };
        
        this.searchYelp = this.searchYelp.bind(this);
        this.chekfunction = this.chekfunction.bind(this);
      }


  searchYelp(term, location, sortBy){
    
    Yelp.search(term, location,sortBy).then((businesses)=>{
      this.setState({
        businesses:businesses,
      });
      
    })
}
 // для поиска ошибки
    chekfunction(){
        this.setState({
          lal:`cheked`
        })

    }
 
  render() {
    return (
    <div className="App">
    <h1>ravenous {this.state.lal}</h1>
    <SearchBar  searchYelp={this.searchYelp} chekfunction={this.chekfunction} />
    <BusinessList businesses={this.state.businesses} />

  </div>
  );}
}

export default App;
