const domContainer = document.querySelector('#react-root');
if (domContainer) {
    const root = ReactDOM.createRoot(domContainer);
    root.render(
        <div className="react-container">
            <h2>This block was rendered by React</h2>
            <p>
                <b>Name:</b>&nbsp;<span>{data.user.name}</span>
                <br/>
                <b>Surname:</b>&nbsp;<span>{data.user.surname}</span>
                <br/>
                <b>Job title:</b>&nbsp;<span>{data.user.jobtitle}</span>
            </p>
        </div>
    );
}