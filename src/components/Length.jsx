import { useRef } from "react"

const Length = () => {

    const choice = useRef();
    const userInput = useRef();
    const output = useRef();

    const convert = () =>{
        let userChoice = choice.current.value;
        let input = userInput.current.value;

        if(userChoice == 1){
            let result = input / 100;
            output.current.value = result.toFixed(3)
        }else if(userChoice == 2){
            let result = input / 1000;
            output.current.value = result.toFixed(3)
        }
    }

    const emptyInputs = () => {
        userInput.current.value = "";
        output.current.value = "";
        userInput.current.focus();
    }


    return (
        <div className="container">
            <div className="w-50 mb-4">
                <label htmlFor="choice" className="form-label fw-bold">Select Conversion</label>
                <select className="form-select border border-secondary fs-1" id="choice" ref={choice} onChange={emptyInputs}>
                    <option value="">Open this select menu</option>
                    <option value="1">cm to meter</option>
                    <option value="2">meter to kilometer</option>
                    <option value="3">cm to kilometer</option>
                </select>
            </div>

            <div className="w-50 mb-4 ">
                <label htmlFor="inputVal" className="form-label fw-bold">Enter any Value</label>
                <input type="text" className="form-control border border-secondary fs-1" id="inputVal" ref={userInput}/>
                <div className="d-flex justify-content-center mt-4">

                <button className="btn btn-secondary btn-lg" onClick={convert}>Convert</button>
                </div>
            </div>
            <div className="w-50">
                <input type="text" className="form-control border border-secondary fs-1" id="output" ref={output} disabled/>
            </div>

        </div>
    )
}

export default Length
