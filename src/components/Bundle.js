import React, {Component} from 'react'

class Bundle extends Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    };

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        alert("props");
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        // console.log(props);
        this.setState({
            mod: null
        });
        props.load((mod) => {
            // alert(111);
            console.log(mod);
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            });
            console.log(this.state)
        })
    }

    render() {
        if (!this.state.mod)
            return false;
        return this.props.children(this.state.mod)
    }
}

export default Bundle