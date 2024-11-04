# Homework 3
Взяти з dummyjson будь-який ендпоінт, який повертає багато об'єктів (products,carts,users etc...), та реалізувати пагінацію цих об'єктів. Крок пагінації ви визначаєте самостійно

# Project Location

https://github.com/May-2024/react_may24## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
  
# Terminal commands
npx kill-port 3000

# Функції хелпер
const getAll = async <T,> (endpoint:string)=>{
const {data} = await axiosInstance.get<T>(endpoint)
return data;
}

const [query, setQuery] = useSearchParams({page:'1'});
const [carts, setCarts] = useState<ICart[]>([]);
const [flag, setFlag] = useState<boolean>(false);
