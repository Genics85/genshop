import { React, useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Alert,
} from "react-bootstrap";
import { LockFill, Mailbox2, PersonFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";
import axios from "../../api/axios";
const SIGNUP_URL = "/user/signup";

function Signup() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErr(false);
  };
  const handlePassword = (e)=>{
    setPassword(e.target.value);
    setErr(false);
  }
  const handleName = (e)=>{
    setName(e.target.value);
    setErr(false);
  }

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setErr(true);
      setErrMsg("All the fields are required");
    } else {
      try {
        e.preventDefault();
        const response = await axios.post(SIGNUP_URL, {
          name,
          email,
          password,
        });
        navigate("/login");
      } catch (error) {
        setErr(true);
        if (!error?.response) {
          setErrMsg("No server response");
        } else if (error.response) {
          const msg = error.response.data.msg;
          setErrMsg(msg);
        } else {
          setErrMsg("Couldn't sign up");
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
                <h4 className="mb-4 center form-title">SIGN UP</h4>
                <Form.Group className="name mb-3" controlId="nameGroup">
                  <div className="icon-textfield center gap-2">
                    <PersonFill className="login-icon" />
                    <Form.Control
                      value={name}
                      onChange={handleName}
                      ref={nameRef}
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    Please name cannot be empty
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="email mb-3" controlId="nameGroup">
                  <div className="icon-textfield center gap-2">
                    <Mailbox2 className="login-icon" />
                    <Form.Control
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
                <Form.Group className="terms mb-3 center shadow-none">
                  <Form.Check
                    required
                    label="I agree with terms and conditions"
                  />
                </Form.Group>
                <Form.Group
                  className="submit-button mb-3 center"
                  controlId="submitId-login"
                >
                  <Button type="submit">SIGN UP</Button>
                </Form.Group>
                <Form.Group
                  className="create-account mb-3 center"
                  controlId="createAccount"
                >
                  <Link className="login-link" to="/login">
                    {" "}
                    Login
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

export default Signup;
