-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Color3FromHex = TS.import(script, script.Parent.Parent.Parent.Parent, "utilites").Color3FromHex
local Blue = {
	[120] = Color3FromHex("#001724"),
	[110] = Color3FromHex("#002E49"),
	[100] = Color3FromHex("#00456D"),
	[90] = Color3FromHex("#005D92"),
	[80] = Color3FromHex("#0074B6"),
	[70] = Color3FromHex("#008BDB"),
	[60] = Color3FromHex("#00A2FF"),
	[50] = Color3FromHex("#2BB1FF"),
	[40] = Color3FromHex("#55C1FF"),
	[30] = Color3FromHex("#80D0FF"),
	[20] = Color3FromHex("#AAE0FF"),
	[10] = Color3FromHex("#D5F0FF"),
}
local default = Blue
return {
	default = default,
}
