/**
 * Created by joshuapro on 2017-06-10.
 */
import React from "react";

import Title from './Header/Title';

export default class Header extends React.Component {

    handleChange(e){
        // 2) when the text has been passed from input we extract it from e.target ===(onChange)
        const title = e.target.value;
        // then the text will pass into Layout
        this.props.changeTitle(title);
    }



    render() {
        return (
            <div>

                <Title title={this.props.title}/>
                {   /*
                 1)  when we writing text into  input -> the data will passed into handle changeChange method
                 */
                }
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}
