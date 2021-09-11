### [Heroku deploy](https://fcc-urlshortener-69.herokuapp.com/)

![image](https://user-images.githubusercontent.com/46557266/132952117-8588382b-ff6d-482a-a879-b6d0a7118539.png)

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
        "created_at": "2021-09-11T14:31:28.397Z",
        "url": "https://rainymood.com/",
        "shorturl": 3
    }
    ```
- **GET** → [`/api/shorturl/3`](https://fcc-urlshortener-69.herokuapp.com/api/shorturl/3)
