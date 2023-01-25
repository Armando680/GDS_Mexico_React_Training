const Tasks = (props) => {

    const { children, title, footer } = props;

    return (
        <div>
            <h4>{title}</h4>
            <div className='list-group'>
                {children}
            </div>
            <div className="alert alert-info mt-1">
                {footer}
            </div>
        </div>
    )
}

export default Tasks;