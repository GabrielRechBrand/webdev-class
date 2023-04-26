import React, { useState } from "react";
import { evaluate } from "mathjs";

const CalculatorComponent = () => {
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);

    const putChar = (number) => {
        setResult(result.concat(number));
    };

    const evaluateExpression = () => {
        try {
            setHistory([...history, result]);
            setResult(evaluate(result).toString());
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className="main">
            <div className="calculator-box">
                <div className="result-box">
                    <p className="result">{result}</p>
                </div>
                <div className="buttons-box">
                    <div className="button-row">
                        <div className="button" onClick={() => putChar("sqrt(")}>
                            √
                        </div>
                        <div className="button" onClick={() => setResult("")}>
                            C
                        </div>
                        <div
                            className="button darker"
                            onClick={() => setResult(result.slice(0, -1))}
                        >
                            ⌫
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="button" onClick={() => putChar("(")}>
                            (
                        </div>
                        <div className="button" onClick={() => putChar(")")}>
                            )
                        </div>
                        <div className="button" onClick={() => putChar("%")}>
                            %
                        </div>
                        <div className="button darker" onClick={() => putChar("/")}>
                            ÷
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="button" onClick={() => putChar(7)}>
                            7
                        </div>
                        <div className="button" onClick={() => putChar(8)}>
                            8
                        </div>
                        <div className="button" onClick={() => putChar(9)}>
                            9
                        </div>
                        <div className="button darker" onClick={() => putChar("*")}>
                            x
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="button" onClick={() => putChar(4)}>
                            4
                        </div>
                        <div className="button" onClick={() => putChar(5)}>
                            5
                        </div>
                        <div className="button" onClick={() => putChar(6)}>
                            6
                        </div>
                        <div className="button darker" onClick={() => putChar("+")}>
                            +
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="button" onClick={() => putChar(1)}>
                            1
                        </div>
                        <div className="button" onClick={() => putChar(2)}>
                            2
                        </div>
                        <div className="button" onClick={() => putChar(3)}>
                            3
                        </div>
                        <div className="button darker" onClick={() => putChar("-")}>
                            -
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="button" onClick={() => putChar(".")}>
                            .
                        </div>
                        <div className="button" onClick={() => putChar(0)}>
                            0
                        </div>
                        <div className="button success" onClick={evaluateExpression}>
                            =
                        </div>
                    </div>
                </div>
            </div>
            <div>
        </div>
    </div>
    );
};
export default CalculatorComponent;