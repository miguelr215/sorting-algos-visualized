import React from 'react';
import './style.css';

const SortInfo = ({
    title,
    description,
    worstCase,
    avgCase,
    bestCase,
    space
}) => {
    return (
        <div className='SortInfo'>
            <hr />
            <h1>{title ? title : 'Choose an Algorithm'}</h1>

            <div className='SoftInfo__Content'>

                <div className='SortInfo__Description'>
                    {description ? description : (
                        <p>Please select an algorithm to view it's execution on an array of numbers</p>
                    )}
                </div>

                <div className='SortInfo__Case'>
                    <h3>Performance</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Best case time complexity:</td>
                                <td>{bestCase}</td>
                            </tr>
                            <tr>
                                <td>Average time complexity:</td>
                                <td>{avgCase}</td>
                            </tr>
                            <tr>
                                <td>Worst case time complexity:</td>
                                <td>{worstCase}</td>
                            </tr>
                            <tr>
                                <td>Worst case space complexity:</td>
                                <td>{space}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
};

export default SortInfo;