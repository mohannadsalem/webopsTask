import React from 'react';
import { StyleSheet, FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { Header } from "react-native-elements";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/index";

class MainGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {images, size} = this.props
    this.props.onLoadInitialData(images, size);
  }

  handleEndReached=e => {
    const {images,size} = this.props;
    this.props.onLoadMore(images,size)
  }

  handleLoadMore = () => {
    const {images, size} = this.props
    this.props.onLoadMore(images, size);
    console.log("LoadMOre Triggered")
  }

  renderItem = ({item, index}) => {
    return (<Image key={index} source={{
        uri: item.image
      }} style={styles.image} />)
  }

  renderHeader = () => {
    return (<Header
      outerContainerStyles={{
        width: 375
      }}
      placement="left"
      leftComponent={{
        icon: 'menu',
        color: '#fff'
      }}
      centerComponent={{
        text: 'TITLE',
        style: {
          color: '#fff'
        }
      }}
      rightComponent={{
        icon: 'search',
        color: '#fff'
      }}
      />)
  }

  render() {

    const {isLoading, images} = this.props
    // to check if the app is fetching data or not for Loading to be displayed
    if (isLoading && images.length === 0)
      return (
        <View style={styles.container}>
                <Text> Loading... </Text>
                <ActivityIndicator />
            </View>
    )

    // Main View for the Mobile Layout Used Flatlist which provides the required layout not ScrollView
    return (
      <View style={styles.container}>
            <FlatList
      numColumns={2}
      onEndReached={(e) => this.handleEndReached(e)}
      onEndReachedThreshold={10}
      ListHeaderComponent={this.renderHeader}
      data={images}
      renderItem={this.renderItem}
      />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 184.5,
    height: 100
  }
});

function mapStateToProps(state, props) {
  return {
    isLoading: state.mainGridReducer.isLoading,
    images: state.mainGridReducer.images,
    size: state.mainGridReducer.size,
    isLoadingMore: state.mainGridReducer.isLoadingMore
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadInitialData: (images, size) => dispatch(actions.LoadInitData(images, size)),
    onLoadMore: (images, size) => dispatch(actions.LoadMore(images, size))
  };
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);