# payment-service-provider
Payment Service Provider (PSP)

Challenge reference can be found [here](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend). 

## Architecture 

This project was build considering Clean Architecture as a reference design tecnique. Hence folder structure and file separation, that tries to separate application logic from business logic, and group files according to their domain. 
This first version has a shared database between entities all entities related to transactions, but, as the application grow, the idea is move payables and clients to individual APIs. This approach ensures that, as the application grows, scalabity becames less problematic. 


[Detailed design of the current architecture can be found here](https://github.com/ksetoue/payment-service-provider/blob/master/resources/architecture.png).

## Setup

1. Setup `.env`:
```
$ cp .env.example .env
```

2. Set up the containers: 
```
$ docker-compose up -d paymentservice
```

3. Configure Migrations and Seeders:
```
$ docker exec -it <your application container> bash 

$ ./dbconfig.sh

# exit 
```

All set :) 

## API

For all endpoints, you MUST set a clientId. Check the postman file on this repo, to preset postman.


### `[GET] /transactions`

Returns a list of transactions.

**Query Params**

| Name | Type | Description | Example |
|------|------|-------------|---------|
| page | int | Page number  | `1` |
| pageSize | int | Items per page  | `5` |

**Response**

```json
{
    "transactions": [
        {
            "id": 1,
            "clientId": 1,
            "paymentMethod": "credit",
            "cardNumberLastDigits": "4879",
            "cardOwnerName": "Nelson Bagetti",
            "cardExpirationDate": "06/21",
            "amount": 100,
            "description": "Pied Piper Coin",
            "createdAt": "2019-11-20T09:45:02.050Z"
        },
        ...
    ]
}
```

### `[POST] /transactions`

Processing/create a transaction.

**Body Params**
```json
{
    "amount": 900.00,
    "paymentMethod": "debit",
    "cardNumber": "4111111111111111",
    "cardOwnerName": "Richard Hendricks",
    "cardExpirationDate": "06/21",
    "description": "Pied Piper Coin",
    "cvv": 737
}
```
**Response**

```json
{
    "transaction": {
        "id": 5,
        "clientId": 2,
        "paymentMethod": "debit",
        "amount": 900,
        "cardNumberLastDigits": "1111",
        "cardOwnerName": "Richard Hendricks",
        "cardExpirationDate": "06/21",
        "description": "Pied Piper Coin",
        "createdAt": "2019-11-20T10:20:45.077Z",
        "deletedAt": null
    }
}
```
**Body params**
```json
{
    "amount": 300.00,
    "paymentMethod": "credit",
    "cardNumber": "4111111111111111",
    "cardOwnerName": "Nelson Bagetti",
    "cardExpirationDate": "06/21",
    "description": "Pied Piper Coin",
    "cvv": 737
}
```
**Response**
```json
{
    "transaction": {
        "id": 2,
        "clientId": 1,
        "paymentMethod": "credit",
        "amount": 300,
        "cardNumberLastDigits": "1111",
        "cardOwnerName": "Nelson Bagetti",
        "cardExpirationDate": "06/21",
        "description": "Pied Piper Coin",
        "createdAt": "2019-11-20T09:45:14.769Z",
        "deletedAt": null
    }
}
```

# Payables

### `[GET] /payables`

Returns the client's payables.

**Response**

```json
{
    "available": 1164,
    "waiting_funds": 1140
}
```

