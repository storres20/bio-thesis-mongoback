# Bio Thesis's Mongo Backend

## Collection: Users

`Get all elements`

`GET` method

[https://doctorsmongo-back.vercel.app/api/v1/users](https://bio-thesis-mongoback.vercel.app/api/v1/users)

```json
[
    {
        "_id": "6679c2c28ec84482ed58ff20",
        "email": "health@example.com",
        "password": "password",
        "profile": "health",
        "__v": 0,
        "hospitals_id": {
            "_id": "6679e4ab12e4a6028cfb4032",
            "name": "hospital nacional docente madre niño - san bartolome",
            "__v": 0
        }
    },
    {
        "_id": "6679e04412e4a6028cfb4031",
        "password": "password",
        "email": "engineer@example.com",
        "profile": "engineer",
        "__v": 0,
        "hospitals_id": {
            "_id": "668ab48a276f480eb47e91f2",
            "name": "hospital lanfranco lahoz",
            "__v": 0
        }
    },
    {
        "_id": "667afbd80726d3132d0d18c1",
        "profile": "health",
        "email": "mario@example.com",
        "password": "password",
        "__v": 0,
        "hospitals_id": {
            "_id": "668aba7121a79aa914db57b4",
            "name": "hospital santa rosa",
            "__v": 0
        }
    }
]
```

`Get an element by ID`

`GET` method

[https://doctorsmongo-back.vercel.app/api/v1/users/647f61ad180318d17ba423df](https://bio-thesis-mongoback.vercel.app/api/v1/users/6679c2c28ec84482ed58ff20)

```json
{
    "_id": "6679c2c28ec84482ed58ff20",
    "email": "health@example.com",
    "password": "password",
    "profile": "health",
    "__v": 0,
    "hospitals_id": {
        "_id": "6679e4ab12e4a6028cfb4032",
        "name": "hospital nacional docente madre niño - san bartolome",
        "__v": 0
    }
}
```

## Collection: Inventories

`Get all elements`

`GET` method

[https://doctorsmongo-back.vercel.app/api/v1/doctors](https://bio-thesis-mongoback.vercel.app/api/v1/inventories)

```json
[
    {
        "_id": "6679c3de8ec84482ed58ff22",
        "name": "electrocardiografo",
        "brand": "general electric",
        "model": "ECG-3000",
        "serie": "995522ABC",
        "location": "ginecologia",
        "codepat": "5322446688506666",
        "show": "1",
        "__v": 0,
        "hospitals_id": {
            "_id": "668aba7121a79aa914db57b4",
            "name": "hospital santa rosa",
            "__v": 0
        }
    },
    {
        "_id": "66885d660de894c39202de76",
        "name": "tv",
        "brand": "samsung",
        "model": "a12",
        "serie": "123456",
        "location": "direccion general",
        "codepat": "5555554040404",
        "__v": 0,
        "show": "1",
        "hospitals_id": {
            "_id": "668aba7121a79aa914db57b4",
            "name": "hospital santa rosa",
            "__v": 0
        }
    },
    {
        "_id": "668875b80de894c39202de97",
        "name": "REFRIGERADOR",
        "brand": "lg",
        "model": "23",
        "serie": "123",
        "location": "nutricion",
        "codepat": "12312312312312",
        "__v": 0,
        "show": "1",
        "hospitals_id": {
            "_id": "668ab48a276f480eb47e91f2",
            "name": "hospital lanfranco lahoz",
            "__v": 0
        }
    },
    {
        "_id": "66887f550de894c39202dea8",
        "name": "computadora",
        "brand": "hyundai",
        "model": "cvbcccc",
        "serie": "cvb4433",
        "location": "mesa de partes",
        "codepat": "7878787878999999",
        "__v": 0,
        "show": "1",
        "hospitals_id": {
            "_id": "668ab48a276f480eb47e91f2",
            "name": "hospital lanfranco lahoz",
            "__v": 0
        }
    },
    {
        "_id": "6688a1459a60ee4af48f4c92",
        "name": "laptop",
        "brand": "apple",
        "model": "mac book pro",
        "serie": "999999",
        "location": "oficina de investigacion",
        "codepat": "999911121212747455",
        "show": "1",
        "__v": 0,
        "hospitals_id": {
            "_id": "6679e4ab12e4a6028cfb4032",
            "name": "hospital nacional docente madre niño - san bartolome",
            "__v": 0
        }
    },
    {
        "_id": "66918762c3e3b9b9dd1f8099",
        "name": "maquina de anestesia",
        "brand": "philips",
        "model": "opti-100",
        "serie": "ABC55667",
        "location": "sala de operaciones",
        "codepat": "5322777888",
        "show": "1",
        "hospitals_id": {
            "_id": "6679e4ab12e4a6028cfb4032",
            "name": "hospital nacional docente madre niño - san bartolome",
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "6693c64514ef1733122c3663",
        "name": "flujometro",
        "brand": "welch allyn",
        "model": "wel-99",
        "serie": "W-9911",
        "location": "consultora externa",
        "codepat": "5322669977",
        "show": "1",
        "hospitals_id": {
            "_id": "668aba7121a79aa914db57b4",
            "name": "hospital santa rosa",
            "__v": 0
        },
        "__v": 0
    }
]
```

`Get an element by ID`

`GET` method

[https://doctorsmongo-back.vercel.app/api/v1/doctors/647f6220180318d17ba423e1](https://bio-thesis-mongoback.vercel.app/api/v1/inventories/6679c3de8ec84482ed58ff22)

```json
{
    "_id": "6679c3de8ec84482ed58ff22",
    "name": "electrocardiografo",
    "brand": "general electric",
    "model": "ECG-3000",
    "serie": "995522ABC",
    "location": "ginecologia",
    "codepat": "5322446688506666",
    "show": "1",
    "__v": 0,
    "hospitals_id": "668aba7121a79aa914db57b4"
}
```

## Collection: Historials

`Get all elements`

`GET` method

[https://doctorsmongo-back.vercel.app/api/v1/appointments](https://bio-thesis-mongoback.vercel.app/api/v1/historials)

```json
[
    {
        "usersid_close": null,
        "_id": "6695d015a8015ca1cdc1d74d",
        "hospitals_id": "668aba7121a79aa914db57b4",
        "inventories_id": {
            "_id": "6693c64514ef1733122c3663",
            "name": "flujometro",
            "brand": "welch allyn",
            "model": "wel-99",
            "serie": "W-9911",
            "location": "consultora externa",
            "codepat": "5322669977",
            "show": "1",
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            },
            "__v": 0
        },
        "servicio": "medicina",
        "problema": "equipo no enciendo. suena chispas",
        "fecha_open": "15/07/2024, 20:42",
        "estado": "open",
        "usersid_open": {
            "_id": "667afbd80726d3132d0d18c1",
            "profile": "health",
            "email": "mario@example.com",
            "password": "password",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "fecha_close": "",
        "solucion": "",
        "__v": 0
    },
    {
        "usersid_close": null,
        "_id": "6696451940dc1e992439d37b",
        "hospitals_id": "668aba7121a79aa914db57b4",
        "inventories_id": {
            "_id": "66885d660de894c39202de76",
            "name": "tv",
            "brand": "samsung",
            "model": "a12",
            "serie": "123456",
            "location": "direccion general",
            "codepat": "5555554040404",
            "__v": 0,
            "show": "1",
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "servicio": "psicologia",
        "problema": "computadora no tiene cable de corriente",
        "fecha_open": "16/07/2024, 05:01",
        "estado": "open",
        "usersid_open": {
            "_id": "667afbd80726d3132d0d18c1",
            "profile": "health",
            "email": "mario@example.com",
            "password": "password",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "fecha_close": "",
        "solucion": "",
        "__v": 0
    },
    {
        "_id": "66964f0140dc1e992439dd27",
        "hospitals_id": "668aba7121a79aa914db57b4",
        "inventories_id": {
            "_id": "6693c64514ef1733122c3663",
            "name": "flujometro",
            "brand": "welch allyn",
            "model": "wel-99",
            "serie": "W-9911",
            "location": "consultora externa",
            "codepat": "5322669977",
            "show": "1",
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            },
            "__v": 0
        },
        "servicio": "consulta externa",
        "problema": "falta baterias",
        "fecha_open": "16/07/2024, 05:44",
        "estado": "close",
        "usersid_open": {
            "_id": "667afbd80726d3132d0d18c1",
            "profile": "health",
            "email": "mario@example.com",
            "password": "password",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "usersid_close": {
            "_id": "667afbd80726d3132d0d18c1",
            "profile": "health",
            "email": "mario@example.com",
            "password": "password",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "fecha_close": "16/07/2024, 06:20",
        "solucion": "se cambio por nuevas baterias",
        "__v": 0
    },
    {
        "_id": "669657e015bfc33dfeeeea85",
        "hospitals_id": "668aba7121a79aa914db57b4",
        "inventories_id": {
            "_id": "6679c3de8ec84482ed58ff22",
            "name": "electrocardiografo",
            "brand": "general electric",
            "model": "ECG-3000",
            "serie": "995522ABC",
            "location": "ginecologia",
            "codepat": "5322446688506666",
            "show": "1",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "servicio": "psicologia",
        "problema": "error E-444",
        "fecha_open": "16/07/2024, 06:22",
        "estado": "close",
        "usersid_open": {
            "_id": "667afbd80726d3132d0d18c1",
            "profile": "health",
            "email": "mario@example.com",
            "password": "password",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "usersid_close": {
            "_id": "667afbd80726d3132d0d18c1",
            "profile": "health",
            "email": "mario@example.com",
            "password": "password",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "fecha_close": "19/07/2024, 16:21",
        "solucion": "cambio de tarjeta principal. solucionado",
        "__v": 0
    },
    {
        "_id": "669aef496dc4c6194a02830a",
        "hospitals_id": "668aba7121a79aa914db57b4",
        "inventories_id": {
            "_id": "66885d660de894c39202de76",
            "name": "tv",
            "brand": "samsung",
            "model": "a12",
            "serie": "123456",
            "location": "direccion general",
            "codepat": "5555554040404",
            "__v": 0,
            "show": "1",
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "servicio": "secretaria",
        "problema": "imagen borrosa al encender por 10mins",
        "fecha_open": "19/07/2024, 17:57",
        "estado": "open",
        "usersid_open": {
            "_id": "667afbd80726d3132d0d18c1",
            "profile": "health",
            "email": "mario@example.com",
            "password": "password",
            "__v": 0,
            "hospitals_id": {
                "_id": "668aba7121a79aa914db57b4",
                "name": "hospital santa rosa",
                "__v": 0
            }
        },
        "usersid_close": null,
        "fecha_close": "",
        "solucion": "",
        "__v": 0
    }
]
```

`Get an element by ID`

`GET` method

[https://doctorsmongo-back.vercel.app/api/v1/appointments/64809c446a3dc900cea0049d](https://bio-thesis-mongoback.vercel.app/api/v1/historials/66964f0140dc1e992439dd27)

```json
{
    "_id": "66964f0140dc1e992439dd27",
    "hospitals_id": "668aba7121a79aa914db57b4",
    "inventories_id": {
        "_id": "6693c64514ef1733122c3663",
        "name": "flujometro",
        "brand": "welch allyn",
        "model": "wel-99",
        "serie": "W-9911",
        "location": "consultora externa",
        "codepat": "5322669977",
        "show": "1",
        "hospitals_id": {
            "_id": "668aba7121a79aa914db57b4",
            "name": "hospital santa rosa",
            "__v": 0
        },
        "__v": 0
    },
    "servicio": "consulta externa",
    "problema": "falta baterias",
    "fecha_open": "16/07/2024, 05:44",
    "estado": "close",
    "usersid_open": {
        "_id": "667afbd80726d3132d0d18c1",
        "profile": "health",
        "email": "mario@example.com",
        "password": "password",
        "__v": 0,
        "hospitals_id": {
            "_id": "668aba7121a79aa914db57b4",
            "name": "hospital santa rosa",
            "__v": 0
        }
    },
    "usersid_close": {
        "_id": "667afbd80726d3132d0d18c1",
        "profile": "health",
        "email": "mario@example.com",
        "password": "password",
        "__v": 0,
        "hospitals_id": {
            "_id": "668aba7121a79aa914db57b4",
            "name": "hospital santa rosa",
            "__v": 0
        }
    },
    "fecha_close": "16/07/2024, 06:20",
    "solucion": "se cambio por nuevas baterias",
    "__v": 0
}
```
