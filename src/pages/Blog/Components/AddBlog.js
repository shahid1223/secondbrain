import React, { useEffect, useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function AddBlog() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [convertedContent, setConvertedContent] = useState(null);

    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);

    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }

    const fontFamilies = {
        Arial: 'Arial, sans-serif',
        Helvetica: 'Helvetica, sans-serif',
        'Times New Roman': 'Times New Roman, serif',
        Georgia: 'Georgia, serif',
        Courier: 'Courier, monospace',
    };

    function handleSaveClick() {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const jsonString = JSON.stringify(rawContentState);
        console.log(jsonString)
    }
    console.log(convertedContent);

    return (
        <div className="flex justify-center items-center flex-col mt-4 mb-4">

            <button onClick={handleSaveClick}>Save</button>

            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"


                hashtag={{
                    separator: ' ',
                    trigger: '#',
                }}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: [
                        { text: 'JavaScript', value: 'javascript', url: 'js' },
                        { text: 'Golang', value: 'golang', url: 'go' },
                    ],
                }}
            />

            <div
                className="preview"
                dangerouslySetInnerHTML={createMarkup(convertedContent)}>
            </div>
        </div>
    )
}

export default AddBlog;