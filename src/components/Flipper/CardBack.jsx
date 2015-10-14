export default class CardBack extends React.Component {

    render() {
        return <div className = "back" > {
            this.props.children
        } < /div>;
    }
}
