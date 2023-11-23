# Car Management

The application for manage the cars

## Database Design

https://dbdiagram.io/d/65478fca7d8bbd6465837c0c

## SuperAdmin Account
- email: superadmin@email.com
- password: superadmin123/

## API Docs Link
http://localhost:7000/api-docs

## API Features

### Car Type

- #### Create Car Type
  [post] http://localhost:7000/api/v1/car-type

  => Request 
  ```json
  {
    "name": "Truck"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil membuat data tipe mobil",
    "data": {
        "name": "Truck",
        "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4"
    }
  }
  ```

- #### Get all Car Type
  [get] http://localhost:7000/api/v1/car-type

  => Response
  ```json
  {
    "message": "Berhasil mendapatkan data tipe mobil",
    "data": [
        {
            "id": "8e3386be-633a-4a5b-89e0-21a4ec7ad642",
            "name": "Sport Utility Vehicle (SUV)"
        },
        {
            "id": "00c81856-23b9-4f9c-96ef-e43db00cf099",
            "name": "Multi Purpose Vehicle (MPV)"
        },
        {
            "id": "88cddf3e-024d-4b0e-a181-5b90196364eb",
            "name": "Sedan"
        },
        {
            "id": "a36863c8-00d5-4c32-bae3-4ef8b13292d1",
            "name": "Wagon"
        },
        {
            "id": "9a626f5a-a491-47b4-afd3-d92b73432374",
            "name": "Hatchback"
        },
        {
            "id": "c1c16f3c-aff9-4b1e-b8da-0cc4401cc5b8",
            "name": "Coupe"
        },
        {
            "id": "e1ecab2b-56b4-445e-b07f-2135028ae3cd",
            "name": "City Car"
        },
        {
            "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
            "name": "Convertible "
        },
        {
            "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "name": "Crossover"
        },
        {
            "id": "ff8d8f18-9f79-4a28-8514-813f0698c805",
            "name": "Microcar"
        },
        {
            "id": "2d450a45-aa2d-4ba6-91f3-b9a88879e912",
            "name": "Pikap"
        },
        {
            "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4",
            "name": "Truck"
        }
    ]
  }
  ```

- #### Get Car Type by id 
  [get] http://localhost:7000/api/v1/car-type/9f9968f5-8209-46aa-89f6-91c4d7e904b4

  => Response 
  ```json
  {
    "message": "Berhasil mendapatkan data tipe mobil",
    "data": {
        "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4",
        "name": "Truck"
    }
  }
  ```

- #### Update Car Type 
  [put] http://localhost:7000/api/v1/car-type/9f9968f5-8209-46aa-89f6-91c4d7e904b4

  => Request 
  ```json
  {
    "name": "Truck Update"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil memperbarui data tipe mobil",
    "data": {
        "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4",
        "name": "Truck Update"
    }
  }
  ```

### Car Brand

- #### Create Car Brand
  [post] http://localhost:7000/api/v1/car-brand

  => Request 
  ```json
  {
    "name": "Wuling"
  }
  ```

  => Response 
  ```json
  {
    "message": "Berhasil membuat data brand mobil",
    "data": {
        "name": "Wuling",
        "id": "34e5b93a-ea06-40bc-95e7-926bb477a825"
    }
  }
  ```


- #### Get All Car Brand
  [get] http://localhost:7000/api/v1/car-brand

  => Response 
  ```json
  {
    "message": "Berhasil mendapatkan data brand mobil",
    "data": [
        {
            "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "name": "Toyota"
        },
        {
            "id": "64588529-731f-4353-8720-17690f69996a",
            "name": "Honda"
        },
        {
            "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "name": "Suzuki"
        },
        {
            "id": "34e5b93a-ea06-40bc-95e7-926bb477a825",
            "name": "Wuling"
        }
    ]
  }
  ```

