# Homework 8
Створити сторінку, в який буде меню з переходом на users posts comments урли. Кожна зі сторінок, під час переходу на неї, тягне з jasonplaceholder відповідну інформацію про юзерів/пости/комменти. Всі ці данні зберігаються в store.
Зробити додаткову сторінку postsWithComments, на якій потрібно відтворити пости з їх комментарями. Данні для цого відображення НЕ ТГЯНУТИ З АПІ! а барти зі store`у

(в джейсонплейсхолдері існує можливість підтягнути до юзера його пости - до постів його коментарі, ви можете перейти на сторінку постів отримати пости, перейти на сторінку коментарів отримати окремо коментарі і зробити сторінку на якій будуть пости з коментарями і пости з коментарями вам не потрібно буде знову підтягувати, можна їх витягнути з поточного сховища, пакувати між собою - самостійно)
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
"zustand"