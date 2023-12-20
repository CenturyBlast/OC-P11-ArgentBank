import Account from "../../components/Account/account";

export default function User() {
    return (
        <main className="main bg-dark">
            <div className="greetings">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
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
                amount="$10, 928.42"
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