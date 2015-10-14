export default class CardFront extends React.Component {


    render() {

        return <div className = "front" > {
            this.props.children
        } < /div>;
    }
}
