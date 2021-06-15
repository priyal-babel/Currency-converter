import React from 'react';
import {StyleSheet} from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';

export default class CstmShadowView extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ShadowView style={[styles.ShadowView,{...this.props.style}]}>
                {this.props.children}
            </ShadowView>
        );
    };
}


const styles = StyleSheet.create({
    ShadowView: {
        borderRadius: 10,
        marginTop:10,
        height:50,
        shadowColor: '#E7EAF0',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {width: 0,height: 1},
        backgroundColor: '#FFFFFF',
    }
});