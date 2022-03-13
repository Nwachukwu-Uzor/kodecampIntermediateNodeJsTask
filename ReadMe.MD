# About
Create a simple nodejs application with express and mongoose <br />
<br />
I create a simple message model with name, age and message properties using mongoose.
<br />
<br />
Using express, I create a simple RestFul CRUD API for the model

## Endpoints
-------------

### Create message

```
path: http://localhost:5000/messages

method: POST

Json payload: 
    {
        "name": "string creator name", 
        "age": "number person age",
        "message": "string message body"
    }

response:

    success:
        status: 201
        json: 
            {
                "message": "message created successfully", "data": "payload + id"
            }

    error:
        status: 400,
        json: 
            {
                "message": "Invalid message"
            }
```

### Get all messages

```
path: http://localhost:5000/messages
method: GET

response:

    success:
        status: 200
        json: 
            {
                data: [all messages]
            }
            
    error:
        status: 400,
        json: 
            {
                "message": "Not found"
            }
```

### Get a single messages

```
path: http://localhost:5000/messages/:id
method: GET

response:

    success:
        status: 200
        json: 
            {
                data: single message
            }
            
    error:
        status: 400,
        json: 
            {
                "message": "Invalid Message Id"
            }
```

### Update a message

```
path: http://localhost:5000/messages/:id
method: PATCH

response:

    success:
        status: 200
        json: 
            {
                "message": "update successful"
            }
            
    error:
        status: 401,
        json: 
            {
                "message": "Invalid Message Id"
            }
```

### Delete a message

```
path: http://localhost:5000/messages/:id
method: DELETE

response:

    success:
        status: 200
        json: 
            {
                "message": "message deleted successfully"
            }
            
    error:
        status: 401,
        json: 
            {
                "message": "Invalid Message Id"
            }
```