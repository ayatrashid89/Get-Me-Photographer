// 


import React, { Component } from 'react';
import axios from "axios";
import  './style.css';

export default class home extends Component {

    constructor(props){
        super(props)
        this.state = {
          photos_urls: []
        }
      }

    componentDidMount() {
        const url='https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJVRC1QWVlZASV9iTzF1clo0T011NFZAxazkxVlRyako2eUh4VTlxMlRELW1UUk5fZAFVuSWlONWZAyQ0dBR2RiSTdPWENMTm1rWS01dlJia3dpZAjdXOERhbkhaRjlzdVVmVGE1TkFNVjNEdkZAlbVhBaQZDZD';
            axios.get(url)
            .then((res) => {
                const photos = res.data.data.map( photo =>
                    <img className="instaphoto" src={ photo.media_url} />
                )
                this.setState({photos_urls: photos})
            })
            .catch((e) => console.log(e));  
    }
    


    render() {
        return(
            
            <div className='instaImg'>
              {this.state.photos_urls}
               </div>
        )
    };
}
