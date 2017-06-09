import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import '../../../assets/css/ui/panel.scss'

class Panel extends PureComponent {
    render() {
        return (
            <Paper className="panel">
                <div className="panel-title">
                    {this.props.title}
                    {this.props.more && <Link to={this.props.more} className="panel-more">更多</Link>}
                    {this.props.labels && <div className="panel-label-container">{this.props.labels.map(
                        (label) => {
                            console.log(label);
                            return <div className="panel-label"><span
                                style={{backgroundColor: label.color}}>&nbsp;</span>{label.label}
                            </div>
                        }
                    )
                    }</div>
                    }
                </div>
                <div className="panel-content">
                    {this.props.children}
                </div>
            </Paper>
        )
    }
}

export default Panel;

