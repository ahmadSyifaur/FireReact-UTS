import React from 'react'
import Navbar from './Navbar'
import icon from './image/icon_instagram.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Badge, Jumbotron, Button
} from 'reactstrap';

function about() {
    return (
        <div className="App">
            <Navbar />
            <br />
            <h1 >About <Badge color="secondary">Us</Badge></h1>
            <hr className="col-md-6"/>
            <p>Seepokat adalah premium shoes treatment Indonesia, yang terletak di Malang dan telah berdiri sejak 2020
                <br/>untuk melayani laundry sepatu, deep clean, dan treatment sepatu lainnya.</p>
            <hr className="col-md-6"/>
            <p>Perum Joyo grand Inside No 16A, Kelurahan Joyo Agug<br/>
            Kecamatan Lowokwaru, Kota Malang , 65145</p>
            <hr className="col-md-6"/>
            <p><img src={icon} alt="iconInstagram" width="30px"/>@sepokat.id</p>
        </div>
    );
}

export default about;