- #### Get Car Brand by Id
  [get] http://localhost:7000/api/v1/car-brand/34e5b93a-ea06-40bc-95e7-926bb477a825

  => Response
  ```json
  {
    "message": "Berhasil mendapatkan data brand mobil",
    "data": {
        "id": "34e5b93a-ea06-40bc-95e7-926bb477a825",
        "name": "Wuling"
    }
  }
  ```

- #### Update Car Brand
  [put] http://localhost:7000/api/v1/car-brand/34e5b93a-ea06-40bc-95e7-926bb477a825

  => Request 
  ```json
  {
    "name": "Wuling Updated"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil memperbarui data brand mobil",
    "data": {
        "id": "34e5b93a-ea06-40bc-95e7-926bb477a825",
        "name": "Wuling Updated"
    }
  }
  ```

### Car Transmission

- #### Create Car Transmission
  [post] http://localhost:7000/api/v1/car-transmission

  => Request 
  ```json
  {
    "name": "Matic"
  }
  ```

  => Response 
  ```json
  {
    "message": "Berhasil membuat mobil",
    "data": {
        "name": "Matic",
        "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc"
    }
  }
  ```


- #### Get All Car Transmission
  [get] http://localhost:7000/api/v1/car-transmission

  => Response 
  ```json
  {
    "message": "Berhasil mendapatkan data transmission",
    "data": [
        {
            "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "name": "Manual"
        },
        {
            "id": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
            "name": "Automatic"
        },
        {
            "id": "ec69c821-aa1a-4fbf-9b2d-da6af948bab5",
            "name": "Transmisi Dual Clutch (DCT)"
        },
        {
            "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc",
            "name": "Matic"
        }
    ]
  }
  ```

- #### Get Car Transmission by Id
  [get] http://localhost:7000/api/v1/car-transmission/6b096cc9-7ff3-4994-b6aa-47f786c9a1cc

  => Response
  ```json
  {
    "message": "Berhasil mendapatkan data transmission",
    "data": {
        "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc",
        "name": "Matic"
    }
  }
  ```

- #### Update Car Transmission
  [put] http://localhost:7000/api/v1/car-transmission/6b096cc9-7ff3-4994-b6aa-47f786c9a1cc

  => Request 
  ```json
  {
    "name": "Matic Updated"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil memperbarui data transmission",
    "data": {
        "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc",
        "name": "Matic Updated"
    }
  }
  ```


### CRUD Car

- #### Create Car
  [post] http://localhost:7000/api/v1/car

=> Request

```json
{
    "name": "Toyota Avanza",
    "price": 300000,
    "year": 2020,
    "size": "Medium",
    "availability": true,
    "available_at": "2023-11-09T14:00:00",
    "capacity": 6,
    "description": "Avanza new car",
    "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
    "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
    "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
    "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08"
}
```

=> Response

```json
{
    "message": "Data berhasil disimpan",
    "data": {
        "name": "Toyota Avanza",
        "price": 300000,
        "size": "Medium",
        "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
        "year": 2020,
        "availability": true,
        "capacity": 6,
        "description": "Avanza new car",
        "available_at": "2023-11-09T14:00:00",
        "updated_at": "2023-11-09T14:25:02.969Z",
        "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
        "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
        "id": "7212a1f8-ef58-4806-83f6-2c57f3659a11"
    }
}
```

- #### Update Car
  [put] http://localhost:7000/api/v1/car/:id

=> Request

```json
{
    "name": "Toyota Avanza New",
    "price": 320000,
    "year": 2019,
    "size": "Large",
    "availability": true,
    // "available_at": "2023-11-09T14:00:00",
    "capacity": 6,
    "description": "Avanza new car and updated",
    "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
    "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
    "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
    "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08"
}
```

=> Response

```json
{
    "message": "Data berhasil disimpan",
    "data": {
        "id": "7212a1f8-ef58-4806-83f6-2c57f3659a11",
        "name": "Toyota Avanza New",
        "price": "320000.00",
        "year": 2019,
        "size": "Large",
        "availability": true,
        "capacity": 6,
        "description": "Avanza new car and updated",
        "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
        "available_at": "2023-11-09T07:00:00.000Z",
        "updated_at": "2023-11-09T14:33:18.922Z",
        "is_deleted": false,
        "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
        "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
        "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "carType": {
            "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "name": "Crossover"
        },
        "carBrand": {
            "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "name": "Toyota"
        },
        "carTransmission": {
            "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "name": "Manual"
        }
    }
}
```

