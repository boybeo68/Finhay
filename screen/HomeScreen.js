import {
  Button,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../redux/context/AuthContext';
import {connect} from 'react-redux';
import {getListHero} from '../redux/actions/action_creator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HomeScreen(props) {
  const {authContext} = useContext(AuthContext);

  const _loadData = () => {
    props.getListHero();
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          width: wp('100%'),
          height: hp('10%'),
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={_loadData}>
        <Text>Load data</Text>
      </TouchableOpacity>
      {!props.loading_reducer ? (
        <View>
          {props.list_hero_reducer !== null && (
            <FlatList
              data={props.list_hero_reducer}
              renderItem={({item}) => <Text>{item.name}</Text>}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      ) : (
        <ActivityIndicator color={'red'} />
      )}
      <Button title="Sign out" onPress={authContext.signOut} />
    </View>
  );
}
function mapStateToProp(state) {
  return {
    loading_reducer: state.loading_reducer,
    list_hero_reducer: state.list_hero_reducer,
  };
}

export default connect(mapStateToProp, {getListHero})(HomeScreen);
