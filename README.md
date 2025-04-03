# Express App with dummy db service

## Run 
```bash
node server.js
```

## Routes

### Get all students
```bash
http://localhost:3000/api/students/getAllStudents
```

Returns:
```json
[
  {
    "id": "1",
    "nombre": "Juan",
    "matricula": "123456",
    "calificacion_final": 90,
    "deuda": 0
  },
  ...
]
```

### Get students with status
```bash
http://localhost:3000/api/students/getStudentsWithStatus
```

Returns:
```json
[
  {
    "matricula": "123456",
    "nombre": "Juan",
    "status": "Aprobado"
  },
  ...
]
```

## Test
With curl
```bash
curl -X GET http://localhost:3000/api/students/getAllStudents
```
