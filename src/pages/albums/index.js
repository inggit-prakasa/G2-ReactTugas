import React, { Component } from 'react';
import {forEach} from "react-bootstrap/cjs/ElementChildren";
import {Container,Card} from "react-bootstrap";

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums : null,
            photos : null
        }
    }

    fetchAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums/?userId='+ this.props.user.id)
            .then(response => response.json())
            .then(result => this.setAlbums(result));
    }

    fetchPhotos() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(result => this.setPhotos(result));
    }

    setAlbums(result) {
        // const fil = item => item.userId === this.props.user.id
        // const cr = result.filter(fil)
        console.log("albums : ",result)
        this.setState({ albums : result });
    }

    setPhotos(result) {
        // const cr = result.filter(item => )
        // const lala = this.state.album.map((album) => album.albumId === '1' ? return album : "" )
        let arrayBaru = []
        for(var i = 0; i < this.state.albums.length; i++) {
            let nana  = result.filter(item => item.albumId === this.state.albums[i].id)
            if (nana !== null) {
                arrayBaru.push(nana)
            }
        }
        // console.log("lala :",lala)
        this.setState({ photos : arrayBaru });
    }

    componentDidMount() {
        this.fetchAlbums()
        // this.fetchPhotos()
    }

    render() {
        // console.log("album",this.state.albums)
        // console.log("photos",this.state.photos)
        if (this.state.albums === null) {
            return <h2>Loading posts...</h2>;
        } else
        return (
            <Container className={'d-flex flex-warp'}>
                {
                    this.state.albums.map((album,idx) => {
                        return (
                            <Card key={idx} className={'p-2 m-2'}>
                                <p>{idx}</p>
                                <p>{album.title}</p>
                            </Card>
                        )
                    })
                }
            </Container>
        );
    }
}

export default Albums;