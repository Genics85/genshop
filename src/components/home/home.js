import {useEffect, useState} from "react";
import "./home.scss";
import { Col, Container, Row } from "react-bootstrap";
import Pallete from "../share/pallete/Pallete";
import axios from "../../api/axios";

function Home() {
  const [grocery,setGrocery]=useState([]);
  const [fashion,setFashion]=useState([]);
  const [home,setHome]=useState([]);
  const [health,setHealth]=useState([]);
  const [electronics,setElectronics]=useState([]);

  const getFashion = async () => {
    await axios.get(`/product/fashion`).then((response) => {
      const listItems = response.data;
      setFashion(listItems);
    });
  };
  const getGrocery = async () => {
    await axios.get(`/product/grocery`).then((response) => {
      const listItems = response.data;
      setGrocery(listItems);
    });
  };
  const getElectronics = async () => {
    await axios.get(`/product/electronics`).then((response) => {
      const listItems = response.data;
      setElectronics(listItems);
    });
  };
  const getHome = async () => {
    await axios.get(`/product/home`).then((response) => {
      const listItems = response.data;
      setHome(listItems);
    });
  };
  const getHealth = async () => {
    await axios.get(`/product/health`).then((response) => {
      const listItems = response.data;
      setHealth(listItems);
    });
  };

  useEffect(()=>{
    getHealth();
    getHome();
    getElectronics();
    getFashion();
    getGrocery();
  },[]);

  return (
    <main>
      <Container>
        <Row>
          <Col>
            <p>Home</p>
            <Pallete category={"Groceries"} items={grocery}/>
            <Pallete category={"Electronics"} items={electronics} />
            <Pallete category={"Health & Beauty"} items={health} />
            <Pallete category={"Fashion"} items={fashion}/>
            <Pallete category={"Home & Office"} items={home}/>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
