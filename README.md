# Formularios Dinamicos

Librería que genera un formulario con campos dinámicos, 
Prueba práctica para [walmeric](http://www.walmeric.com/).

## Descripción

Librería que genera un formulario con campos dinámicos

## Uso
    
    Incluir la libreria en el HTML como un script externo de javascript.

    ```
    <body>
        ...
        <script src="./formLibrary.js"></script>
    </body>
    ```

    ### Creación de un formulario

    1. Utilizar el método createForm disponible en el namespace FormBuilder del objeto window. 
        ```
        Ejemplo: 
        
        let result = window.FormBuilder.createForm([
            { type: "text", name: "nombre", id: "idText", required: false},
            { type: "email", name: "nombre", id: "idNombre", required: false},
            { type: "email", name: "correo", id: "idCorreo", required: true},
            { type: "number", name: "telefono", id: "idTelefono", required: false},
            { type: "text", name: "direccion", id: "idDireccion", required: false}])
        ```
    2. El resultado (result) es un objeto con acceso al elemento 
    ``` 
    <form> 
    ``` 

    ### Creación de varios formularios

    1. Utilizar el método createForms disponible en el namespace FormBuilder del objeto window, 
        con la finalidad de crear varios formularios con sus ids dinamicos incrementales. 
        ```
        Ejemplo: 

        let result = window.FormBuilder.createForm([
            { type: "text", name: "nombre", id: "idText", required: false},
            { type: "email", name: "nombre", id: "idNombre", required: false},
            { type: "email", name: "correo", id: "idCorreo", required: true},
            { type: "number", name: "telefono", id: "idTelefono", required: false},
            { type: "text", name: "direccion", id: "idDireccion", required: false}], 5)
        ```
    2. El resultado (result) es un arreglo de objetos con acceso a los elementos 
    ```
    <form>
    ```

# License 
[MIT](https://opensource.org/licenses/MIT)

