/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,Component} from 'react';
import type {Node} from 'react';
import {Tappable} from "../../common/tappable/Tappable.android";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import axios from 'axios';





import {
  Button, Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {fetch} from 'react-native/Libraries/Network/fetch';


const api ={

  key :'f24741e42eb3f2aa52b5730e9c180038',
  baseUrl:'https://api.openweathermap.org/data/3.0/',

};

class App extends React.Component {


  constructor() {
    super();
    this.state = {

      count: 0,
      cheese: 0,
      patty: 0,
      veggies: 0,
      data: [],

    }
  }


  fun(action, callmex) {

    let {count, cheese, patty, veggies} = this.state;
    let value;
    switch (callmex) {

      case 'count': {
        value = count;
        break;
      }
      case 'cheese': {
        value = cheese;
        break;
      }
      case 'patty': {
        value = patty;
        break;
      }
      case 'veggies': {
        value = veggies;
        break;
      }
      default :
        break;

    }
    if (action === 'inc') {
      value = value + 1;
    } else {
      value = value > 0 ? value-1 : 0;
    }
    this.setState({[callmex]: value},()=>{
      console.log('abs');

      console.log(this.state);
    });


  }

  content = () => {

    let {count, cheese, patty, veggies} = this.state;

    let content = [];

    for (let i = 0; i < cheese; i++) {
      content.push(<View
          style={{backgroundColor: 'yellow', height: 20, width: 120, alignSelf: 'center', marginBottom: 10}}></View>)
    }
    for (let i = 0; i < patty; i++) {
      content.push(<View
          style={{backgroundColor: 'brown', height: 20, width: 120, alignSelf: 'center', marginBottom: 10}}></View>)
    }
    for (let i = 0; i < veggies; i++) {
      content.push(<View
          style={{backgroundColor: 'green', height: 20, width: 120, alignSelf: 'center', marginBottom: 10}}></View>)
    }
    return content;


  }


  render() {


    return (

          <View>

            {this.renderIncDec()}

            {this.renderOptions()}

            {this.renderBurger()}

            {this.renderWeather()}

          </View>





    );
  }
  renderIncDec(){

    console.log('relod incdec');

    return (
        <View>
          <Text style={styles.sectionTitle}> {this.state.count !== 0 ? this.state.count : 'Lets get started'}

          </Text>
          <Button title='inc' onPress={() => this.fun('inc','count')}>

          </Button>

          <Button title='dec' onPress={() => this.fun('dec','count')}>

          </Button>
        </View>
    );
  }
  renderWeather(){
    console.log('relod weather');
    return (
        <View>
          <Text style={styles.sectionTitle}>Bangalore, India</Text>
          {this.showMovies()}
          <Text style={styles.sectionTitle}>{this.state.data?.description}</Text>
          <Button title='Refresh' onPress={() => this.weather()}></Button>
        </View>
    );
  }

  renderBurger(){
    console.log('relod burger');

    return (
        <View>
          <View style={{backgroundColor: 'orange', height: 50, width: 120, alignSelf: 'center', marginBottom: 10}}>
            <Text style={styles.sectionTitle}>bun top</Text>
          </View>
          {this.content()}
          <View style={{backgroundColor: 'orange', height: 50, width: 120, alignSelf: 'center', marginTop: 10}}>
            <Text style={styles.sectionTitle}>bun bottom</Text>
          </View>
        </View>
    );
  }

  renderOptions(){

    console.log('reload options');

    return (
        <View>
          <View style={{flexDirection: "row", padding: 10, alignSelf: 'center'}}>
            <Button title='inc cheese' style={{padding: 10}} onPress={() => this.fun('inc', 'cheese')}>

            </Button>

            <Button title='dec cheese' onPress={() => this.fun('dec', 'cheese')}>

            </Button>
          </View>


          <View style={{flexDirection: "row", padding: 10, alignSelf: 'center'}}>
            <Button title='inc patty' style={{padding: 10}} onPress={() => this.fun('inc', 'patty')}>

            </Button>

            <Button title='dec patty' onPress={() => this.fun('dec', 'patty')}>

            </Button>
          </View>


          <View style={{flexDirection: "row", padding: 10, alignSelf: 'center'}}>
            <Button title='inc veggie' style={{padding: 10}} onPress={() => this.fun('inc', 'veggies')}>

            </Button>

            <Button title='dec veggie' onPress={() => this.fun('dec', 'veggies')}>

            </Button>
          </View>


        </View>
    );
  }


  componentDidMount() {
    this.weather();
  }



  showMovies=()=>{

    var array = this.state.data?.movies;
    let i;
    let temp = [];

    for (i in array)
    {
      temp.push(<Text style={styles.sectionTitle}>{array[i].releaseYear}</Text>);
      console.log(array[i]);
    }

    return temp;
  }


   weather() {

    axios.get('https://reactnative.dev/movies.json').then(res=>{
      this.setState({data:res.data});

    });

  };
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor:'black',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf:'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonStyle:{

    alignSelf:'center',
    borderRadius:5,
    padding:10,
    //height:10,
    backgroundColor:'#2A55E5',
    position:'relative',


  },
  buttonText:{

    textAlign: 'center',
    fontSize: 15,
    fontFamily:'Inter',
    color:'white',



  }
});

export default App;
