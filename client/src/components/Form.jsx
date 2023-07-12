import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms } from '../redux/actions';
import { FormStyle } from './CSS/Form';

export default function Form() {

    const dispatch = useDispatch()
    const Genres = useSelector(state => state.Genres)
    const Platforms = useSelector(state => state.Platforms)

    React.useEffect(() => {
        if (!Genres) {
            dispatch(getGenres())
        }
        if(!Platforms) {
            dispatch(getPlatforms())
        }
    }, [dispatch])

    const [Form, setForm] = React.useState({
        name: null,
        background_image: null,
        description: null,
        platforms: [],
        released: null,
        rating: null,
        genres: []
    })

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setForm({
            ...Form,
            [name]: value
        })
        console.log(Form)
    }

    return (
        <FormStyle>
            <h1>Form component</h1>
            <label>Name: <input type='text' name='name' onChange={handleChange}/></label>
            <label>Image: <input type='url' name='background_image' onChange={handleChange}/></label>
            <label>Description: <textarea name='description' onChange={handleChange}/></label>
            <label>Platforms: {
                Platforms?.map((e) => {return <span key={e.id}>
                    <h5>{e.name}:</h5>
                    {e.platforms.map((x) => {return <p>{x.name}<input type='checkbox' name='platform'/></p>})}
                </span>})
                }
            </label>
        </FormStyle>
    )
}