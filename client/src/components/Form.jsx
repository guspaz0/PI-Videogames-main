import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms, postVideogame } from '../redux/actions';
import { FormStyle, ValidationStyle } from '../CSS';
import { validation, isEmpty, Stars } from '../utils';


export default function Form() {

    const dispatch = useDispatch()
    const Genres = useSelector(state => state.Genres)
    const Platforms = useSelector(state => state.Platforms)

    const Parent_platforms = Platforms.map((e) => {return {id: e.id, name: e.name, platforms: []}})

    //const [Search, setSearch] = React.useState()

    // React.useEffect(() => {
    //     if(Genres.length === 0) {
    //         dispatch(getGenres())
    //     }
    //     if (Platforms.length === 0) {
    //         dispatch(getPlatforms())
    //     }
    // }, [dispatch])

    const [Form, setForm] = React.useState({
            name: null,
            background_image: "",
            description: "",
            platforms: [],
            released: null,
            rating: null,
            genres: [],
        }
    )
    const [checkboxes, setCheckboxes] = React.useState({
        parent_platforms: [],
        platforms: [],
        genres: []
    })
    const [errors, setErrors] = React.useState({
        name: null,
        background_image: null,
        description: null,
        platforms: null,
        released: null,
        rating: null,
        genres: null,
    })

    React.useEffect(() => {
        setErrors(validation(Form))
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
                const filter = Platforms.filter((e) => e.name === value)[0]
                setCheckboxes({
                    ...checkboxes,
                    parent_platforms: [...checkboxes.parent_platforms, filter.name]
                })
                setForm({
                    ...Form,
                    platforms: [...Form.platforms, Parent_platforms.filter((x) => x.id === filter.id)[0]]
                })
            } else {
                const filterChecked = checkboxes.parent_platforms.filter((e) => e !== value)
                const filter = Form.platforms.filter((e) => e.name !== value)
                setCheckboxes({
                    ...checkboxes,
                    parent_platforms: [...filterChecked]
                })
                setForm({
                    ...Form,
                    platforms: [...filter]
                })
            }
        }
        if (name === 'platform') {
            const filter = Platforms.map((e) => {return {
                id: e.id,
                name: e.name,
                platforms: e.platforms.filter((x) => x.name === value)
            }})
            .filter((x) => x.platforms.length === 1)[0];
            const filterState = Form.platforms.filter((x) => x.id !== filter.id)
            const platformToChange = Form.platforms.filter((x) => x.id === filter.id)[0]
            if (checked) {
                setCheckboxes({
                    ...checkboxes,
                    platforms: [...checkboxes.platforms, value]
                })
                setForm({
                    ...Form,
                    platforms: [
                        ...filterState,
                        {
                            ...platformToChange,
                            platforms: [
                                ...platformToChange.platforms,
                                ...filter.platforms
                            ]
                        }
                    ]
                })
            } else {
                const filter = Form.platforms.filter((e) => e !== value)
                const filterCheckbox = checkboxes.platforms.filter((e) => e !== value)
                const filter2 = platformToChange.platforms.filter((e) => e.name !== value)
                setCheckboxes({
                    ...checkboxes,
                    platforms: [...filterCheckbox]
                })
                setForm({
                    ...Form,
                    platforms: [
                        ...filterState,
                        {
                            ...platformToChange,
                            platforms: [
                                ...filter2
                            ]
                        }
                    ]
                })
            }
        }

    }

    function handleGenresChange (e) {
        const {value, checked} = e.target;
        if (checked) {
            const filter = Genres.filter((e) => e.name === value)[0]
            setCheckboxes({
                ...checkboxes,
                genres: [
                    ...checkboxes.genres,
                    filter.name
                ]
            })
            setForm({
                ...Form,
                genres: [...Form.genres, filter]
            })
        } else {
            const filter = Form.genres.filter((e) => e.name !== value)
            setCheckboxes({
                ...checkboxes,
                genres: [
                    ...checkboxes.genres.filter((e) => e !== value)
                ]
            })
            setForm({
                ...Form,
                genres: [...filter]
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (isEmpty(errors)) {
            dispatch(postVideogame(Form))
            .then((data) => {
                //console.log(data, 'log Form after then')
                if (data === 201 || data === 200) {
                    alert('the Game has created in DB succesfull!');
                    setForm({
                            name: null,
                            background_image: "",
                            description: "",
                            platforms: [],
                            released: null,
                            rating: null,
                            genres: [],
                    })
                    setCheckboxes({
                            parent_platforms: [],
                            platforms: [],
                            genres: []
                    })
                }
                if (data === 406) {
                    alert('Error: Game name already exists in DB')
                }
            }).catch((error)=> {
                alert(`Unhandled event status ${error}`)
            })
        }
        
    }

    return (
        <FormStyle>
            <h1>Create Video Game</h1>
            <label>Name:</label>
                <input type='text' name='name' value={Form.name} onChange={handleChange}/>
                {errors.name && <ValidationStyle>{errors.name}</ValidationStyle>}
            <label>Image:</label>
                <input type='url' name='background_image' value={Form.background_image} onChange={handleChange}/>
                {errors.background_image && <ValidationStyle>{errors.background_image}</ValidationStyle>}
                {Form.background_image && <img src={Form.background_image} style={{width: '150px'}}alt='img'/>}
            <label>Description:</label>
                <textarea name='description' style={{width: '400px', height: '100px'}} value={Form.description} onChange={handleChange}/>
                {errors.description && <ValidationStyle>{errors.description}</ValidationStyle>}
            <label>Platforms:</label>
                <span className='platforms'>
                {Platforms.length > 0 && Platforms.map((e) => {return <span className='parent_platform' key={e.id}>
                        <p >{e.name}
                            <input type='checkbox' name='parent_platform' value={e.name} checked={checkboxes.parent_platforms.includes(e.name)} onChange={handlePlatformChange}/>
                        </p>
                            {checkboxes.parent_platforms.includes(e.name) && e.platforms.map((x) => {return <p className='platform'>{x.name}<input type='checkbox' value={x.name} name='platform' checked={checkboxes.platforms.includes(x.name)} onChange={handlePlatformChange}/></p>})}
                    </span>})}
                    {errors.parent_platforms && <ValidationStyle>{errors.parent_platforms}</ValidationStyle>}
                </span>
            <label>Released:</label>
                <input type='date' name='released' onChange={handleChange}/>
                {errors.released && <ValidationStyle>{errors.released}</ValidationStyle>}
            <label>Rating:</label> 
                <span className='rating'><input defaultValue='0' type='range' max={5} name='rating' onChange={handleChange}/> {Stars[Form.rating-1]}</span>
                {errors.rating && <ValidationStyle>{errors.rating}</ValidationStyle>}
            <label>Genres:</label>
                <span className='genres'>
                    {Genres.length > 0 && Genres.map((e) => {return <span className='genre' key={e.id}>
                    <p >{e.name}<input type='checkbox' value={e.name} checked={checkboxes.genres.includes(e.name)} onChange={handleGenresChange}/></p>
                    </span>})}
                </span>
                {errors.genres && <ValidationStyle>{errors.genres}</ValidationStyle>}
            <button onClick={handleSubmit}>Submit</button>
        </FormStyle>
    )
}