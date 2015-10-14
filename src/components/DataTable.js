import * as React from 'react';
import * as d3 from 'd3';
import * as ReactBootstrap from 'react-bootstrap';

var Modal = ReactBootstrap.Modal;
var Table = ReactBootstrap.Table;



class DataTable extends React.Component {
    constructor(props) {
        super(props)



        this.populateTable = this.populateTable.bind(this);

    }



    populateTable(dataFunction) {
        var data = dataFunction ? dataFunction() : []
        if (!data || data.length === 0) {
            return '';
        }

        var headers = Object.keys(data[0]);
        var tableHeaders = headers.map(function (header, i) {
            return <th key = {
                i
            } > {
                header
            } < /th>;
        });



        var rows = data.map(function (row, id) {

            var cells = headers.map(function (prop, i) {
                var cell = row[prop];
                return (id === 0 ? '' : < td key = {
                        i
                    } > {
                        cell
                    } < /td >

                );
            });

            return ( < tr key = {
                    id
                } > {
                    cells
                } < /tr>

            );
        });
        return ( < Table striped bordered condensed hover responsive > < thead > < tr > {
            tableHeaders
        } < /tr> < /thead > < tbody > {
            rows
        } < /tbody > < /Table > );


    }



    render() {
        var tableContent = this.populateTable(this.props.dataFn);
        return ( < Modal {...this.props
            }
            bsSize = "large" >
            < Modal.Header closeButton >
            < Modal.Title > {
                this.props.title
            } < /Modal.Title> < /Modal.Header >
            < Modal.Body > {
                tableContent
            } < /Modal.Body>< /Modal >

        );
    }
}

module.exports = DataTable;
