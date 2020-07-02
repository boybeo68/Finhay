/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {Image, View} from 'react-native';

import {connect} from 'react-redux';
import {colors} from '../../styles/colors';

// import styles from './styles';

class Indicator extends Component {
  renderIndicator = (active) => {
    return active.map((item, index) => {
      return (
        <View
          key={index.toString()}
          style={{
            backgroundColor: item ? colors.primary : colors.grayText,
            width: 14,
            height: 14,
            borderRadius: 7,
            marginHorizontal: 2,
          }}
        />
      );
    });
  };
  render() {
    return (
      <View
        style={{
          // position:'absolute',
          width: 170,
          height: 40,
          backgroundColor: '#fff',
          borderRadius: 25,
          paddingHorizontal: 20,
          zIndex: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {this.renderIndicator(this.props.active)}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  startTour_Reducer: state.startTour_Reducer,
});

export default connect(mapStateToProps)(Indicator);
