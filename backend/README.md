Heroku deploy

 1. heroku login
 2. git init
 3. git add .
 4. heroku create [name] (optional)
 5. create Procfile
 6. git remote -v
 7. git push heroku master
 8. add heroku postgres [ heroku addons:create heroku-postgresql:hobby-dev ]
    8.1 get db info [ heroku pg:credentials:url ]
 9. add enviroment variables
    8.1 heroku config:add [
        APP_KEY, 
        APP_NAME,
        APP_DEBUG, (TRUE, FALSE)
        APP_ENV, (PRODUCTION, DEVELOPMENT)
        DB_CONNECTION, (pgsql)
        DB_DATABASE,
        DB_HOST,
        DB_PASSWORD,
        DB_PORT,
        DB_USERNAME
        DATABASE_URL ( auto )
    ]
 10. run laravel migrations [ heroku run php artisan migrate ]
 11. have fun

