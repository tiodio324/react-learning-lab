import { Routes, Route } from 'react-router'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Counter from './pages/Counter/Counter'
import CounterHistory from './pages/CounterHistory/CounterHistory'
import TodoList from './pages/TodoList/TodoList'
import TodoFilter from './pages/TodoFilter/TodoFilter'
import Themes from './pages/Themes/Themes'
import Notes from './pages/Notes/Notes'
import FormsText from './pages/FormsText/FormsText'
import FormsAdvanced from './pages/FormsAdvanced/FormsAdvanced'
import Timer from './pages/Timer/Timer'
import Countdown from './pages/Countdown/Countdown'
import UseRefDemo from './pages/UseRefDemo/UseRefDemo'
import LiftingState from './pages/LiftingState/LiftingState'
import Composition from './pages/Composition/Composition'
import MiniCalendar from './pages/MiniCalendar/MiniCalendar'
import SortList from './pages/SortList/SortList'
import FakeLoading from './pages/FakeLoading/FakeLoading'
import Slider from './pages/Slider/Slider'
import ContextTheme from './pages/ContextTheme/ContextTheme'
import ContextCart from './pages/ContextCart/ContextCart'
import ApiRequests from './pages/ApiRequests/ApiRequests'
import Animations from './pages/Animations/Animations'
import FormsLibrary from './pages/FormsLibrary/FormsLibrary'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="counter-history" element={<CounterHistory />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="todo-filter" element={<TodoFilter />} />
        <Route path="themes" element={<Themes />} />
        <Route path="notes" element={<Notes />} />
        <Route path="forms-text" element={<FormsText />} />
        <Route path="forms-advanced" element={<FormsAdvanced />} />
        <Route path="timer" element={<Timer />} />
        <Route path="countdown" element={<Countdown />} />
        <Route path="ref-demo" element={<UseRefDemo />} />
        <Route path="lifting-state" element={<LiftingState />} />
        <Route path="composition" element={<Composition />} />
        <Route path="calendar" element={<MiniCalendar />} />
        <Route path="sort-list" element={<SortList />} />
        <Route path="fake-loading" element={<FakeLoading />} />
        <Route path="slider" element={<Slider />} />
        <Route path="context-theme" element={<ContextTheme />} />
        <Route path="context-cart" element={<ContextCart />} />
        <Route path="api-requests" element={<ApiRequests />} />
        <Route path="animations" element={<Animations />} />
        <Route path="forms-library" element={<FormsLibrary />} />
      </Route>
    </Routes>
  )
}

export default App
