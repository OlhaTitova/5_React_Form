export const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (!/[a-zA-Z]/.test(values.firstName)) {
        errors.firstName = 'Must be a text'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (!/[a-zA-Z]/.test(values.lastName)) {
        errors.lastName = 'Must be a text'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    }
    if (!values.deliveryAddress) {
        errors.deliveryAddress = 'Required'
    }
    if (!values.mobilePhone) {
        errors.mobilePhone = 'Required'
    } else if (!/^(\+?380)(\d+){9}$/.test(values.mobilePhone)) {
        errors.mobilePhone = 'Invalid mobile phone'
    }

    return errors
}

