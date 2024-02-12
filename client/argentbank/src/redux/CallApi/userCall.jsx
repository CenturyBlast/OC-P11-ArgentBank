import { setUserInfo, setNewUsername } from "../Slices/authSlice";


// GET USER INFO

export async function getUserInfo(token, dispatch) {
    console.log("APPEL RQ GET USER INFO");
    try {

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: headers,
        });
        console.log('rep. RQ GET INFOS', response);

        if (response.ok) {
            const data = await response.json();
            console.log('Retour Data GET INFOS', data);
            dispatch(setUserInfo(data.body));
            dispatch(setNewUsername(data.body.userName));

        } else {
            console.error('Erreur lors de la requête de profil:', response.status);
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
};


// UPDATE USERNAME

export async function updateUsername(token, newUserName, dispatch) {

    try {

        const requestBody = {
            userName: newUserName,
        };
        console.log(" token ", token, " rq body ", requestBody);
        const request = await fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'PUT',
            headers: {
                accept: "application/json",
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestBody),
        });
        console.log('rep. RQ NEW U.N.', request);

        const data = await request.json();
        console.log('rep. RQ DATA NEW U.N.', data);
        dispatch(setNewUsername(data.body.userName));
    }

    catch (error) {
        alert('Erreur lors de la modification du User Name');
        console.error(error);
    }
};
