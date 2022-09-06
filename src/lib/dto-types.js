// import {Type} from '@sinclair/typebox';

// export const idDTOSchema = Type.Strict({
//     format: 'uuid',
//     errorMessage: {
//         type: 'El tipode _id no es válido, debe ser un string',
//         format: 'El formato de _id no es válido debe ser un uuidv4'
//     }
// })

// export const nameDTOSchema = Type.Strict({
//     minLength: 2,
//     maxLength: 20,
//     errorMessage: {
//         minLength: 'El Nombre debe tener al menos 2 caracteres de longitud',
//         maxLength: 'El Nombre debe como máximo 20 caracteres de longitud'
//     }
// })

// export const surnameDTOSchema = Type.Strict({
//     minLength: 4,
//     maxLength: 50,
//     errorMessage: {
//         minLength: 'El Apellido debe tener al menos 4 caracteres de longitud',
//         maxLength: 'El Apellido debe como máximo 50 caracteres de longitud'
//     }
// })

// export const emailDTOSchema = Type.Strict({
//     format: 'email',
//     errorMessage: {
//         type: 'El tipo de correo no es válido, debe ser un string',
//         format: 'El formato de correo no es válido.'
//     }
// })

// export const passwordDTOSchema = Type.Strict({
//     format: 'password',
//     minLength: 7,
//     maxLength: 25,
//     errorMessage: {
//         type: 'El tipo de la Contraseña no es válido',
//         format: 'El formato de la Contraseña debe contener una Mayúscula, Minúscula y un Numero.',
//         minLength: 'La Contraseña debe contener al menos 7 caracteres de longitud',
//         maxLength: 'La Contraseña debe como máximo tener 25 caracteres de longitud'
//     }
// })

import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo de _id no es válido, debe ser un string',
        format: 'El formato de _id no es válido, debe ser un uuid4',
    },
});

export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'name debe tener al menos 2 caracteres de longitud',
        maxLength: 'name debe tener como máximo 20 caracteres de longitud',
    },
});

export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'surname debe tener al menos 4 caracteres de longitud',
        maxLength: 'surname debe tener como máximo 50 caracteres de longitud',
    },
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo del email no es válido, debe ser un string',
        format: 'El formato del email no es válido, debe cumplir el RFC 5322',
    },
});

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El tipo de la password no es válido, debe ser un string',
        format: 'El formato de la password, debe contener una mayúscula, una minúcula y un número',
        minLength: 'password debe tener al menos 10 caracteres de longitud',
        maxLength: 'password debe tener como máximo 25 caracteres de longitud',
    },
});
