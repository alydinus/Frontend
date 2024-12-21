import "./index.css";
import { useState, useEffect } from "react";

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }

        setCalc(calc + value);

        try {
            if (!ops.includes(value)) {
                setResult(eval(calc + value).toString());
            }
        } catch (error) {
            setResult("Error");
        }
    }

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>);
        }
        return digits;
    }

    const calculate = () => {
        try {
            setCalc(eval(calc).toString());
        } catch (error) {
            setCalc("Error");
        }
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
        try {
            if (value !== "") {
                setResult(eval(value).toString());
            } else {
                setResult("");
            }
        } catch (error) {
            setResult("");
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;

            if (/[0-9]/.test(key)) {
                updateCalc(key);
            } else if (ops.includes(key)) {
                updateCalc(key);
            } else if (key === "=" || key === "Enter") {
                calculate();
            } else if (key === "Backspace") {
                deleteLast();
            } else if (key === ".") {
                updateCalc(".");
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [calc]);

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ""} &nbsp;
                    {calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('/')}>/</button>

                    <button onClick={deleteLast}>DEL</button>
                </div>

                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>

                    <button onClick={calculate}>=</button>
                </div>


            </div>
        </div>
    );
}

export default App;