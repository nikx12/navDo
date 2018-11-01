import React from 'react';
import { Container, Fab, Icon } from 'native-base';

export default class AddButton extends React.Component{
    render(){
        const { onAddNewToDo } = this.props;
        return(
                    
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => onAddNewToDo(show = true) } >          
                    <Icon name="add" />
                </Fab>

        );
    }
}