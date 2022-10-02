export default function Unit2(props) {

	return (
		<div className={`unit ${props.type} unit-text-color`}>
			<p className="unit-title">{props.type}</p>
			<p className="unit-attributes">{props.moovement} / {props.attack} / {props.defense}</p>
			<div className="lifes-squeres-wrapper">
				{Array.from(Array(props.lifes).keys()).map((life) => {
					return <div className="life-squere"></div>
				})}
			</div>
		</div>
	);
  }