#### Get All Cars

[get] http://localhost:7000/api/v1/car

=> Response

```json
{
    "message": "Berhasil mendapatkan data mobil",
    "data": [
        {
            "id": "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
            "name": "Toyota Alphard",
            "price": "1000000.00",
            "year": 2023,
            "size": "Large",
            "availability": true,
            "capacity": 8,
            "description": "Large and elegant car",
            "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "availableAt": "2023-11-17T16:31:22.010Z",
            "createdAt": "2023-11-17T16:31:22.010Z",
            "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
            "updatedAt": "2023-11-17T16:31:22.010Z",
            "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
            "isDeleted": false,
            "deletedAt": null,
            "deletedById": null,
            "carBrandId": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "carTypeId": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
            "carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                "name": "Toyota"
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "deletedBy": null,
            "carType": {
                "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
                "name": "Convertible "
            },
            "createdBy": {
                "id": "1cb69048-68be-474a-bef8-bff01052615c",
                "fullName": "Super Admin",
                "username": "superadmin"
            },
            "updatedBy": {
                "id": "1cb69048-68be-474a-bef8-bff01052615c",
                "fullName": "Super Admin",
                "username": "superadmin"
            }
        },
        {
            "id": "64588529-731f-4353-8720-17690f69996a",
            "name": "Honda Brio",
            "price": "250000.00",
            "year": 2020,
            "size": "Small",
            "availability": true,
            "capacity": 5,
            "description": "small car",
            "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "availableAt": "2023-11-17T16:31:22.010Z",
            "createdAt": "2023-11-17T16:31:22.010Z",
            "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
            "updatedAt": "2023-11-17T16:31:22.010Z",
            "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
            "isDeleted": false,
            "deletedAt": null,
            "deletedById": null,
            "carBrandId": "64588529-731f-4353-8720-17690f69996a",
            "carTypeId": "ff8d8f18-9f79-4a28-8514-813f0698c805",
            "carTransmissionId": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
            "carBrand": {
                "id": "64588529-731f-4353-8720-17690f69996a",
                "name": "Honda"
            },
            "carTransmission": {
                "id": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
                "name": "Automatic"
            },
            "deletedBy": null,
            "carType": {
                "id": "ff8d8f18-9f79-4a28-8514-813f0698c805",
                "name": "Microcar"
            },
            "createdBy": {
                "id": "1cb69048-68be-474a-bef8-bff01052615c",
                "fullName": "Super Admin",
                "username": "superadmin"
            },
            "updatedBy": {
                "id": "1cb69048-68be-474a-bef8-bff01052615c",
                "fullName": "Super Admin",
                "username": "superadmin"
            }
        },
        {
            "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "name": "Suzuki Ertiga",
            "price": "350000.00",
            "year": 2022,
            "size": "Medium",
            "availability": true,
            "capacity": 5,
            "description": "Medium car",
            "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "availableAt": "2023-11-17T16:31:22.010Z",
            "createdAt": "2023-11-17T16:31:22.010Z",
            "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
            "updatedAt": "2023-11-17T16:31:22.010Z",
            "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
            "isDeleted": false,
            "deletedAt": null,
            "deletedById": null,
            "carBrandId": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "carTypeId": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
                "name": "Suzuki"
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "deletedBy": null,
            "carType": {
                "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
                "name": "Crossover"
            },
            "createdBy": {
                "id": "1cb69048-68be-474a-bef8-bff01052615c",
                "fullName": "Super Admin",
                "username": "superadmin"
            },
            "updatedBy": {
                "id": "1cb69048-68be-474a-bef8-bff01052615c",
                "fullName": "Super Admin",
                "username": "superadmin"
            }
        }
    ]
}
```

