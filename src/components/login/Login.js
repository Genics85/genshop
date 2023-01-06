import { React, useState, useRef, useContext, useEffect } from "react";
import axios from "../../api/axios";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { LockFill, PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./login.scss";
import AuthContext from "../../context/authContext";
const LOGIN_URL = "/user/login";

function Login() {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {}, [email, password]);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setErr(true);
      console.log(err);
    } else {
      try {
        e.preventDefault();

        const response = await axios.post(LOGIN_URL, { email, password });
        
        console.log(response.data);
        setEmail("");
        setPassword("");
      
      } catch (error) {
        console.log(`${error} occured`);
      }
    }
    setValidated(true);
  };

  return (
    <div className="login center vh-100">
      <Container>
        <Row className="vh-100 center">
          <Col className="left d-none d-md-block col-6 ">
            <h1 className="center heading">ONLINE SHOPPING</h1>
            <p align="center">
              Cupidatat tempor magna laboris aliquip laborum incididunt ad
              cupidatat quis adipisicing mollit aliqua ullamco in.
            </p>
            <Image src="https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-3736818-3122116.png" />
          </Col>
          <Col className="right col-12 col-md-6 ">
            <Card className="loginCard h-100 center">
              {err ? (
                <Alert key={"login error"} variant={"danger"} onClose={()=>setErr(false)} dismissible>
                  {" "}
                  None of the fields can be left empty,make sure all fields are
                  filled
                </Alert>
              ) : (
                <></>
              )}
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="form w-75"
              >
                <h4 className="mb-4 center form-title">USER LOGIN</h4>
                <Form.Group className="email mb-3" controlId="emailGroup">
                  <div className="icon-textfield center gap-2">
                    <PersonFill className="login-icon" />
                    <Form.Control
                      ref={userRef}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control shadow-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group
                  className="password mb-3 "
                  controlId="passwordGroup"
                >
                  <div className="icon-textfield center gap-2">
                    <LockFill className="login-icon" />
                    <Form.Control
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input shadow-none"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group
                  className="forgot-password mb-3 center"
                  controlId="forgotPassword"
                >
                  <Link className="login-link"> Forgot Your Password?</Link>
                </Form.Group>
                <Form.Group
                  className="submit-button mb-3 center"
                  controlId="submitId-login"
                >
                  <Button type="submit">LOGIN</Button>
                </Form.Group>
                <Form.Group
                  className="create-account mb-3 center"
                  controlId="createAccount"
                >
                  <Link className="login-link" to="/signup">
                    {" "}
                    Create Account
                  </Link>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
