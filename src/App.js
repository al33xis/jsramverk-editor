import './App.css';

import * as React from "react";
import "trix/dist/trix";
import "trix/dist/trix.css";

import { TrixEditor } from "react-trix";



function App() {

    function printText() {
        var element = document.querySelector("trix-editor");
        var new_document = element.editor.getDocument()
        console.log(new_document.toString());
    }

    return (
        <div>
            <button onClick={() => printText()}>Save</button>
            <TrixEditor />
        </div>
    );
}

export default App;