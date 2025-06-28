'use server';
import { auth } from '@/lib/auth';

//  email, password 전달
export const signIn = async (email: string, password: string) => {
    try {
        // 로그인에 필요한 signIn 함수
        await auth.api.signInEmail({
            // auth.api 에서 제공하는 signInEmail 함수를 사용함
            body: {
                email: email, //  전달된 email
                password: password, //  전달된 password
            },
        });

        return {
            success: true,
            message: 'Signed in successfully',
        };
    } catch (error) {
        const e = error as Error;
        return {
            success: false,
            message: e.message || 'An unknown error occurred',
        };
    }
};

export const signUp = async (
    email: string,
    password: string,
    username: string
) => {
    try {
        // 회원가입에 필요한 signUp 함수
        await auth.api.signUpEmail({
            // auth.api 에서 제공하는 signUpEmail 함수를 사용함
            body: {
                email: email, // 전달받은 email, password, username 을  동일한 속성값으로 할당
                password: password,
                name: username,
            },
        });

        return {
            success: true,
            message: 'Signed up successfully',
        };
    } catch (error) {
        const e = error as Error;
        return {
            success: false,
            message: e.message || 'An unknown error occurred.',
        };
    }
};
