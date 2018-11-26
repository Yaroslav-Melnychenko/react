import React from "react";

class Link extends React.Component{
    render(){
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
        return(
            <li><a href={url}>{this.props.label}</a></li>
        );
    }
}

class Menu extends React.Component{

    render(){

        let  menu = ['Home', 'About', 'Contacts', 'Our partners'];

        return (
            <nav>
                <ul>
                    {
                        menu.map((value, index) => {
                            return <Link label={value} />
                        })
                    }
                </ul>
            </nav>
        );

    }
}
export default Menu;
