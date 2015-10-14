var CardFront = require('./CardFront.jsx');
var CardBack = require('./CardBack.jsx');
var DataTable = require('../DataTable.js');

export default class FlipCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flipped:false,
            tableShow:false
        };

        this.flip = this.flip.bind(this);
        this.showTable = this.showTable.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    flip(){
        this.setState({flipped: !this.state.flipped})
    }

    showTable(){
        this.setState({tableShow: !this.state.tableShow})
    }


    render() {
        let tableClose = () => this.setState({ tableShow: false });

        var apiList = this.props.apiCalls.map(function(apiCall, index){

        return <div key={index} className='cardCheckBox'>
                    <input type="checkbox" value="None" id="c1" name="check"  onClick ={function(){
                                apiCall(true);
                            }}/>
                            <label for="c1"><span></span>Activities</label>
                </div>
        });

        var logo = this.props.logoURL?<img  src={this.props.logoURL}/>:"";
        var connectorButton = this.props.connector?<span className="card__button" onClick ={this.props.connector}>
                                        Connect
                                        </span>:"";

        var viewDataButton = this.props.viewData?<span className="card__button" onClick ={this.showTable}>
        View Data
        </span>:""
        var records = this.props.viewData?this.props.viewData():[];

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
                                    {viewDataButton}
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
                    <DataTable title={this.props.title} dataFn={this.props.viewData} show={this.state.tableShow} onHide={tableClose}/>
                </div>;
    }
}
