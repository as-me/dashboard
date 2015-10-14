var CardFront = require('./CardFront.jsx');
var CardBack = require('./CardBack.jsx');

export default class FlipCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flipped:false
        };

        this.flip = this.flip.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    flip(){
        this.setState({flipped: !this.state.flipped})
    }




    render() {
        var apiList = this.props.apiCalls.map(function(apiCall, index){
        return <input key={index} type='button' value='Activities' onClick ={function(){
                apiCall(true);
            }}/>
        })

        var logo = this.props.logoURL?<img  src={this.props.logoURL}/>:"";
        var connectorButton = this.props.connector?<span className="card__button" onClick ={this.props.connector}>
                                        Connect
                                        </span>:""

        return <div className="card horizontal card--big" >
                        <div className={"flipper" + (this.state.flipped ? " flipped" : "")}>

                            <CardFront>
                                <div style={{backgroundColor: this.props.bgColor}} className="card__content">
                                    <h2 className="card__title">{this.props.title}</h2>
                                    <span className="card__logo">
                                        {logo}
                                    </span>
                                </div>
                                <div className="card__action-bar" style={{color: this.props.bgColor}}>
                                    {connectorButton}
                                    <span className="card__button pull-right" onClick ={this.flip}>
                                        <i className="fa fa-repeat"></i>
                                    </span>
                                </div>
                            </CardFront>

                            <CardBack>
                                <div className="card__content">
                                    {apiList}
                                </div>
                                <div  style={{color: this.props.bgColor}} className="card__action-bar">
                                    <span>
                                        Settings
                                    </span>
                                    <span className="card__button pull-right" onClick ={this.flip}>
                                        <i className="fa fa-repeat"></i>
                                    </span>
                                </div>

                            </CardBack>

                    </div>
                </div>;
    }
}
