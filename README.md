# Welcome to Click Motto

A simple website built on Next.js with tailwind that fetches api from www.pexel.com and showcases dynamically.

## API Reference

#### Get items

```http
  GET https:///api.pexels.com/v1/search?query=${query}&per_page=40
```

| Parameter | Type     | Description                                                    |
| :-------- | :------- | :------------------------------------------------------------- |
| `api_key` | `string` | My API key is already exposed. I didn't set it to an env file. |

The reason for the api key to not kept secured is for you to test it out. Since Pexels doesn't have any valuable information.

## Acknowledgements

Thanks to Pexels for letting me use their api.

- [Pexels](https://www.pexels.com/photo/food-dinner-lunch-meal-4147875)

## Color Reference

| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Example Color | ![#0a192f](https://via.placeholder.com/10/fdba74?text=+) #fdba74 |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/1c1c1c?text=+) #1c1c1c |
| Example Color | ![#00b48a](https://via.placeholder.com/10/374151?text=+) #374151 |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/6b7280?text=+) #6b7280 |

## Tech Stack

**Client:** React, Nextjs, Typescript, TailwindCSS, MobX, MobX-react-lite, Slick-carousel,

## Demo

https://click-motto.vercel.app/
