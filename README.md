### [Heroku deploy](https://fcc-urlshortener-69.herokuapp.com/)

![image](https://user-images.githubusercontent.com/46557266/132951004-665d4947-9576-4d69-a3d4-9b25d8293ab8.png)

### Endpoints

- **POST** → `/api/shorturtl` - create and return shorturl
- **GET** → `/api/shorturtl/:shorturtl` - redirect to original url
- **DELETE** → `/api/shorturč/:shorturl` - delete shorturl

### Example usage

- **POST** → [`/api/shorturl`](https://rainymood.com/)

    Body:
    ```json
    { "url": "https://fcc-urlshortener-69.herokuapp.com/" }
    ```

    Response:
    ```json
    {
        "created_at": "2021-09-11T14:13:42.150Z",
        "url": "https://rainymood.com/",
        "shorturl": 6
    }
    ```
- **GET** → [`/api/shorturl/6`](https://fcc-urlshortener-69.herokuapp.com/api/shorturl/6)
