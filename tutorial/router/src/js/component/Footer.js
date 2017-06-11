/**
 * Created by joshuapro on 2017-06-10.
 */
import React from "react";

import FooterTitle from './Header/FooterTitle';

export default class Footer extends React.Component {

    render() {
        return (
           <footer>
               <FooterTitle title={this.props.title} />
           </footer>
        )
    }
}
