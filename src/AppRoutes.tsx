import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LadingPage from './Pages/LadingPage'
const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LadingPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes