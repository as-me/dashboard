import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var Input = ReactBootstrap.Input;




class ColumnSettings extends React.Component {
    constructor(props) {
        super(props)
        this._handleChange = this._handleChange.bind(this);
        this._updateState = this._updateState.bind(this);

        this.sessionProperty = this.props.sessionProperty;

        this.state = {
            selectedValue: this.sessionProperty.value
        };


    }

    componentDidMount() {
        this.sessionProperty.addImmediateCallback(this, this._updateState, true);
    }

    componentDidUpdate(prevProps, prevState) {


    }

    componentWillUnmount() {
        this.sessionProperty.removeCallback(this._updateState);
    }

    _handleChange(event) {
        this.sessionProperty.value = event.target.value;
    }

    _updateState() {
        console.log('8*****************************');
        this.setState({
            selectedValue: this.sessionProperty.value
        });
    }

    render() {
        var options = this.props.columns.map(function (columnName, id) {
            return <option key = {
                columnName
            }
            value = {
                columnName
            } > {
                columnName
            } < /option>
        });



        return ( < Input type = "select"
            label = {
                this.props.propertyName
            }

            id = {
                this.props.propertyName
            }

            value = {
                this.state.selectedValue
            }
            placeholder = "select"

            onChange = {
                this._handleChange
            } > {
                options
            } < /Input>

        );
    }
}

module.exports = ColumnSettings;
