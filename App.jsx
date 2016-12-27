import React from 'react';
import ReactDOM from 'react-dom';

const CONTACS = [
{
    id: 1,
    name:'Shark' ,
    phoneNomber:'+066446464',
    image: 'http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxoQS5Rqb9Hh9WE-SDHMJwlHyMripayaWWn2IL93HeKORG/'
},{
    id: 2,
    name:'Cat' ,
    phoneNomber:'+093520511',
    image: 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg'
},{
    id: 3,
    name:'Koala' ,
    phoneNomber:'+095151511',
    image: 'https://onekind.org/wp-content/uploads/2016/09/az_koala1.jpg'
},{
    id: 4,
    name:'Dog' ,
    phoneNomber:'+09645515151',
    image: 'https://www.google.com.ua/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjOs4Pt8JHRAhUCiCwKHaG6CtoQjBwIBA&url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F02%2F19%2F15%2F46%2Fdog-1210559_960_720.jpg&bvm=bv.142059868,d.bGg&psig=AFQjCNG6vusn9U5uH12wKmHJ1gKazxOCiQ&ust=1482842481628197'
},
]



class App extends React.Component {

   constructor(props) {
      super(props);
		
      
this.state = {
    contacts: CONTACS,
    searchQuery: ''
}

   };
     


handleSearch(event){
    let searchQuery = event.target.value.toLowerCase();
    this.setState({searchQuery: searchQuery})
};

   render(){
       
       return(
           <div className="contacts">
           <input type="text" className="search-field" onChange={(event) => this.handleSearch(event)} />
           <ul className="contacts-list">
           {
               this.state.contacts.filter(el => {
                  return el.name.toLowerCase().includes(this.state.searchQuery) 
               }).map(function(el){
               return <Contact 
               key={el.id} 
               name={el.name}
               phoneNomber={el.phoneNomber}
               image={el.image}
                />;
               })
           }
           </ul>
           </div>
       );
   }
}
class Contact extends React.Component {
    render(){
        return(
            <li className="contact">
            <img className="contact-image" src={this.props.image} width="70px" height="70px"/>
           <div className="contact-info">
           <div className="contact-name"> {this.props.name}</div>
           <div className="contact-number"> {this.props.phoneNomber}</div>
           </div>
            </li>
        );
    }
};

export default App ; 

