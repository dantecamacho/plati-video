import React, {Component} from 'react'
import Media from './Components/media'
import './Components/playlist.css'

class Playlist extends Component{
    render(){
        const Playlist =this.props.data.categories[0].playlist
        console.log(this.props.data)
        return(
            <div className="Playlist">
                {
                    Playlist.map((item)=>{
                        return <Media {...item} key={'item.id'}/>
                    })
                }
                
            </div>
        )
    }
}


export default Playlist