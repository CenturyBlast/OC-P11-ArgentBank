import { useState, useEffect } from "react";
import Account from "../../components/Account/account";
import Edit from "../../components/Edit/edit";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/CallApi/userCall";

export default function User() {

    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getData() {

            try {

                getUserInfo(token, dispatch);
                console.log("TOKEN DISPATCH")
            }

            catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [token, dispatch]);

    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
    };

    return (
        <main className="main bg-dark">
            <div className="greetings">
                <div>
                    {!editing && <h1>Welcome back<br />{user.userName}!</h1>}
                </div>
                {editing ? (<Edit onCancel={handleCancel} />
                ) : (
                    <button className="edit-button" onClick={handleEditing}>
                        Edit Name
                    </button>
                )}

            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking"
                accountNumber="x8349"
                amount="$2,082.79"
                amountDescription="Available Balance"
            />
            <Account
                title="Argent Bank Savings"
                accountNumber="x6712"
                amount="$10,928.42"
                amountDescription="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card"
                accountNumber="x8349"
                amount="$184.30"
                amountDescription="Current Balance"
            />
        </main>
    );
}