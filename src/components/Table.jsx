import { formatter } from "../util/investment";

console.log(formatter)

const TableWrapper = ({ data }) => {
    console.log(data)
    return (
        <div>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Investment Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(d => (
                        <tr>
                            <td>{d.year}</td>
                            <td>{formatter.format(d.initialInvestment)}</td>
                            <td>{formatter.format(d.valueEndOfYear)}</td>
                            <td>{formatter.format(d.interest)}</td>
                            <td>{formatter.format(d.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableWrapper;