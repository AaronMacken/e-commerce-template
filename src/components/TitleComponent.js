import React from 'react';


function RenderTitle({title}) {
    return (
        <div class="intro">
            <h2 class="text-center">{title.name}</h2>
            <h3 class="text-center">{title.description}</h3>
        </div>
    )
}


function Title(props) {
    const title = props.title.map(title => {
        return (
            <div key={title.id}>
                <RenderTitle title={title} />
            </div>
        )
    })

    return (
        <div>
            {title}
        </div>
    )
}

export default Title;