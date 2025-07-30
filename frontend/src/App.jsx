import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Landing } from "./pages/Landing"
import { PrivateRoute } from "./components/PrivateRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/send" element={<PrivateRoute><SendMoney /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