#### Get Cars filtered by Size

[get] http://localhost:7000/api/v1/car?size=medium

=> response

```json
{
  "message": "Berhasil mendapatkan data mobil",
  "data": [
    {
      "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
      "name": "Suzuki Ertiga",
      "price": "350000.00",
      "year": 2022,
      "size": "Medium",
      "availability": true,
      "capacity": 5,
      "description": "Medium car",
      "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      "availableAt": "2023-11-17T16:31:22.010Z",
      "createdAt": "2023-11-17T16:31:22.010Z",
      "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
      "updatedAt": "2023-11-17T16:31:22.010Z",
      "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
      "isDeleted": false,
      "deletedAt": null,
      "deletedById": null,
      "carBrandId": "72e15674-521d-4dd1-a8ef-4e7773954e23",
      "carTypeId": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
      "carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
      "carBrand": {
        "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
        "name": "Suzuki"
      },
      "carTransmission": {
        "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "name": "Manual"
      },
      "deletedBy": null,
      "carType": {
        "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
        "name": "Crossover"
      },
      "createdBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      },
      "updatedBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      }
    }
  ]
}
```

#### Get Cars filtered by name

[get] http://localhost:7000/api/v1/car?name=toyota

=> response

```json
{
  "message": "Berhasil mendapatkan data mobil",
  "data": [
    {
      "id": "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
      "name": "Toyota Alphard",
      "price": "1000000.00",
      "year": 2023,
      "size": "Large",
      "availability": true,
      "capacity": 8,
      "description": "Large and elegant car",
      "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      "availableAt": "2023-11-17T16:31:22.010Z",
      "createdAt": "2023-11-17T16:31:22.010Z",
      "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
      "updatedAt": "2023-11-17T16:31:22.010Z",
      "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
      "isDeleted": false,
      "deletedAt": null,
      "deletedById": null,
      "carBrandId": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
      "carTypeId": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
      "carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
      "carBrand": {
        "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
        "name": "Toyota"
      },
      "carTransmission": {
        "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "name": "Manual"
      },
      "deletedBy": null,
      "carType": {
        "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
        "name": "Convertible "
      },
      "createdBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      },
      "updatedBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      }
    }
  ]
}
```

#### Get Cars filtered by availability

[get] http://localhost:7000/api/v1/car?availability=true

=> response

```json
{
  "message": "Berhasil mendapatkan data mobil",
  "data": [
    {
      "id": "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
      "name": "Toyota Alphard",
      "price": "1000000.00",
      "year": 2023,
      "size": "Large",
      "availability": true,
      "capacity": 8,
      "description": "Large and elegant car",
      "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      "availableAt": "2023-11-17T16:31:22.010Z",
      "createdAt": "2023-11-17T16:31:22.010Z",
      "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
      "updatedAt": "2023-11-17T16:31:22.010Z",
      "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
      "isDeleted": false,
      "deletedAt": null,
      "deletedById": null,
      "carBrandId": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
      "carTypeId": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
      "carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
      "carBrand": {
        "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
        "name": "Toyota"
      },
      "carTransmission": {
        "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "name": "Manual"
      },
      "deletedBy": null,
      "carType": {
        "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
        "name": "Convertible "
      },
      "createdBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      },
      "updatedBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      }
    },
    {
      "id": "64588529-731f-4353-8720-17690f69996a",
      "name": "Honda Brio",
      "price": "250000.00",
      "year": 2020,
      "size": "Small",
      "availability": true,
      "capacity": 5,
      "description": "small car",
      "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      "availableAt": "2023-11-17T16:31:22.010Z",
      "createdAt": "2023-11-17T16:31:22.010Z",
      "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
      "updatedAt": "2023-11-17T16:31:22.010Z",
      "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
      "isDeleted": false,
      "deletedAt": null,
      "deletedById": null,
      "carBrandId": "64588529-731f-4353-8720-17690f69996a",
      "carTypeId": "ff8d8f18-9f79-4a28-8514-813f0698c805",
      "carTransmissionId": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
      "carBrand": {
        "id": "64588529-731f-4353-8720-17690f69996a",
        "name": "Honda"
      },
      "carTransmission": {
        "id": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
        "name": "Automatic"
      },
      "deletedBy": null,
      "carType": {
        "id": "ff8d8f18-9f79-4a28-8514-813f0698c805",
        "name": "Microcar"
      },
      "createdBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      },
      "updatedBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      }
    },
    {
      "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
      "name": "Suzuki Ertiga",
      "price": "350000.00",
      "year": 2022,
      "size": "Medium",
      "availability": true,
      "capacity": 5,
      "description": "Medium car",
      "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      "availableAt": "2023-11-17T16:31:22.010Z",
      "createdAt": "2023-11-17T16:31:22.010Z",
      "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
      "updatedAt": "2023-11-17T16:31:22.010Z",
      "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
      "isDeleted": false,
      "deletedAt": null,
      "deletedById": null,
      "carBrandId": "72e15674-521d-4dd1-a8ef-4e7773954e23",
      "carTypeId": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
      "carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
      "carBrand": {
        "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
        "name": "Suzuki"
      },
      "carTransmission": {
        "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "name": "Manual"
      },
      "deletedBy": null,
      "carType": {
        "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
        "name": "Crossover"
      },
      "createdBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      },
      "updatedBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      }
    }
  ]
}
```

