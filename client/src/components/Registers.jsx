import "./Registers.css";

export const Registers = (props) => {
    


    return (
        <div className="registers-container">
            <h2>Registers</h2>

            <table className="registers-table">
                <thead>
                    <tr>
                        <th>Register</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                {props.registers.map((value, index) => (
                    <tr key={index}>
                        <td className="register-name">{"$" + index}</td>
                        <td className="register-value">{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};