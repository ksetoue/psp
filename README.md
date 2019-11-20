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
