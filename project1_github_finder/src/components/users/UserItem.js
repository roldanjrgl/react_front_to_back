import React, { Component } from 'react'

export class UserItem extends Component {
    
    state = {
        id: 'id',
        login: 'jroldanroldan',
        avatar_url: 'https://avatars3.githubusercontent.com/u/38052476?s=460&v=4',
        html_url: 'https://github.com/jroldanroldan'
    };
    

    render() {
        const {login, avatar_url, html_url} = this.state;

        return ( 
            <div className = "card text-center">
                <img 
                    src = {avatar_url} 
                    alt = ''
                    className = 'round-img'
                    style = {{width : '60px'}}
                />
                <h3>{login}</h3>

                <div>
                    <a href= {html_url} className = "btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>
            </div>
        );
    };
}

export default UserItem