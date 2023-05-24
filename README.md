
# Chainplay's Project in NextJS 13

## Installation

Install with npm

```bash
  npm install 
  npm run dev

  npm run build
  npm run start (Production)
```
🌱🌱🌱 run with url
http://127.0.0.1:3000/

🌱🌱
## Features

- Light/dark mode toggle
- Update item (🔥 Only mode **Developer** 🔥 )
- Search Name or Symbol
- Filter BlockChain
- Pagination Table



## API Reference

#### Get all items

```http
  GET api/?page=${page}&blockChain=${blockChain}&search=${search}
```

| Parameter     | Type     | Description                |
| :--------     | :------- | :------------------------- |
| `page`        | `string` | current Page               |
| `blockChain`  | `string` | filter blockChain          |
| `search`      | `string` | filter with Name or Symbol |

#### Update item 
```http
  PUT api/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Object`  | `object` | **Required**. Update all document |



