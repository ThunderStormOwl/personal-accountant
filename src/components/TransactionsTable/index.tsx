import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {

        api.get('transactions')
        .then(response => console.log(response.data))

    } , []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Ammount</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Drugs, hardcore drugs.</td>
                        <td className="withdrawal">- $1000</td>
                        <td>Fun</td>
                        <td>06/08/2021</td>
                    </tr>
                    <tr>
                        <td >Salary.</td>
                        <td className="deposit">$5000</td>
                        <td>Work</td>
                        <td>06/08/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )

}