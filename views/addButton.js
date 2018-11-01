import React from 'react';
import { Container, Fab, Icon } from 'native-base';

export default class AddButton extends React.Component{
    render(){
        return(
                    
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => console.log("Add todo button clicked") }>            
                    <Icon name="add" />
                </Fab>

        );
    }
}