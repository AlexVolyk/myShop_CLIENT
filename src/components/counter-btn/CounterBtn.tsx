import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './CounterBtn.scss'
import { useAppDispatch } from '../../redux/redux';
import { incrementCount, decrementCount } from '../../redux/slices/cartSlice';

type CounterBtnType = {
    count: number,
    setIncrement?: any,
    setDecrement?: any,
    setCount?: any,
    id?: number
}

const CounterBtn = ({ count, setIncrement, setDecrement, setCount, id }: CounterBtnType) => {
    const dispatch = useAppDispatch()

    function Count(action: '-' | '+') {
        if (setCount) {
            if (action == '-') {
                if (count - 1 >= 1) {
                    setCount(count - 1)

                }

            } else {
                setCount(count + 1)

            }

        } else {
            if (setDecrement && setIncrement) {
                if (action == '-') {
                    if (count - 1 >= 1) {
                        dispatch(setDecrement(id))
    
                    }
    
                } else {
                    dispatch(setIncrement(id))
    
                }
                
            }

        }

    }

    return (
        <div className='counter-inner'>
            <button className='counter-btn' onClick={() => Count('-')}>
                <RemoveIcon />
            </button>
            <p className='counter-value'>
                {count}
            </p>
            <button className='counter-btn' onClick={() => Count('+')}>
                <AddIcon />
            </button>
        </div>
    )
}

export default CounterBtn