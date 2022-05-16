# Nette with React

Nette PHP framework + React without NPM

## Including React and Babel scripts 

Include this right before the `</body>` tag:
```
<!-- React and Babel scripts -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<!-- Your custom scripts for React pages e.g. /www/react/app.js -->
<script src="/react/app.js" type="text/babel"></script>
```

## Creating a React page

1. Create a presenter and its `.latte` template
2. In the presenter, send some data to the template:
```
 $this->template->data = json_encode(...);
```
3. In the `latte` template, declare a variable holding data sent from the presenter:
```
<h1>My React page</h1>
<div id="react-root"></div>

<script>
	const data = JSON.parse({$data});
</script>
```
4. Create a script for your React code, e.g. `/www/react/app.js` and try to render the data:
```
const domContainer = document.querySelector('#react-root');
if (domContainer) {
    const root = ReactDOM.createRoot(domContainer);
    root.render(
        <div className="react-container">
            <h2>This block was rendered by React</h2>
            <pre>{data.user}</pre>
        </div>
    );
}
```