import React, {Component} from 'react'
import Media from './Components/media'


class Playlist extends Component{
    render(){
        const Playlist =this.props.data.categories[0].playlist
        console.log(this.props.data)
        return(
            <div>
                {
                    Playlist.map((item)=>{
                        return <Media title={item.title}/>
                    })
                }
                <Media/>
            </div>
        )
    }
}


export default Playlist