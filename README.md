# Homework 5
потрібно на jsonplaceholder відправити об'єкт post
відповідно, для цього вам потрібно його створити. Створення об'єкту повинно відбуватись за допомоги форми з useForm та валідацією.
Якщо ви не пам'ятаєте як відправляти данні на jsonplaceholder подивіться його документації, і що він вам присилає. Не забувайте, що фактичного збереження не відбувається! Ознайомтесь з документацією
# Project Location

https://github.com/May-2024/react_2024## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
  
# Terminal commands
npx kill-port 3000

# Функції хелпери
const getAll = async <T,> (endpoint:string)=>{
const {data} = await axiosInstance.get<T>(endpoint)
return data;
}

const [query, setQuery] = useSearchParams({page:'1'});
const [carts, setCarts] = useState<ICart[]>([]);
const [flag, setFlag] = useState<boolean>(false);
# Бібліотеки
"axios": "^1.7.7",
"react-router-dom": "^6.27.0",
"react-hook-form": "^7.53.1",
"joi": "^17.13.3",
"@hookform/resolvers": "^3.9.1"