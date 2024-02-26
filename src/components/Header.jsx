import investCalc from "../assets/investment-calculator-logo.png"

const Header = () => {
    return (
        <div id="header">
            <img src={investCalc} alt="logo" />
            <h1>Investment Calculator</h1>
        </div>
    )
}

export default Header;