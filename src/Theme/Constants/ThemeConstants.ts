import { Colors } from "../Interfaces/Palette/Colors";
import { Blue, Common, Gray, Green, Purple, Red, Yellow } from "../Interfaces/Palette";
import { Borders } from "../Interfaces/Spacing";

// dark theme
export const DARK_THEME_COLORS: Colors = {
	backgroundDefault: Common.Black,
	backgroundContrast: Gray[110],
	backgroundMuted: Gray[90],
	backgroundUIDefault: Gray[90],
	backgroundUIMuted: Gray[100],
	backgroundUIContrast: Gray[100],
	UIDefault: Gray[70],
	UIMuted: Gray[100],
	UIEmphasis: Gray[80],
	textDefault: Common.White,
	textMuted: Gray[50],
	textEmphasis: Common.White,
	iconDefault: Common.White,
	iconEmphasis: Common.White,
	iconOnHover: Common.White,
	systemPrimaryDefault: Common.White,
	systemPrimaryOnHover: Gray[40],
	systemPrimaryContent: Common.Black,
	contextualPrimaryDefault: Green[50],
	contextualPrimaryOnHover: Green[40],
	contextualPrimaryContent: Common.Black,
	secondaryDefault: Common.White,
	secondaryOnHover: Gray[40],
	secondaryContent: Common.White,
	divider: Gray[70],
	overlay: Common.Black,
	dropShadow: Common.Black,
	navigationBar: Gray[110],
	badge: Common.White,
	badgeContent: Common.Black,
	placeholder: Gray[100],
	online: Green[50],
	offline: Gray[50],
	alert: Red[60],
	success: Green[50],
	accent: Purple[50],
	link: Blue[50],
	caution: Yellow[50],
	text: Common.White,
	background: Common.Black,
};

export const DEFAULT_BORDERS: Borders = {
	default: 1,
	divider: 2,
};
