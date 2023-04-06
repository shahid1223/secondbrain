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
    
      let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
          if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
          }
        }

    return (
        <div className="flex justify-center items-center flex-col mt-4 mb-4">
            <div>{JSON.stringify(convertToRaw(editorState.getCurrentContent()))}</div>
            <div
                className="preview mt-4 mb-4 text-start"
                dangerouslySetInnerHTML={createMarkup(convertedContent)}>
            </div>

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
            <button class="bg-[#0054B4] hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded-lg" onClick={handleSaveClick}>Save</button>
        </div>
    )
}

export default AddBlog;
