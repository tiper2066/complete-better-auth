'use client';
import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut();
        router.push('/login');
    };
    return (
        <Button variant="outline" onClick={handleLogout}>
            Logout <LogOut className="size-4" />
        </Button>
    );
};
export default Logout;
