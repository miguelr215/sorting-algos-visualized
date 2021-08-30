import React, { Component } from 'react';
import './App.css';

import TopBar from '../src/components/TopBar/TopBar';
import MobileNav from './components/MobileNav/MobileNav';
import AppControls from '../src/components/AppControls/AppControls';
import SortVisualizer from './components/SortVisualizer/SortVisualizer';

import BubbleSort, { BubbleSortDesc, BubbleSortKey } from './Algorithms/BubbleSort';
import SelectionSort, { SelectionSortDesc, SelectionSortKey} from './Algorithms/SelectionSort';
import MergeSort, { MergeSortDesc, MergeSortKey } from './Algorithms/MergeSort';


class App extends Component {
  state = {
    mobileNavOpen: false,
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null
  }

  ALGORITHM = {
    'Bubble Sort': BubbleSort,
    'Selection Sort': SelectionSort,
    'Merge Sort': MergeSort
  }

  ALGORITHM_KEY = {
    'Bubble Sort': BubbleSortKey,
    'Selection Sort': SelectionSortKey,
    'Merge Sort': MergeSortKey
  }

  ALGORITHM_DESC = {
    'Bubble Sort': BubbleSortDesc,
    'Selection Sort': SelectionSortDesc,
    'Merge Sort': MergeSortDesc
  }

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // generate random number between 1 and max
    function getRandomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // generate an array of length max
    const array = Array(this.state.arraySize).fill(0).map(() => getRandomNumber(this.state.arraySize * 5));

    this.setState({
      array,
      trace: []
    },
    this.createTrace
    );

  }

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  }

  handleArraySizeChange = (arraySize) => {
    this.setState({ arraySize }, this.generateRandomArray);
  }

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if(sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleMobileNav = () => {
    this.setState((prevState) => ({
      mobileNavOpen: !prevState.mobileNavOpen
    }));
  };

  

  render() {

    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];
    
    const controls = (
      <AppControls 
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        onGenerateRandomArray={this.generateRandomArray}
      />
    );

    return (
      <div className="App">

        <TopBar
          mobileNavOpen={this.state.mobileNavOpen}
          toggleMobileNav={this.toggleMobileNav}
        >
          {controls} 
        </TopBar>

        <MobileNav
          open={this.state.mobileNavOpen}
          closeMobileNav={this.toggleMobileNav}
        >
          {controls}
        </MobileNav>

        <main className='App__Body'>
          <SortVisualizer 
            array={this.state.array}
            trace={this.state.trace}
            colorKey={colorKey}
            desc={desc}
          />
        </main>

      </div>
    );
  }
};

export default App;