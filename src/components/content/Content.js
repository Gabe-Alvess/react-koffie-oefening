import DisplayValues from "./DisplayValues";
import PromoAd from "./PromoAd";
import UpdateProfileValue from "./UpdateProfileValue";
import UpdateMonthAndColor from "./UpdateMonthAndColor";
import UpdateAgeAndNationality from "./UpdateAgeAndNationality";


const Content = () => {
	return (
		<div>
			<PromoAd />
			<UpdateProfileValue />
			<UpdateAgeAndNationality />
			<UpdateMonthAndColor />
			<DisplayValues />
		</div>
	);
};

export default Content;
