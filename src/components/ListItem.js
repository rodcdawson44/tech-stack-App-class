import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {CardSection} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {

  constructor(props) {
    super(props)

    this.state={showText:false}

    this.onSelectLibrary = this.onSelectLibrary.bind(this)
    LayoutAnimation.spring();
  }

  componentWillUpdate(){
  //  LayoutAnimation.spring();
  //  this.renderDescription();
  }

renderDescription () {

  if(this.state.showText){
    return(
      <Text> {this.props.library.item.description} </Text>
    );
  }
}

onSelectLibrary(id) {
     this.props.seLectLibrary(id);
     this.setState({showText: !this.state.showText});
     console.log(this.props.libraryID);
}

  render() {
    const { id, title} = this.props.library
    console.log(this.props.library.item.title, 'here')

    return (
      <TouchableWithoutFeedback
       onPress={() => this.onSelectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text> { this.props.library.item.title} </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
       </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
   return {libraryID:state.select};

};

export default connect(mapStateToProps, actions)(ListItem);
