import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/modal-container.js'
import Modal from '../../widgets/Components/Modal'
import Handleerror from '../../Error/containers/handle-error'

class Home extends Component {
    state={
        modalVisible:false,
    }
    handleOpenModal=()=>{
        this.setState({
            modalVisible:true
        })
    }
    HandleCloseModal=(event)=>{
        this.setState({
            modalVisible:false,
        })
    }

    render(){
        
        return(
        <Handleerror>
            <HomeLayout>
                <Related/>
                    <Categories 
                    categories={this.props.data.categories}
                    handleOpenModal={this.handleOpenModal}/>
                    {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal handleClick={this.HandleCloseModal}>
                                <h1>Esto es un portal</h1>
                        </Modal>                                                        
                    </ModalContainer>
                }
            </HomeLayout>
        </Handleerror>
        )
    
    }
}
export default Home