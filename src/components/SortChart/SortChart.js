import React from 'react';
import './style.css';

import Bar from '../Bar/Bar';

const getListOfBars = (
    numbers,
    maxNum,
    groupA,
    groupB,
    groupC,
    groupD,
    sortedIndices
) => {
    return numbers.map((num, i) => {
        let width = 100 / numbers.length;
        console.log(`width: ${width}`);
        let height = (num / maxNum) * 100;
        console.log(`height: ${height}`);
        let stateA = groupA.includes(i);
        let stateB = groupB.includes(i);
        let stateC = groupC.includes(i);
        let stateD = groupD.includes(i);
        let sorted = sortedIndices.includes(i);

        let margin =
            i === numbers.length ? '0' : width > 3 ? '5px' : '2px';
        
        return (
            <Bar 
                key={`${i}_${num}`}
                width={width}
                height={height}
                val={width > 4 ? num : null}
                stateA={stateA}
                stateB={stateB}
                stateC={stateC}
                stateD={stateD}
                sorted={sorted}
                style={{ marginRight: `${margin}` }}
            />
        );
    });
};

const SortChart = ({
    numbers,
    maxNum,
    groupA,
    groupB,
    groupC,
    groupD,
    sortedIndices
}) => {
    return (
        <div className='SortChart'>
            {getListOfBars(
                numbers,
                maxNum,
                groupA,
                groupB,
                groupC,
                groupD,
                sortedIndices
            )}
        </div>
    );
};

export default SortChart;