import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "../../../lib/axios";
import {
	getProfileData,
	postUpdatePhoto,
} from "../../../services/profileService";

export interface IProfileState extends IState {
	data: IUser;
}
const initialState: IProfileState = {
	data: null,
	loading: true,
};

export const fetchProfileData = createAsyncThunk(
	"profiles/fetchDataStatus",
	async () => {
		const res = await getProfileData();
		return res.data;
	}
);
export const updateProfileData = createAsyncThunk(
	"profiles/updateDataStatus",
	async (data: IProfile) => {
		const res = await axios.post(`/api/account/profiles`, data);
		return res.data.data;
	}
);
export const updateProfilePhoto = createAsyncThunk(
	"profiles/updatePhotoStatus",
	async (data: FormData) => {
		const res = await postUpdatePhoto(data);

		return res.data;
	}
);
export const updateProfileType = createAsyncThunk(
	"profiles/updateTypeStatus",
	async (data: IProfileType) => {
		const res = await axios.post(
			`/api/account/profiles/update-role`,
			data
		);
		return res.data.data;
	}
);
export const profileSlice = createSlice({
	name: "profiles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Get profile data
		builder.addCase(
			fetchProfileData.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
		// Update profile data
		builder.addCase(
			updateProfileData.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload;
			}
		);
		// Update profile photo
		builder.addCase(
			updateProfilePhoto.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.user;
			}
		);
		// Update profile type
		builder.addCase(
			updateProfileType.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload;
			}
		);
	},
});

export default profileSlice.reducer;
