

export default class Validation { 

    strictStringValidation = (string) => {
        this.string = string;
        const stringCheck = /[a-zA-Z\s\D]$/;
        return stringCheck.test(string)
    }
    
    longTextValidation = (string) => {
        this.string = string;
        const stringCheck = /^[\w\d]+.+$/;
        return stringCheck.test(string)
    }

}

