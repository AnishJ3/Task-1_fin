import React, {useState} from "react";

function TextForm()
{
    const [text,setText] = useState('');
    const [word,setWord] = useState(0)


    const handleChange = (e) =>
    {
        setText(e.target.value);

        if(text === '')
        {

        }
        else
        {
            setWord(text.match(/\S+/g).length ? text.match(/\S+/g).length : 0 );

        }
        console.log(text);
    }

    return(
        <div>
            <h1>Responsive Paragraph Word Counter</h1>

            <textarea className="text-area" rows="10" cols="90" value = {text} onChange = {handleChange} placeholder="Enter any characters or words" id="text-area"/>

            <div className="button">

            </div>

            <div>
                <p>Characters Count: {text===''?0:text.trim().length}</p>
                <p>Word Count: {word}</p>
            </div>

        </div>
    )

}

export default TextForm;