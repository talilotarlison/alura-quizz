import "./index.css"

interface AlternativeProps {
    item: string;
    numero: number;
}


function Alternative(props: AlternativeProps) {


    return (
        <label className="component" key={props.numero +Math.random()} >
            <input className="input"
                type='radio'
                id={`alternative-${props.numero}`}
                name="alternative" 
                defaultValue={props.numero}
                />
            {props.item}
        </label>
    )
}

export default Alternative