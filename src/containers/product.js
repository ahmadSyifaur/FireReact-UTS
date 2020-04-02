import React from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Badge, Jumbotron, Button
} from 'reactstrap';
import list from '../components/List'


function product() {
    return (
        <div>
            <Navbar />
            <br />
            <h1 className="App">Treatment <Badge color="secondary">New</Badge></h1>
            <br />
            <Jumbotron>
                <div className="row">
                    {list.map(el => {
                        return <div className="col-sm-3">
                            <div class="card">
                                <img class="card-img-top" src={el.image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{el.title}</h5>
                                    <p class="card-text">{el.desc}</p>
                                    <p class="card-text"><h5>Harga : {el.price}</h5></p>
                                    <a href="#" class="btn btn-primary">Pesan</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </Jumbotron>
        </div>
    );
}

export default product;