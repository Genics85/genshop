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
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.scss";
import AuthContext from "../../context/authContext";
const LOGIN_URL = "/user/login";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {}, [email, password]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErr(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErr(false);
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setErr(true);
      setErrMsg("Check your login information");
    } else {
      try {
        e.preventDefault();
        const response = await axios.post(LOGIN_URL, { email, password });
        const refreshToken = response?.data?.refreshToken;
        const role = response?.data?.role;
        const authEmail = response?.data?.email;
        setAuth({ email: authEmail, role: role, refreshToken: refreshToken });
        setEmail("");
        setPassword("");
        navigate(from, { replace: true });
      } catch (error) {
        setErr(true);
        if (!error?.response) {
          setErrMsg("No server response");
        } else if (error?.response.data.msg) {
          const msg = error.response.data.msg;
          setErrMsg(msg);
        } else {
          setErrMsg("Login failed");
        }
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
                <Alert
                  key={"login error"}
                  variant={"danger"}
                  onClose={() => setErr(false)}
                  dismissible
                >
                  {errMsg}
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
                      onChange={handleEmail}
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
                      onChange={handlePassword}
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
