import { login } from '@/actions/authActions';

export default function LoginPage() {
    return (
        <form action={login}>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button>Log in</button>
        </form>
    );
}
