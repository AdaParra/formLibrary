/**
*Asignando la clase FormBuilder a un namespace del objeto window
**/
window.FormBuilder = class FormBuilder{

    /*** 
    *createForm
    *   Recibe: 
    *       fields: Objeto con los siguientes parametros: 
    *       {    
    *           type : "text" // String. Tipos de input: text / number / email... 
    *           name : "phone" // String. Atributo "name" del campo
    *           id: "campo_telefono" // String. Id del elemento: #id
    *           required : true // Bool. SI el campo es requerido: true | false
    *       }
    *       callback: funcion defenida por el usuario
    ***/
    static createForm(fields, callback){

        let inputs = this.createInputs(fields)
        let form = document.createElement('form') 
        
        inputs.forEach(function(input){
            form.appendChild(input) 
        })

        if(callback != undefined) {
            callback()
        }

        return form
    }

    /***
    * Inicio createInputs
    ***/

    static createInputs(fields){

        /**
        * validField: Objetos validados
        **/
        const validFields = fields.filter(function(field){
            
            /**Si algún objeto posee uno de los parámetros undefine
            *  ó no es del tipo definido se descarta.  
            **/
            if (field.type !== undefined && typeof field.type == 'string' &&
                field.name !== undefined && typeof field.name == 'string' &&
                field.id !== undefined && typeof field.id == 'string' &&
                field.required !== undefined && typeof field.required == 'boolean'){
                
                return field
            }else{
                console.log("Parámetro(s) incorrecto(s): ", field)
            }
        })

        let inputs = validFields.map(function(field, index){ 
        /**
        * Por cada objeto de validFields, retorna un <input> 
        **/
            let input = document.createElement('input')
                input.setAttribute('type', field.type)
                input.setAttribute('name', field.name)
                input.setAttribute('id', field.id)
                input.setAttribute('required', field.required)

                return input 
        
        })
        return inputs
    }


    /***
    * Inicio createForms
    * quantity: cantidad de dormularios a generar
    ***/

    static createForms(fields, quantity, callback){

        let dinamicFields 
        let forms = []

        for(let i = 0; i < quantity; i++){
            /***
            *Generando los ids dinamicos
            ***/
            dinamicFields = fields.map(function(field){
                let newField = Object.assign({}, field)
                newField.id = newField.id + "-" + i

                return newField
            })

            forms.push(this.createForm(dinamicFields))
        }

        if(callback != undefined) {
            callback()
        }

        return forms

    }
    /***
    * Fin createForms
    * retorna los objetos form con los campos dinamicos 
    * y los ids dinamicos incrementales. 
    ***/
}

