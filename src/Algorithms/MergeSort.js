import React from 'react';
import { newTrace, addToTrace, lastSorted, swap, createKey } from './helpers';

const MergeSort = (nums) => {
    // initial trace
    const trace = newTrace(nums);
    
    if(nums.length === 1) {
        return nums;
    }

    const center = Math.floor(nums.length / 2);
    const left = nums.slice(0, center);  // slice from 0 index to middle NOT INCLUDING CENTER INDEX
    const right = nums.slice(center);  // slice from center to end of array

    return merge(MergeSort(left), MergeSort(right));
};

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
};

export const MergeSortKey = createKey('Call Merge Sort', null, 'Overwrite from axillary array');

export const MergeSortDesc = {
    title: 'Merge Sort',
    description: (
        <div>
        <p>
            <a
            href="https://en.wikipedia.org/wiki/Merge_sort"
            target="_blank"
            rel="noopener noreferrer"
            >
            Merge Sort
            </a>{' '}
            is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:
        </p>
        <ol>
            <li>
            Divide the unsorted list into <em>n</em> sublists, each
            containing one element(a list of one element is considered
            sorted)
            </li>
            <li>
            Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
            </li>
        </ol>
        </div>
    ),
    worstCase: (
        <span>
        O(<em>n</em> log <em>n</em>)
        </span>
    ),
    avgCase: (
        <span>
        O(<em>n</em> log <em>n</em>)
        </span>
    ),
    bestCase: (
        <span>
        O(<em>n</em> log <em>n</em>)
        </span>
    ),
    space: (
        <span>
        O(<em>n</em>)
        </span>
    )
}

export default MergeSort;