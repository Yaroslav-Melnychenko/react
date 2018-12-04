import React from "react";

class Search extends React.Component{

    searchText = '';

    state = {
        games: [
            'Last of us',
            'Detroid become human',
            'Drive club',
            'Horizon zero dawn',
            'Spider man',
            'Kilzone',
            'Ghost og tusima',
            'Witcher',
            'Uncharted'
        ]
    }

    search(e){
        let searchText = e.target.value;
        let searched = [];
        this.state.games.map(function(value){
            if(value.toLowerCase().indexOf(searchText) !== -1){
                searched.push(value);
            }
        });
        console.log(searched);
        // this.setState({
        //     games: searched
        // })
    }

    render(){
        return(
            <div className="search-container">
                <input onKeyUp={this.search.bind(this)} type="text" className="form-control" />
                <ul className="list-group mt-5">
                    {
                        this.state.games.map(function(value, key){
                            return <li key={key} className="list-group-item disabled">{value}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default Search;
