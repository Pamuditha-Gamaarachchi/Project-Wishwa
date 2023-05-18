// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//pages and components
import Sidebar from "./components/Sidebar";
 import Addnotice from "./pages/noticeadd";
 import DisplayS from "./pages/displaynotice";
 import Updatenotice from "./pages/updatenotice";
 
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
        <BrowserRouter>
          <Col className="p-0  sidebar"  lg="2">
          <Sidebar/>
          </Col>
        <Col className="p-0 adminbackground" lg="10">
            <div className="pages">
              <Routes>

                 
                 <Route path="/announcement/add" element={<Addnotice />} />
                <Route path="/announcement/" element={<DisplayS />} />
                <Route path="/announcement/update/:id" element={<Updatenotice />} />
              </Routes>
            </div>
          </Col>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
}

export default App;
