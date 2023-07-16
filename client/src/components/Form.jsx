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

    const [Form, setForm] = React.useState({
            name: null,
            background_image: null,
            description: null,
            platforms: [],
            released: null,
            rating: null,
            genres: [],
        }
    )

    React.useEffect(() => {
    },[Form])

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        for (const prop in Form) {
            if (prop === name) {
                setForm({
                    ...Form,
                    [name]: value
                })
            }
        }
    }

    function handlePlatformChange (e) {
        const {value, checked} = e.target;
        if (checked) {
            const filter = Platforms.filter((e) => e.name === value)[0].name
            setForm({
                ...Form,
                platforms: [...Form.platforms, filter]
            })
        } else {
            const filter = Form.platforms.filter((e) => e !== value)
            setForm({
                ...Form,
                platforms: [...filter]
            })
        }
    }

    function handleGenresChange (e) {
        const {value, checked} = e.target;
        if (checked) {
            const filter = Genres.filter((e) => e.name === value)[0].name
            setForm({
                ...Form,
                genres: [...Form.genres, filter]
            })
        } else {
            const filter = Form.genres.filter((e) => e !== value)
            setForm({
                ...Form,
                genres: [...filter]
            })
        }
    }

    const Stars = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']

    function handleSubmit() {

    }

    return (
        <FormStyle>
            <h1>Form component</h1>
            <label>Name:</label> <input type='text' name='name' onChange={handleChange}/>
            <label>Image:</label> <input type='url' name='background_image' onChange={handleChange}/>
            {Form.background_image && <img src={Form.background_image} alt='img'/>}
            <label>Description:</label> <textarea name='description' onChange={handleChange}/>
            <label>Platforms:</label>
            <p className='platforms'>
            {/* <input type='search' onChange={handleSearch}/>
            {Search? <select style={{height: '200px'}} name='platforms' multiple onChange={handleChange}>
                {Search.map((s) => s.platforms.map((s2) => <option key={s2.id} value={s2.name}>{s2.name}</option>))}
            </select> : null} */}
            {Platforms.length > 0 && Platforms.map((e) => {return <span className='platform' key={e.id}>
                <p >{e.name}<input type='checkbox' value={e.name} checked={Form.platforms.includes(e.name)} onChange={handlePlatformChange}/></p>
                    {/* {e.platforms.map((x) => {return <p >{x.name}<input type='checkbox' name='platform'/></p>})} */}
                </span>})
                }
            </p>
            <label>Released:</label> <input type='date' name='released' onChange={handleChange}/>
            <label>Rating:</label> <input defaultValue='0' type='range' max={5} name='rating' onChange={handleChange}/> {Stars[Form.rating-1]}
            <label>Genres:</label><p className='platforms'>
            {Genres.length > 0 && Genres.map((e) => {return <span className='platform' key={e.id}>
                <p >{e.name}<input type='checkbox' value={e.name} checked={Form.genres.includes(e.name)} onChange={handleGenresChange}/></p>
                    {/* {e.platforms.map((x) => {return <p >{x.name}<input type='checkbox' name='platform'/></p>})} */}
                </span>})
                }
            </p>
            <button onClick={handleSubmit}>Submit</button>
        </FormStyle>
    )
}