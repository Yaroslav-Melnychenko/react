import React from "react";

class Link extends React.Component{

}

class Menu extends React.Component{

    getMenu(labels){
        labels.map((value, index) => {
            <Link label={value} />
        });
    }

    render(){

        let  menu = ['Home', 'About', 'Contacts'];

        console.log(menu);

        return (
            <nav>
                <ul>
                    {this.getMenu.bind(this)}
                </ul>
            </nav>
        );
    }
}
export default Menu;
