import React, {Component} from 'react'
import RegularError from '../../Error/components/regular-error'

class Handleerror extends Component{
    state={
        HandleError:false,
    }
    componentDidCatch(error, info){
        this.setState({
            HandleError:true
        })
    }
    render(){
        if (this.state.HandleError){

            return(
                <RegularError/>
                )
        }
        return this.props.children
    }
}

export default Handleerror