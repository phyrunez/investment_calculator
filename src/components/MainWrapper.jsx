import { useState } from "react"
import Header from "./Header"
import UserInput from "./UserInput"
import TableWrapper from "./Table"
import { calculateInvestmentResults } from "../util/investment"
import InvalidDuration from "./InvalidDuration"


const MainWrapper = () => {
    const [initialVal, setInitialVal ] = useState("")
    const [annualVal, setAnnualVal ] = useState("")
    const [expectedVal, setExpectedVal ] = useState("")
    const [durationVal, setDurationVal ] = useState("")

    function changeInintialHandler(e) {
        setInitialVal(e.target.value)
    }

    function changeAnnualHandler(e) {
        setAnnualVal(e.target.value)
    }

    function changeExpectedHandler(e) {
        setExpectedVal(e.target.value)
    }

    function changeDurationHandler(e) {
        setDurationVal(e.target.value)
    }

    const tableData = calculateInvestmentResults({
        initialInvestment: Number(initialVal), 
        annualInvestment: Number(annualVal), 
        expectedReturn: Number(expectedVal), 
        duration: Number(durationVal)
    })

    return (
        <>
            <Header />
            <UserInput 
                initialVal={initialVal} 
                annualVal={annualVal} 
                expectedVal={expectedVal} 
                durationVal={durationVal} 
                changeInintialHandler={changeInintialHandler}
                changeAnnualHandler={changeAnnualHandler}
                changeExpectedHandler={changeExpectedHandler}
                changeDurationHandler={changeDurationHandler}
            />
            { durationVal >= 1 ? <TableWrapper data={tableData} /> : <InvalidDuration  />  }
        </>
    )
}

export default MainWrapper;