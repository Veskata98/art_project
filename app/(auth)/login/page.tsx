import { login } from '@/actions/authActions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <form action={login} className="flex flex-col gap-6 w-96 p-4 container">
      <Input type="email" name="email" placeholder="Имейл" />
      <Input type="password" name="password" placeholder="Парола" />
      <Button variant="default">Влизане</Button>
    </form>
  );
}
