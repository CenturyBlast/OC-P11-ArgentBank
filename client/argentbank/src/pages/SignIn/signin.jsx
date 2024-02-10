import Form from "../../components/Form/form";

export default function SignIn() {

    return (
        <main className="main bg-dark">
            <section className="sign-in_content">
                <i className="fa fa-user-circle sign-in_icon"></i>
                <h1>Sign In</h1>
                <Form />
            </section>
        </main>
    );
}