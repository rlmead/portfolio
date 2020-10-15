import React from 'react'
import axios from 'axios'

class Image extends React.Component {
    constructor(props) {
        super();
        this.state {
            imageData=''
        }
    }

    componentDidMount() {

        axios.get(props.imageURL)
            .then(function (response) {
                console.log('successful axios call:', response.data);
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            (this.state.imageData).length > 0)
            ? <img className='image-fluid' src={this.state.imageData.urls.regular} />
            : <div>image loading</div>
        )
    }

}


export default Image