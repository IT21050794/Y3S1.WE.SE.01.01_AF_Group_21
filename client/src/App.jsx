import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Paymentpage from "./pages/Paymentpage"
import Paymentviewpage from './pages/Paymentviewpage';
import Approval from "./pages/Approval"
import Approvaldash from "./pages/Approvaldash"
import Paymentdash from "./pages/Paymentdash"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/paymentdash" element={<Paymentdash />} /> 
        <Route path="/approval" element={<Approval />} />
        <Route path="/approvaldash" element={<Approvaldash />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/paymentview" element={<Paymentviewpage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App