#### Get Cars filtered by size & name & availability

[get] http://localhost:7000/api/v1/car?name=suzuki&size=medium&availability=true

=> response

```json
{
  "message": "Berhasil mendapatkan data mobil",
  "data": [
    {
      "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
      "name": "Suzuki Ertiga",
      "price": "350000.00",
      "year": 2022,
      "size": "Medium",
      "availability": true,
      "capacity": 5,
      "description": "Medium car",
      "pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      "availableAt": "2023-11-17T16:31:22.010Z",
      "createdAt": "2023-11-17T16:31:22.010Z",
      "createdById": "1cb69048-68be-474a-bef8-bff01052615c",
      "updatedAt": "2023-11-17T16:31:22.010Z",
      "updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
      "isDeleted": false,
      "deletedAt": null,
      "deletedById": null,
      "carBrandId": "72e15674-521d-4dd1-a8ef-4e7773954e23",
      "carTypeId": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
      "carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
      "carType": {
        "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
        "name": "Crossover"
      },
      "createdBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      },
      "deletedBy": null,
      "carBrand": {
        "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
        "name": "Suzuki"
      },
      "carTransmission": {
        "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "name": "Manual"
      },
      "updatedBy": {
        "id": "1cb69048-68be-474a-bef8-bff01052615c",
        "fullName": "Super Admin",
        "username": "superadmin"
      }
    }
  ]
}
```
#### Delete Car

[delete] http://localhost:7000/api/v1/car/774358bf-5e02-4715-83f2-20a8aae8a7bc

=> Response

```json
{
  "message": "Data berhasil dihapus"
}
```

#### Upload Photo

[post] http://localhost:7000/api/v1/photo/upload
=> Request

```json
form-data:
key: picture
value: photo file
```

=> Response

```json
{
  "message": "Upload success",
  "url": "https://res.cloudinary.com/do5gw4vcx/image/upload/v1699175182/e0aotiuguzv69wdx12xc.png",
}
```
#### Get Car Log
[get] http://localhost:7000/api/v1/car-log

=> Response

