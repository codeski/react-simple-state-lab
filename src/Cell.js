import React from 'react' 

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = { color: this.props.value }
    }

    // state =  { color: this.props.value }

    newColor = () => {
        this.setState( {color: '#333'} )
    }

    render() {
        console.log(this.state.color)
        return <div onClick={this.newColor} style={{backgroundColor: this.state.color}} className="cell">YO</div>
    }
}

export default Cell