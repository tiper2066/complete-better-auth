'use server';
import { auth } from '@/lib/auth';

export const signIn = async () => {
    // 로그인에 필요한 signIn 함수
    await auth.api.signInEmail({
        // auth.api 에서 제공하는 signInEmail 함수를 사용함
        body: {
            email: 'zozo@email.com', // 로그인 시 필요한  email 과 password 를 설정해 둔다.
            password: 'zozo12345',
        },
    });
};

export const signUp = async () => {
    // 회원가입에 필요한 signUp 함수
    await auth.api.signUpEmail({
        // auth.api 에서 제공하는 signUpEmail 함수를 사용함
        body: {
            email: 'zozo@email.com', // 회원 가입 시 필요한 email, password, name 을  미리 설정해 둔다.
            password: 'zozo12345',
            name: 'zozo dev',
        },
    });
};
