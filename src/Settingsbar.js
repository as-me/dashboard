import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import SideBar from './components/SideBar';


var Label = ReactBootstrap.Label;
var Panel = ReactBootstrap.Panel;
var Input = ReactBootstrap.Input;



class Settingsbar extends React.Component {

    constructor(props) {
        super(props)
        this.activeTool = window.NavigationHashMap.getObject("activeTool");
        this.tools = WeaveAPI.globalHashMap.getObject("hooks")
        this._close = this._close.bind(this);
        this._handleChange = this._handleChange.bind(this);
        //hack to make ui render the selected value
        // to-do: find a better solution
        this.state = {
            changed: false
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    _close() {
        this.activeTool.value = "";

    }

    _handleChange(event) {
        // console.log(event.target, event.target.value);
        var property = event.target.id;
        var tool = this.tools.getObject(this.activeTool.value);
        tool.sessionData[property].value = event.target.value;
        this.setState({
            changed: !this.state.changed
        });


    }


    componentWillUnmount() {

    }

    render() {

        var ui = < Label > No Chart selected Yet < /Label>;
        if (this.activeTool.value.length > 0) {
            var tool = this.tools.getObject(this.activeTool.value);
            if (tool) {
                var columnProperties = tool.sessionData.getColumnProperties();
                var columns = window.NavigationHashMap.getObject("columns").getSessionState();
                ui = columnProperties.map(function (property, index) {
                    var options = columns.map(function (columnName, id) {
                        return <option value = {
                            columnName
                        } > {
                            columnName
                        } < /option>
                    });

                    return <Input type = "select"
                    label = {
                        property
                    }

                    id = {
                        property
                    }

                    value = {
                        tool.sessionData[property].value
                    }
                    placeholder = "select"

                    onChange = {
                        this._handleChange
                    } > {
                        options
                    } < /Input>

                }.bind(this));
            }

        }



        return ( < SideBar isOpen = {
                this.props.isOpen
            }
            style = {
                this.props.style
            } >

            < Panel className = "settingsBar"
            header = { < div > {
                    this.activeTool.value
                } < span className = "pull-right" > < i className = "fa fa-times fa-fw fa-pointer"
                onClick = {
                    this._close
                } > < /i>  < /span > < /div >
            } >

            {
                ui
            }

            < /Panel > < /SideBar >


        );
    }
}

module.exports = Settingsbar;