import './categories.scss'

const Categories = (props: any) =>{

    const buttons = props.categories.map((name: string) => {
        const active = props.isActive === name;
        const clazz = active ? 'active' : '';
        return (
            <button
                className={`categories__buttons ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onCategory(name)}>
                {name}
            </button>
        )
    });

    return (
        <div className="categories">
            <h1 className="categories__title">Categories</h1>
            <div className="categories__buttons-container">
                {buttons}
            </div>
        </div>
    )
}

export default Categories
