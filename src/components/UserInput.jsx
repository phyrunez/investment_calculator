import { calculateInvestmentResults } from "../util/investment";

const UserInput = ({ 
    initialVal, 
    annualVal, 
    expectedVal, 
    durationVal,
    changeInintialHandler, 
    changeAnnualHandler,
    changeExpectedHandler,
    changeDurationHandler
}) => {
    

    return (
        <div id="user-input">
            <div className='input-group'>
                <div>
                    <label htmlFor="first">Initial Investment</label>
                    <input type="number" id='first' value={initialVal} onChange={changeInintialHandler} />
                </div>

                <div>
                    <label htmlFor="second">Annual Investment</label>
                    <input type="number" id='second' value={annualVal} onChange={changeAnnualHandler} />
                </div>
            </div>

            <div className='input-group'>
                <div>
                    <label htmlFor="third">Expected Return</label>
                    <input type="number" id='third' value={expectedVal} onChange={changeExpectedHandler} />
                </div>

                <div>
                    <label htmlFor="fourth">Duration</label>
                    <input type="number" id='fourth' value={durationVal} onChange={changeDurationHandler} />
                </div>
            </div>
        </div>

    )
}

export default UserInput;