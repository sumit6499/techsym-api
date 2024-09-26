
# Overview

The techsym-api is a backend API that powers an dkte's official techsymposis website backend. It provides functionality for managing and creating events techsym.




## Features

- Candidate profile and application management
- Event creation and listing
- Showing perks


## Documentation

[node.js](https://nodejs.org/en)

[Docker Docs](https://docs.docker.com/)

[AWS Docs](https://docs.aws.amazon.com/)

[Prisma](https://www.prisma.io/)




## Run Locally

Clone the project

#### npm

```bash
git clone https://github.com/sumit6499/techsym-api.git
```

Go to the project directory

```bash
  cd techsym-api
```

Install dependencies

```bash
   npm install
```

Configure the environment

- Create a .env file in the project root directory.
- Add the necessary environment variables (e.g., database connection, API keys).


build the typescript code

```bash
    npm run build
```

Start the server

```bash
    npm run start
```


#### pnpm

```bash
  git clone https://github.com/sumit6499/techsym-api.git
```

Go to the project directory

```bash
  cd techsym
```

Install dependencies

```bash
   pnpm install
```

Configure the environment

- Create a .env file in the project root directory.
- Add the necessary environment variables (e.g., database connection, API keys).

build the typescript code

```bash
    pnpm run build
```

Start the development server

```bash
    pnpm run dev
```

## Installation


Docker Installation

[Docker Installation Link](https://docs.docker.com/desktop/install/windows-install/)

Run via docker

```bash
  docker compose up
```


    
## Documentation

[node.js](https://nodejs.org/en)

[Docker Docs](https://docs.docker.com/)

[AWS Docs](https://docs.aws.amazon.com/)

[Prisma](https://www.prisma.io/)




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`='your_database_url'

`REDIS_URL`='your_redis_url'
## Deployment

### Manual Deployment

- To deploy this project AWS EC2
    
    1. Update Ec2 tools and softwares
    ```bash
    sudo apt get update && sudo apt upgrade -y
    ```

    2. Installation of git
    ```bash
    sudo apt-get install git
    ```

    3. Clone project repository
     ```bash
    git clone https://github.com/sumit6499/techsym-api.git
    cd project
    ```

    4. Install python and pip
     ```bash
    sudo apt-get install node.js
    sudo apt-get install npm
    ```

    5. Install dependencies
     ```bash
    npm install  
    ```

    6. Build app
     ```bash
    npm run build
    ```

    7. Start server
     ```bash
    npm start
    ```
    8. Configure security group
    - attach inbound traffic to port 3000 for tcp
    - allow traffic to route from anywhere

    
