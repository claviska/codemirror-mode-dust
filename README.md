# codemirror-mode-dust
> CodeMirror mode for dust templates.

## Usage instructions

1. Install codemirror-mode-dust from NPM: `npm install codemirror-mode-dust`

2. Include `codemirror-mode-dust` into your project.

  ```html
  <!-- You can simply add dust.js as a script tag: -->
  <script src="js/codemirror.js"></script>
  <script src="js/codemirror-mode-dust/dist/dust.js"></script>
  ```

  or

  ```js
  // If you're using front-end build tools like Webpack and Babel,
  // you can simply import the module and register the mode:
  import CodeMirror from 'codemirror';
  import 'codemirror/mode/htmlmixed/htmlmixed'; // optional base mode.
  import 'codemirror-mode-dust';
  ```

3. Set `dust` as the mode when creating the CodeMirror editor.

  ```js
  CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: 'dust',
    base: 'htmlmixed' // an optional base mode to wrap.
  });
  ```
