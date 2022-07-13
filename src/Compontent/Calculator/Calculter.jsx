// import { ReactCalculator } from "simple-react-calculator";
import Cal from './Cal';
const Calculater = () => {
    return <>
        <div id="use_calculater" className="modal custom-modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document" style={{width:"100%",height:"5%"}}>
                <div className="modal-content"  >
                   <Cal/>     
                </div>
            </div>
        </div>
    </>
};
export default Calculater;