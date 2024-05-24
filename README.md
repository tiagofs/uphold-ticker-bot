# Uphold Ticker Bot Assignment
A bot built in Node.js that provides timely alerts regarding price oscillations on a specific currency pair. 

## Install
This Node.js + PostgreSQL project was developed in a devcontainer to allow for a consistent and reproducible development environment.

The easiest way to get it up and running is by using the VSCode extension Dev Containers from Microsoft.

Once installed you can either open the project in the container by clicking the popup on the right or in the menu through the bottom left corner button. 
![image](https://github.com/tiagofs/uphold-ticker-bot/assets/20630774/d01b6440-e1e6-4882-9f06-ca4171ce0e24)

The .devcontainer/docker_postgres_init.sql file will be used in the container build process and create the required database tables.

If necessary, update the .env file with your own configurations. (If you want to fork this project make sure to track .env in .gitignore and add an .env.example with dummy config values in your repository instead.)

Once inside the container run:
```bash
$ npm install
$ npm run start
```

![image](https://github.com/tiagofs/uphold-ticker-bot/assets/20630774/839d9480-e0f5-4af1-8d55-6a34c66bd153)

Every alert is displayed in the console and saved in the PostgreSQL database:

![image](https://github.com/tiagofs/uphold-ticker-bot/assets/20630774/4ff29718-73d8-4047-93b0-bf5fcb04091b)


## Improvements/TODOs
- Add support for arguments such as multiple currency pairs.
- Implement Jest unit tests.
