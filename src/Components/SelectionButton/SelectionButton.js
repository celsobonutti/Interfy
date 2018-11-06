import React, {PureComponent} from 'react';
import style from './SelectionButton.module.scss';
import Transition from 'react-transition-group/Transition';

const transitionStryles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 1},
    exited: {opacity: 0}
}

export class SelectionButton extends PureComponent {
    state = {}
    
    componentWillMount(){
        this.setState({mounted: false});
    }

    render(){
        this.setState({mounted: true});

        return(
            <Transition appear in={this.state.mounted} timeout={200}>
                <div onClick={this.props.click} className={style.selectionButton}>
                    <span className={this.props.active?style.active:null}>{this.props.title}</span>
                    <span>{this.props.firstLine}</span>
                </div>
            </Transition>
        )
    }
}