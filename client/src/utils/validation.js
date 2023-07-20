const regexOnlyLetters = /^[a-zA-Z\s]+$/;//solo letras


export function validation(obj) {
    let errors={};
    if(!regexOnlyLetters.test(obj.name)){errors.name="Only letters"};
    if(!obj.name){errors.name="Obligatory Field"};

    if(obj.parent_platforms.length === 0){errors.parent_platforms="Select at least one parent platform"};
    if(obj.rating > 5 || obj.rating < 0 ){errors.rating="Only numbers from 0 to 5"};
    if(!obj.released){errors.released='Obligatory field'}

    if(obj.background_image.length<20){errors.background_image="invalid URL"}
    if(!obj.background_image){errors.background_image="Obligatory Field"};

    if(!obj.description){errors.description="Obligatory Field"};
    if(obj.description.length<30){errors.description="30 characters minimum"};

    if(obj.genres.length === 0) {errors.genres="Select at least one genre"};

    return errors;
}

