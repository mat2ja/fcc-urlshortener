### [Heroku deploy](https://fcc-urlshortener-69.herokuapp.com/)

![image](https://user-images.githubusercontent.com/46557266/132952452-424821a9-b61b-4153-b518-d43ab0f6a338.png)

### Endpoints

- **POST** → `/api/shorturtl` - create and return shorturl
- **GET** → `/api/shorturtl/:shorturtl` - redirect to original url
- **DELETE** → `/api/shorturl/:shorturl` - delete shorturl

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
        "original_url": "https://rainymood.com/",
        "short_turl": 3
    }
    ```
- **GET** → [`/api/shorturl/3`](https://fcc-urlshortener-69.herokuapp.com/api/shorturl/3)
