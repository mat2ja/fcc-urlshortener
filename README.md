# [URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)



### [Heroku deploy](https://timestamp-service-freecodecamp.herokuapp.com/)

![image](https://user-images.githubusercontent.com/46557266/132124405-881f168b-1c65-4337-84f9-fc3ae4fa679c.png)


### Endpoints

- `/api` - get current date
- `/api/:unix_timestamp` - get by unix timestamp
- `/api/:date` - get by date string ('YYYY-MM-DD')

### Example usage

- [`/api`](https://timestamp-service-freecodecamp.herokuapp.com/api)
- [`/api/1608854400000`](https://timestamp-service-freecodecamp.herokuapp.com/api/1608854400000)
- [`/api/2020-12-25`](https://timestamp-service-freecodecamp.herokuapp.com/api/2020-12-25)

### Example output

```json
{
    "unix": 1608854400000, 
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```