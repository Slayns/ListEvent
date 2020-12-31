
import React,{Component} from "react";
import Card from './CardUI';

import img1 from "../assets/event1.jpg";
import img2 from "../assets/event2.jpg";
import img3 from "../assets/event3.jpg";

class Cards extends Component {
    render(){
        return(
            <div className= "container-fluid d-flex justify-content-center">
                <div className= "row">
                    <div className= "col-md-4">
                        <Card imgsrc={img1} title="Event 1" desc="Premier event se trouvant a rabat tout nouveau accesible a tous. 20 personnes maximums, entrée a 20h"/>
                    </div>
                    <div className= "col-md-4">
                        <Card imgsrc={img2} title="Event 2" desc="deuxieme event se trouvant a rabat tout nouveau accesible a tous. 20 personnes maximums, entrée a 20h"/>
                    </div>
                    <div className= "col-md-4">
                        <Card imgsrc={img3} title="Event 3" desc="troisieme event se trouvant a rabat tout nouveau accesible a tous. 20 personnes maximums, entrée a 20h"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;