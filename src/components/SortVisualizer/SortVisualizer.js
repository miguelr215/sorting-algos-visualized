import React, { Component } from 'react';
import './style.css';

import SortChart from '../SortChart/SortChart';

class SortVisualizer extends Component {
    state ={
        trace:[],
        traceStep: -1,
        originalArray: [],
        array: [],
        groupA: [],
        groupB: [],
        groupC: [],
        groupD: [],
        sortedIndices: [],
        timeoutIds: [],
        playbackSpeed: 1
    }

    render() {
        return (
            <div className='SortVisualizer'>
                <SortChart 
                    numbers={this.state.array}
                    maxNum={Math.max(...this.state.array)}
                    groupA={this.state.groupA}
                    groupB={this.state.groupB}
                    groupC={this.state.groupC}
                    groupD={this.state.groupD}
                    sortedIndices={this.state.sortedIndices}
                />
            </div>
        );
    };
}

export default SortVisualizer;