import React from "react";
import {
    View,
    Text,
    TextInput,
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { changePostTitle } from './action';

class PostNew extends React.Component {

    constructor(props) {
        super(props);

        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(title) {
        console.log('titulo modificado: ' + title);
        this.props.changePostTitle(title);
    }

    render() {

        return (
            <View style={{ margin: 30, justifyContent:'center', alignItems: 'center' }}>
                <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                    onChangeText={this.onTitleChange}
                    value={this.props.title}
                />
                <Text></Text>                
                <Text style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center' }}>{this.props.title}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.postForm.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changePostTitle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
