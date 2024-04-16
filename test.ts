import { Monaco } from './dist/my-lib'

customElements.define('monaco-editor', Monaco);
// create a new instance of the MonacoEditor class
const editor = new Monaco();
// append it to the body
const editorNode = document.body.appendChild(editor);