```json
{
    "message": "Berhasil mendapatkan data car log",
    "data": [
        {
            "id": "56eadb08-6483-4a14-9587-cb7e33369e75",
            "action": "Create",
            "accountId": "742e7a25-f903-4a59-9a67-5139fde6c6f4",
            "carId": "973a78d5-61cb-4539-bcea-3eeca840aaae",
            "date": "2023-11-18T14:43:08.274Z",
            "account": {
                "id": "742e7a25-f903-4a59-9a67-5139fde6c6f4",
                "fullName": "Admin 1",
                "username": "admin1",
                "email": "admin1@email.com",
                "roleId": "2"
            },
            "car": {
                "id": "973a78d5-61cb-4539-bcea-3eeca840aaae",
                "name": "Cek 3",
                "price": "300000.00",
                "year": 2020,
                "capacity": 6
            }
        },
        {
            "id": "b9cb81b8-4bb0-4fb1-ba6a-bd6f7149ac89",
            "action": "Delete",
            "accountId": "742e7a25-f903-4a59-9a67-5139fde6c6f4",
            "carId": "973a78d5-61cb-4539-bcea-3eeca840aaae",
            "date": "2023-11-18T14:48:34.623Z",
            "account": {
                "id": "742e7a25-f903-4a59-9a67-5139fde6c6f4",
                "fullName": "Admin 1",
                "username": "admin1",
                "email": "admin1@email.com",
                "roleId": "2"
            },
            "car": {
                "id": "973a78d5-61cb-4539-bcea-3eeca840aaae",
                "name": "Cek 3",
                "price": "300000.00",
                "year": 2020,
                "capacity": 6
            }
        }
    ]
}
```
### Auth 
  #### Login
[post] http://localhost:7000/api/v1/auth/login
  => Request 
  ```json
{
    "email": "superadmin",
    "password": "superadmin123/"
}
  ```

=> Response
```json
{
    "message": "Berhasil login",
    "data": {
        "email": "superadmin@email.com",
        "role": "SuperAdmin",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InN1cGVyYWRtaW5AZW1haWwuY29tIiwiVXNlck5hbWUiOiJzdXBlcmFkbWluIiwiUm9sZSI6IlN1cGVyQWRtaW4iLCJSb2xlSWQiOiIxIiwiQWNjb3VudElkIjoiMWNiNjkwNDgtNjhiZS00NzRhLWJlZjgtYmZmMDEwNTI2MTVjIiwiaWF0IjoxNzAwNTIwNDg4LCJleHAiOjE3MDA2MDY4ODgsImlzcyI6IkZhZGhsaWgifQ.QnWyAgaB-dUU0lwASEJrN57ymAz7oGx9IE3qQ88sQRc"
    }
}
```

#### Register Member
[post] http://localhost:7000/api/v1/auth/register-customer

=> Request
```json
{
    "fullName": "Fadhlih",
    "address": "Bekasi",
    "phone": "0897322332",
    "birthDate": "2000-11-17",
    "username": "fadhlih",
    "email": "fadhlih@email.com",
    "password": "customer123/",
    "pictureUrl": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
}
```

=> Response
```json
{
    "message": "Berhasil registrasi customer",
    "data": {
        "id": "7a67cac2-3cda-4a17-b967-1e5c342a3e49",
        "fullName": "Fadhlih",
        "address": "Bekasi",
        "phone": "0897322332",
        "birthDate": "2000-11-17T07:00:00.000Z",
        "createdAt": "2023-11-21T05:49:11.186Z",
        "username": "fadhlih",
        "email": "fadhlih@email.com",
        "password": "-",
        "pictureUrl": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        "roleId": "3"
    }
}
```

#### Register admin account
[post] http://localhost:7000/api/v1/auth/register-admin

=> Request
```json
{
    "fullName": "Admin 2",
    "address": "Bekasi",
    "phone": "089732382232",
    "birthDate": "2000-11-20",
    "username": "admin2",
    "email": "admin2@email.com",
    "password": "admin123/",
    "pictureUrl": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
}
```

=> Response
```json
{
    "message": "Berhasil membuat akun admin",
    "data": {
        "id": "b261daf0-120c-4868-9b4b-11aa51a3fcc5",
        "fullName": "Admin 2",
        "address": "Bekasi",
        "phone": "089732382232",
        "birthDate": "2000-11-20T07:00:00.000Z",
        "createdAt": "2023-11-21T05:51:15.545Z",
        "username": "admin2",
        "email": "admin2@email.com",
        "password": "-",
        "pictureUrl": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        "roleId": "2"
    }
}
```
