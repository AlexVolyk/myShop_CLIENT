import { useEffect, useState } from 'react'


export const  useInput = (prop:any) => {
    const [value, setValue] = useState('')

    console.log('useInput', prop);
    
    function change(e:any, file:boolean = false) {
        // console.log(e,'eeee');
        if (file === true) {
            setValue(e)
            
        } else {
            setValue(e.target.value)
        }
        

    }
    useEffect(() => {
        setValue(prop)
    }, [prop])

    return{
        value,
        change
    }

}