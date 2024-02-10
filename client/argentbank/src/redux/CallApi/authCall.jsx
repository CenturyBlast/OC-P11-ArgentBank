import Axios from "axios";
import { setToken } from "../Slices/authSlice";

// GET TOKEN

export const loginUser = (userCredentials) => async (dispatch) => {

    try {
        const response = await Axios.post(`http://localhost:3001/api/v1/user/login`, userCredentials);
        console.log('Retour GET TOKEN', response.data.body.token);
        const token = response.data.body.token;
        dispatch(setToken(token));
    }

    catch (error) {
        alert('Erreur lors de la connexion utilisateur');
        console.error(error);
        throw error;
    }
};
