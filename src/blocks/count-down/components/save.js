import BoxContainer from "./box-container";
import Box from "./box";

const Save = ({ attributes }) => {
	const {
		block_id,
		date,
		days,
		hours,
		minutes,
		seconds,
		digitDaysLabel,
		digitHoursLabel,
		digitMinutesLabel,
		digitSecondsLabel,
		showDaysBox,
		showHoursBox,
		showMinutesBox,
		showSecondsBox,
	} = attributes;

	let dateDefault = new Date()
	dateDefault.setDate(dateDefault.getDate()+30)

	return (
		<BoxContainer
			block_id={block_id}
		>
			<div
				className="responsive-block-editor-addons-countdown-get-date"
				data-date={date ? date.toString() : dateDefault.toString()}
			/>
			{showDaysBox&&<Box
				boxName="days"
				label={digitDaysLabel}
				digit={days}
			/>}

			{showHoursBox&&<Box
				boxName="hours"
				label={digitHoursLabel}
				digit={hours}
			/>}

			{showMinutesBox&&<Box
				boxName="minutes"
				label={digitMinutesLabel}
				digit={minutes}
			/>}

			{showSecondsBox&&<Box
				boxName="seconds"
				label={digitSecondsLabel}
				digit={seconds}
			/>}
		</BoxContainer>
	);
};

export default Save;
