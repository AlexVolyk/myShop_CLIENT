import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/redux'
import { setMaximumCurrentPrice, setMinimumCurrentPrice } from './redux/slices/filterSlice'
import './Testing.scss'

const Testing = () => {
    const max = useAppSelector(state => +state.filter.maximumPrice)
    console.log('MAXXXXXXXXXXXXXXXXX',max);
    // useEffect(() => {

    // }, [max])
    
    // console.log(max, 'state => state.filter.maximumPrice');
    
    // const [max, setMax] = useState<number>((prev = 0)=> maximumPrice)
    // console.log(max);
    // useEffect(() => {
    //     // return() => {
    //         setMax(maximumPrice)
    //     // }
    // }, [maximumPrice])


    const dispatch = useAppDispatch()

    const [leftValue, setLeftValue] = useState(max / 4)
    const [rightValue, setRightValue] = useState(max / 1.5)

    const [leftWidthPercent, setLeftWidthPercent] = useState((leftValue / max) * 100)
    const [rightWidthPercent, setRightWidthPercent] = useState(100 - (rightValue / max) * 100)
    // console.log(leftWidthPercent, 'leftWidthPercent');

    // console.log(rightWidthPercent, 'rightWidthPercent');


    const [testLeft, setTestLeft] = useState(max / 4)
    const [testRight, setTestRight] = useState(max / 1.5)
    // useEffect(() => {
    //     //   first

    //     // return () => {
    //         setLeftValue(max / 3)
    //         setRightValue(max / 2)
    //         setLeftWidthPercent((leftValue / max) * 100)
    //         setRightWidthPercent(100 - (rightValue / max) * 100)
    //     // }
    // }, [max])



    const GAP = 10

    function setLeftWidth(val: any) {
        let leftp = (val / max) * 100

        setLeftWidthPercent(leftp)

    }

    function setRightWidth(val: any) {
        let rightp = (val / max) * 100
        rightp = 100 - rightp

        setRightWidthPercent(rightp)

    }

    function chlt(e: any) {
        const result = e.target.value.replace(/\D/g, '');
        setTestLeft(result)

    }

    function chrt(e: any) {
        const result = e.target.value.replace(/\D/g, '');
        setTestRight(result)

    }

    function chltt(e: any) {
        let key = e.code
        if (key === 'Enter') {
            let l = testLeft
            setLeft(l)

        }


    }

    function chrtt(e: any) {
        let key = e.code
        if (key === 'Enter') {
            let r = testRight
            setRight(r)

        }

    }

    function chl(e: any) {
        let l = +e.target.value
        setLeft(l)
    }


    function chr(e: any) {
        let r = +e.target.value
        setRight(r)
    }

    function onBlurInputLeft(e: any) {
        let l = +e.target.value
        setLeft(l)

    }

    function onBlurInputRight(e: any) {
        let r = +e.target.value
        setRight(r)

    }

    function setLeft(leftV: number) {
        if (leftV >= rightValue) {
            setTestLeft(rightValue - GAP)
            setLeftValue(rightValue - GAP)
            setLeftWidth(rightValue - GAP)
            // dispatch(setMinimumCurrentPrice(rightValue - GAP))


        } else {
            setTestLeft(leftV)
            setLeftValue(leftV)
            setLeftWidth(leftV)
            // dispatch(setMinimumCurrentPrice(leftV))


        }
    }

    function setRight(rightV: number) {
        if (rightV >= max) {
            rightV = max

            setTestRight(rightV)
            setRightValue(rightV)
            setRightWidth(rightV)
            // dispatch(setMaximumCurrentPrice(rightV))


        } else {
            if (rightV <= leftValue) {
                setTestRight(leftValue + GAP)
                setRightValue(leftValue + GAP)
                setRightWidth(leftValue + GAP)
                // dispatch(setMaximumCurrentPrice(leftValue + GAP))


            } else {
                setTestRight(rightV)
                setRightValue(rightV)
                setRightWidth(rightV)
                // dispatch(setMaximumCurrentPrice(rightV))


            }

        }
    }

    function FSetMinimumCurrentPrice(e: any) {
        dispatch(setMinimumCurrentPrice(e.target.value))

    }

    function FSetMaximumCurrentPrice(e: any) {
        dispatch(setMaximumCurrentPrice(e.target.value))

    }



    return (
        <div>
            <div className='number-container'>
                <div className='leftValue-numbers'>
                    <input
                        className='filter-input'
                        type="text"
                        min={0}
                        max={max}
                        value={testLeft}
                        onKeyDown={chltt}
                        onChange={chlt}
                        onBlur={onBlurInputLeft}
                    />
                </div>
                <div className="values-dash-inner">
                    <div className='values-dash'>
                    </div>
                </div>
                <div className='rightValue-numbers'>
                    <input
                        className='filter-input'
                        type="text"
                        min={0}
                        max={max}
                        value={testRight}
                        onKeyDown={chrtt}
                        onBlur={onBlurInputRight}
                        onChange={chrt}
                    />
                </div>
            </div>
            <div className='input-progress-inner'>
                <span className='progress'></span>
                <span className='progress-fill'
                    style={{
                        left: leftWidthPercent + '%',
                        right: rightWidthPercent + '%',
                    }}></span>
                <input
                    type="range"
                    className='slider'
                    min={0}
                    max={max}
                    onChange={chl}
                    value={leftValue}
                    step="1"
                    onMouseUp={(e) => FSetMinimumCurrentPrice(e)}
                />
                <input
                    type="range"
                    className='slider'
                    min={0}
                    max={max}
                    onChange={chr}
                    value={rightValue}
                    step="1"
                    onMouseUp={(e) => FSetMaximumCurrentPrice(e)}
                />
            </div>
        </div>
    )
}


export default Testing