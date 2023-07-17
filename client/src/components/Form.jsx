import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms, postVideogame } from '../redux/actions';
import { FormStyle } from '../CSS';

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
            parent_platforms: [],
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
        const {value, name, checked} = e.target;
        if (name === 'parent_platform') {
            if (checked) {
                const filter = Platforms.filter((e) => e.name === value)[0].name
                setForm({
                    ...Form,
                    parent_platforms: [...Form.parent_platforms, filter]
                })
            } else {
                const filter = Form.parent_platforms.filter((e) => e !== value)
                setForm({
                    ...Form,
                    parent_platforms: [...filter]
                })
            }
        }
        if (name === 'platform') {
            if (checked) {
                const filter = Platforms.map((e) => e.platforms.filter((x) => x.name === value))[0].name
                setForm({
                    ...Form,
                    platforms: [...Form.parent_platforms, filter]
                })
            } else {
                const filter = Form.platforms.filter((e) => e !== value)
                setForm({
                    ...Form,
                    platforms: [...filter]
                })
            }
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

    function handleSubmit(e) {
        e.preventDefault()
        const genresData = Form.genres.map((e) => Genres.find((x) => x.name === e))
        const platformData = Form.parent_platforms.map((e) => Platforms.find((x) => x.name === e))
        
        console.log(platformData)
        console.log(genresData)
        
        const FormData = {
            ...Form,
            platforms: platformData,
            genres: genresData
        }


    }

    return (
        <FormStyle>
            <h1>Create Video Game</h1>
            <label>Name:</label>
                <input type='text' name='name' onChange={handleChange}/>
            <label>Image:</label>
                <input type='url' name='background_image' onChange={handleChange}/>
                {Form.background_image && <img src={Form.background_image} alt='img'/>}
            <label>Description:</label>
                <textarea name='description' onChange={handleChange}/>
            <label>Platforms:</label>
                <span className='platforms'>
                {Platforms.length > 0 && Platforms.map((e) => {return <span className='parent_platform' key={e.id}>
                        <p >{e.name}
                            <input type='checkbox' name='parent_platform' value={e.name} checked={Form.parent_platforms.includes(e.name)} onChange={handlePlatformChange}/>
                        </p>
                            {Form.parent_platforms.includes(e.name) && e.platforms.map((x) => {return <p >{x.name}<input type='checkbox' value={x.name} name='platform' checked={Form.platforms.includes(x.name)} onChange={handlePlatformChange}/></p>})}
                    </span>})}
                </span>
            <label>Released:</label>
                <input type='date' name='released' onChange={handleChange}/>
            <label>Rating:</label> 
                <span className='rating'><input defaultValue='0' type='range' max={5} name='rating' onChange={handleChange}/> {Stars[Form.rating-1]}</span>
            <label>Genres:</label>
                <span className='genres'>
                    {Genres.length > 0 && Genres.map((e) => {return <span className='genre' key={e.id}>
                    <p >{e.name}<input type='checkbox' value={e.name} checked={Form.genres.includes(e.name)} onChange={handleGenresChange}/></p>
                    </span>})}
                </span>
            <button onClick={handleSubmit}>Submit</button>
        </FormStyle>
    )
}