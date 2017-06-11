/**
 * Created by joshuapro on 2017-06-10.
 */
import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    constructor(){
        super();
        this.state= {
            title : 'welcome'
        }
    }
    // the code will be fire from the Header which it call the method
    changeTitle(title){
        this.setState({title});
    }
    render() {
        return (
            <div>
                {/*
    * changeTitle is props to the header, but it's data has been bind to this component
    * */}

                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                                                                            {/*
                                                                            when ever the state has been changed , the title value will become change in <h1>

                                                                            Layout -> Header(Title) -> Title( <h1>{this.porps.title}</h1>)
                                                                        */}
                <Footer title={this.state.title}/>

            </div>

        )
    }
}
