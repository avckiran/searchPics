import React from 'react';

class SearchBar extends React.Component{
   state = {term:''};

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term); // This is basically saying that execute onSubmit function inside the props and pass this.state.term
        // this is used to reference props in a class based component. 
   }
    
    render(){
        // console.log(this.state.term);
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={e => this.setState({term: e.target.value})} 
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;

