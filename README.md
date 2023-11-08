# Car Management

The application for manage the cars

## Database Design

https://dbdiagram.io/d/65478fca7d8bbd6465837c0c

## API Features

### CRUD Car

- #### Create Car
  [post] http://localhost:7000/api/v1/car

=> Request

```json
{
  "name": "Luxio",
  "price": 550000,
  "size": "Large",
  "picture": "pic luxio"
}
```

=> Response

```json
{
  "message": "Data berhasil disimpan",
  "data": {
    "id": "02d48533-f9ed-416c-84af-20d2941cfac4",
    "name": "Luxio",
    "price": 550000,
    "size": "Large",
    "picture": "pic luxio",
    "updated": "2023-11-05T12:54:51.037Z"
  }
}
```

- #### Update Car
  [put] http://localhost:7000/api/v1/car/:id

=> Request

```json
{
  "name": "Luxio",
  "price": 650000,
  "size": "Large",
  "picture": "pic luxio"
}
```

=> Response

```json
{
  "message": "Data berhasil disimpan",
  "data": {
    "id": "02d48533-f9ed-416c-84af-20d2941cfac4",
    "name": "Luxio",
    "price": "650000.00",
    "size": "Large",
    "picture": "pic luxio",
    "updated": "2023-11-05T12:59:28.240Z"
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
      "id": "75642a68-5e28-45bb-bb6d-df399d491638",
      "name": "Xenia",
      "price": "430000.00",
      "size": "Small",
      "picture": "pic1",
      "updated": "2023-11-05T06:02:58.355Z"
    },
    {
      "id": "774358bf-5e02-4715-83f2-20a8aae8a7bc",
      "name": "Toyota Alpahard",
      "price": "1000000.00",
      "size": "Large",
      "picture": "pic alphard",
      "updated": "2023-11-05T12:57:20.305Z"
    },
    {
      "id": "02d48533-f9ed-416c-84af-20d2941cfac4",
      "name": "Luxio",
      "price": "650000.00",
      "size": "Large",
      "picture": "pic luxio",
      "updated": "2023-11-05T12:59:28.240Z"
    }
  ]
}
```

#### Get Cars filtered by Size

[get] http://localhost:7000/api/v1/car?size=large

=> response

```json
{
  "message": "Berhasil mendapatkan data mobil",
  "data": [
    {
      "id": "774358bf-5e02-4715-83f2-20a8aae8a7bc",
      "name": "Toyota Alpahard",
      "price": "1000000.00",
      "size": "Large",
      "picture": "pic alphard",
      "updated": "2023-11-05T12:57:20.305Z"
    },
    {
      "id": "02d48533-f9ed-416c-84af-20d2941cfac4",
      "name": "Luxio",
      "price": "650000.00",
      "size": "Large",
      "picture": "pic luxio",
      "updated": "2023-11-05T12:59:28.240Z"
    }
  ]
}
```

#### Get Cars filtered by name

[get] http://localhost:7000/api/v1/car?name=xenia

=> response

```json
{
  "message": "Berhasil mendapatkan data mobil",
  "data": [
    {
      "id": "75642a68-5e28-45bb-bb6d-df399d491638",
      "name": "Xenia",
      "price": "430000.00",
      "size": "Small",
      "picture": "pic1",
      "updated": "2023-11-05T06:02:58.355Z"
    }
  ]
}
```

#### Get Cars filtered by size & name

[get] http://localhost:7000/api/v1/car?name=luxio&size=large

=> response

```json
{
  "message": "Berhasil mendapatkan data mobil",
  "data": [
    {
      "id": "02d48533-f9ed-416c-84af-20d2941cfac4",
      "name": "Luxio",
      "price": "650000.00",
      "size": "Large",
      "picture": "pic luxio",
      "updated": "2023-11-05T12:59:28.240Z"
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
