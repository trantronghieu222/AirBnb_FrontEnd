import './App.css'
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomeTemplate from './templates/HomeTemplate'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Search from './pages/Search/Search'
import Detail from './pages/Detail/Detail'
import DetailTemplate from './templates/DetailTemplate'
export const routeLink: any = createBrowserHistory()
import { store } from './redux/store'
import { Provider } from 'react-redux'
import AdminTemplate from './templates/AdminTemplate'
import RoomManagement from './admin/RoomManagement/RoomManagement'
import Dashboard from './admin/Dashboard/Dashboard'
import UserManagement from './admin/UserManagement/UserManagement'
import BookingManagement from './admin/BookingManagement/BookingManagement'
import LocationManagement from './admin/LocationManagement/LocationManagement'

function App() {

  return (
    <>
      <Provider store={store}>
        <HistoryRouter history={routeLink}>
          <Routes>
            {/* HomeTemplate */}
            <Route path='' element={<HomeTemplate></HomeTemplate>}>
              <Route index element={<Home></Home>}></Route>
              <Route path='home' element={<Home></Home>}></Route>
              <Route path='profile' element={<Profile></Profile>}></Route>
              
              <Route path='rooms'>
                <Route path=':id' element={<Search></Search>}></Route>
              </Route>
            </Route>
            {/* Detail Template */}
            <Route path='' element={<DetailTemplate></DetailTemplate>}>
              <Route path='detail'>
                <Route path=':id' element={<Detail></Detail>}></Route>
              </Route>
            </Route>
            {/* Admin template */}
            <Route path='admin' element={<AdminTemplate></AdminTemplate>}>
              <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='roomManagement' element={<RoomManagement></RoomManagement>}></Route>
              <Route path='userManagement' element={<UserManagement></UserManagement>}></Route>
              <Route path='bookingManagement' element={<BookingManagement></BookingManagement>}></Route>
              <Route path='locationManagement' element={<LocationManagement></LocationManagement>}></Route>
            </Route>
          </Routes>
        </HistoryRouter>
      </Provider>
    </>
  )
}

export default App