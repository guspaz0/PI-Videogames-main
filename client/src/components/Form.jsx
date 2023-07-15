import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms } from '../redux/actions';
import { FormStyle } from './CSS/Form';

export default function Form() {

    const dispatch = useDispatch()
    const Genres = useSelector(state => state.Genres)
    const Platforms = useSelector(state => state.Platforms)
    const [Search, setSearch] = React.useState()

    React.useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])
    
    const [Form, setForm] = React.useState(() => {
        const checkbx = Platforms.map((e) => {return {[e.name]: {checked: true}}})
        return {
            name: null,
            background_image: null,
            description: null,
            platforms: [],
            released: null,
            rating: null,
            genres: [],
            checkboxes: {...checkbx}
        }
    })

    

    React.useEffect(() =>{

    },[])



    function handleChange(e) {
        e.preventDefault()
        const {name, value, checked} = e.target
        // for (const prop in Form) {
        //     if (prop === name) {
        //         setForm({
        //             ...Form,
        //             [name]: value
        //         })
        //     }
        // }
        // const parent_platform = Platforms.find((e => e.name === name))
        // const input = document.querySelector(`input[name='${name}']`)
        // if (parent_platform) {
        //     if (!checked) {
        //         // input.setAttribute("checked", "")
        //         // input.checked = true
        //         // console.log(input)
        //         setForm({
        //             ...Form,
        //             platforms: [...Form.platforms, {id: parent_platform.id ,name: parent_platform.name}],
        //         })
        //     } 
        //     if (checked) {
        //         // input.removeAttribute("checked")
        //         // input.checked = false
        //         const Filter = Form.platforms.filter((e) => e.name !== name)
        //         setForm({
        //             ...Form,
        //             platforms: [...Filter],
        //         })
        //     }
        // }
            //else {
            //     setForm({
            //         ...Form,
            //         platforms: [
            //             ...Form.platforms,
            //             {[name]: value}
            //         ]
            //     })
            // }
        

        console.log(name)
    }

    function handlePlatformChange (e) {
        const {value, checked} = e.target;

    }

    function handleSearch(e){
        e.preventDefault()
        const name = e.target.value
        let results = []
        for (var i = 0; i < Platforms.length; i++) {
            for (var j = 0; j < Platforms[i].platforms.length; j++) {
                if(Platforms[i].platforms[j].name.toLowerCase().includes(name.toLowerCase())) {
                    results = [...results, Platforms[i].platforms[j]]
                } 
            }
        }
        setSearch(results)
        console.log(results)
    }
    return (
        <FormStyle>
            <h1>Form component</h1>
            <label>Name: <input type='text' name='name' onChange={handleChange}/></label>
            <label>Image: <input type='url' name='background_image' onChange={handleChange}/></label>
            <label>Description: <textarea name='description' onChange={handleChange}/></label>
            <label>Platforms:</label>
            <p className='platforms'>
            {/* <input type='search' onChange={handleSearch}/>
            {Search? <select style={{height: '200px'}} name='platforms' multiple onChange={handleChange}>
                {Search.map((s) => s.platforms.map((s2) => <option key={s2.id} value={s2.name}>{s2.name}</option>))}
            </select> : null} */}
            {Platforms.length > 0 && Platforms.map((e) => {return <span className='platform' key={e.id}>
                <p >{e.name}<input type='checkbox' name={Form.checkboxes[`${e.name}`]} onChange={handleChange}/></p>
                    {/* {e.platforms.map((x) => {return <p >{x.name}<input type='checkbox' name='platform'/></p>})} */}
                </span>})
                }
            </p>
            
            <button onClick={() => dispatch(getPlatforms())}>dispatch plarform</button>
        </FormStyle>
    )
}