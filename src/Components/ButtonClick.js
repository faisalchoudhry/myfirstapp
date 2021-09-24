import React, {Component} from 'react'
import axios from "axios";

class ButtonClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0,
            isLoaded: false,
            items: [],
            itemsPhotos: [],
            postRes: [],
            error: null,
            width: 25,
            height: 25,
            blank: '_blank'
        };
    }

    getFirstApiCall = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
            this.setState({isLoaded: true, items: response.data, flag: 1})
        }).catch(error => {
            alert("error");
        })
    }
    getSecondApiCall = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {
            console.log(response);
            this.setState({isLoaded: true, itemsPhotos: response.data, flag: 2})
        }).catch(error => {
            alert("error");
        })
    }
    postApiCall = () => {
        const dist = {title: 'foo', body: 'bar', userId: 1};
        axios.post('https://jsonplaceholder.typicode.com/posts', dist).then(response => {
            console.log(response);
            this.setState({isLoaded: true, postRes: response.status, flag: 3})
        }).catch(error => {
            alert("error");
        })
    }

    render() {
        if (this.state.flag == 1) {
            return (
                <div>
                    <button onClick={this.getFirstApiCall}>GET First API Call</button>
                    <button onClick={this.getSecondApiCall}>GET Second API Call</button>
                    <button onClick={this.postApiCall}>POST API Call</button>
                    <h1>Get First API Being Called</h1>
                    <div>
                        <select name="" id="">{this.state.items.map(item => (
                            <option value={item.id}>{item.title}</option>))}</select>

                        <ul>{this.state.items.map(item => (
                            <li key={item.id}>{item.id} -- {item.title}</li>
                        ))}</ul>

                    </div>
                </div>
            )
        } else if (this.state.flag == 2) {
            return (
                <div>
                    <button onClick={this.getFirstApiCall}>GET First API Call</button>
                    <button onClick={this.getSecondApiCall}>GET Second API Call</button>
                    <button onClick={this.postApiCall}>POST API Call</button>
                    <h1>Get Second API Being Called</h1>
                    <div>

                        <div>
                            {this.state.itemsPhotos.map(
                                (item, index) => (
                                    index < 50 && (
                                        <a href={item.url} target={this.state.blank}><img src={item.url}
                                                                                          width={this.state.width}
                                                                                          height={this.state.height}
                                                                                          alt=""/></a>
                                    )))}
                        </div>
                        <ul>{this.state.itemsPhotos.map(item => (
                            <li key={item.id}>{item.id} -- {item.title}</li>
                        ))}</ul>

                    </div>
                </div>
            )

        } else {
            return (
                <div>
                    <button onClick={this.getFirstApiCall}>GET First API Call</button>
                    <button onClick={this.getSecondApiCall}>GET Second API Call</button>
                    <button onClick={this.postApiCall}>POST API Call</button>
                    <h1>Please select any API Button</h1>
                </div>
            )

        }
    }

    componentDidMount() {
    }
}

export default ButtonClick;