# Lesson 7 (hooks)
# Hooks (short memo card)
**useRef** - як і useState, спроможний запам'ятовуваати стани якщо сторінка переренджується, але на відміну від _useState_ цей хук не повинен приймати участі у рендерінгу(його значення не повинно відображатися в розмітці UI).

**useReducer** - раніше використовувалось частіше через можливіть використовувати бібліотеку _Redux_, яка реалізовує button _flux_, але через виявлення сайд-ефектів(в основному через проблеми з типізацією) - замінили на _Redux Toolkit_. По суті це _useState_ тільки на  "стероїдах".

**customHook** - можна ств. свій хук.Якщо функція починається з _use_ і має своє розширення як tsx файл з яким ви працюєте - можна в середині цього хука викликати інші хуки, чого не дозволено ніде окрім компонентів.(Обгортка для фу-ії або фу-ія для фу-ії)

**memo** - щоб була можливість запам'ятовувати якісь певні значенння, стан. Відноситься до performance хуків котрі повинні працювати на важких або об'ємних dummy? компонентах або на компонентах в яких є пропси які не часто змінюються в яких реально щось є а не два рядки

# Project Location

https://github.com/May-2024/react_2024

## Available Scripts

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
**npx kill-port 3000** - if something is already running on port 3000

const [query, setQuery] = useSearchParams({page:'1'});
const [carts, setCarts] = useState<ICart[]>([]);
const [flag, setFlag] = useState<boolean>(false);

**useState** - хук(функція), який повертає об'єкт з масивом в якому завжди тільки 2 елементи(0,1). 0 - являється початковий стан масиву, 1 - дозволяє ианіпулювати початковим станом об'єкта(оновлювати його)

**useEffect** - хук(функція), приймає 2 аргументи: колл-бек функцію і масив залежностей. Колл-бек буде запущенно під час першого рендеру який виконується один єдиний раз.

# Dependencies
* "axios"
* "react-hook-form"
* "joi"
* "@hookform/resolvers"
* "react-router-dom"